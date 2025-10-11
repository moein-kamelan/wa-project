const User = require('../models/User');
const Campaign = require('../models/Campaign');

// Middleware to check subscription limits for campaign creation
exports.checkSubscriptionLimit = async (req, res, next) => {
    try {
        // For multipart/form-data requests, req.body might be undefined
        // This middleware should be used after file upload processing
        const recipientsCount = req.body?.recipientsCount || req.recipientsCount;
        
        if (!recipientsCount || recipientsCount <= 0) {
            return next(); // Skip validation if no recipients count provided
        }

        // Get user with purchased packages
        const user = await User.findById(req.user._id).populate('purchasedPackages');
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if user has active subscription
        if (!user.subscription.isActive || new Date() > user.subscription.expiresAt) {
            return res.status(403).json({ 
                message: "Active subscription required to create campaigns",
                code: "SUBSCRIPTION_EXPIRED"
            });
        }

        // Calculate total message limit from user's packages
        let totalMessageLimit = 0;
        if (user.purchasedPackages && user.purchasedPackages.length > 0) {
            totalMessageLimit = user.purchasedPackages.reduce((total, pkg) => {
                return total + (pkg.messageLimit || 0);
            }, 0);
        }

        // If no packages or no message limit, deny access
        if (totalMessageLimit === 0) {
            return res.status(403).json({ 
                message: "No message quota available. Please purchase a package to send campaigns.",
                code: "NO_QUOTA"
            });
        }

        // Check if recipients count exceeds limit
        if (recipientsCount > totalMessageLimit) {
            return res.status(400).json({ 
                message: `Recipients count (${recipientsCount}) exceeds your subscription limit (${totalMessageLimit})`,
                code: "QUOTA_EXCEEDED",
                limit: totalMessageLimit,
                requested: recipientsCount
            });
        }

        // Check current usage (count of messages sent in active campaigns)
        const currentUsage = await Campaign.aggregate([
            {
                $match: {
                    user: req.user._id,
                    status: { $in: ['running', 'completed'] }
                }
            },
            {
                $group: {
                    _id: null,
                    totalSent: { $sum: '$progress.sent' }
                }
            }
        ]);

        const usedMessages = currentUsage.length > 0 ? currentUsage[0].totalSent : 0;
        const remainingQuota = totalMessageLimit - usedMessages;

        if (recipientsCount > remainingQuota) {
            return res.status(400).json({ 
                message: `Insufficient quota. You have ${remainingQuota} messages remaining out of ${totalMessageLimit} total.`,
                code: "INSUFFICIENT_QUOTA",
                remaining: remainingQuota,
                total: totalMessageLimit,
                used: usedMessages
            });
        }

        // Add quota info to request for use in controller
        req.quotaInfo = {
            total: totalMessageLimit,
            used: usedMessages,
            remaining: remainingQuota
        };

        next();

    } catch (err) {
        console.error('Subscription validation error:', err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


// Middleware to check if user can start a campaign
exports.checkCampaignStartPermission = async (req, res, next) => {
    try {
        const { campaignId } = req.params;
        
        // Get campaign
        const campaign = await Campaign.findOne({ 
            _id: campaignId, 
            user: req.user._id 
        });

        if (!campaign) {
            return res.status(404).json({ message: "Campaign not found" });
        }

        // Get user with subscription info
        const user = await User.findById(req.user._id);
        
        if (!user.subscription.isActive || new Date() > user.subscription.expiresAt) {
            return res.status(403).json({ 
                message: "Active subscription required to start campaigns",
                code: "SUBSCRIPTION_EXPIRED"
            });
        }

        // Check if campaign has recipients
        if (!campaign.recipients || campaign.recipients.length === 0) {
            return res.status(400).json({ 
                message: "Campaign must have recipients before starting" 
            });
        }

        // Check if WhatsApp is connected
        if (!campaign.whatsappSession.isConnected) {
            return res.status(400).json({ 
                message: "WhatsApp account must be connected before starting campaign" 
            });
        }

        next();

    } catch (err) {
        console.error('Campaign start permission error:', err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Middleware to get user's subscription info
exports.getSubscriptionInfo = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).populate('purchasedPackages');
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Calculate message limits
        let totalMessageLimit = 0;
        if (user.purchasedPackages && user.purchasedPackages.length > 0) {
            totalMessageLimit = user.purchasedPackages.reduce((total, pkg) => {
                return total + (pkg.messageLimit || 0);
            }, 0);
        }

        // Get current usage
        const currentUsage = await Campaign.aggregate([
            {
                $match: {
                    user: req.user._id,
                    status: { $in: ['running', 'completed'] }
                }
            },
            {
                $group: {
                    _id: null,
                    totalSent: { $sum: '$progress.sent' }
                }
            }
        ]);

        const usedMessages = currentUsage.length > 0 ? currentUsage[0].totalSent : 0;
        const remainingQuota = totalMessageLimit - usedMessages;

        // Add subscription info to request
        req.subscriptionInfo = {
            isActive: user.subscription.isActive && new Date() <= user.subscription.expiresAt,
            expiresAt: user.subscription.expiresAt,
            totalLimit: totalMessageLimit,
            used: usedMessages,
            remaining: remainingQuota,
            packages: user.purchasedPackages.map(pkg => ({
                id: pkg._id,
                title: pkg.title,
                messageLimit: pkg.messageLimit
            }))
        };

        next();

    } catch (err) {
        console.error('Subscription info error:', err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
