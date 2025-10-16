const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Otp = require("../models/Otp");

// REGISTER
exports.registerUser = async (req, res) => {
    try {
        const { name, username, email, password, phone, verificationToken } = req.body;

        // بررسی اینکه username قبلاً وجود نداشته باشه
        const existingUsername = await User.findOne({ username });
        if (existingUsername) return res.status(400).json({ message: "Username already exists" });

        // بررسی اینکه email قبلاً وجود نداشته باشه
        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: "Email already exists" });

        // Enforce OTP verification (simple mode)
        if (!verificationToken) {
            return res.status(400).json({ message: "verificationToken is required" });
        }

        const otpRecord = await Otp.findById(verificationToken);
        if (!otpRecord) {
            return res.status(400).json({ message: "Invalid verification token" });
        }
        if (!otpRecord.verified) {
            return res.status(400).json({ message: "OTP not verified" });
        }
        // Ensure OTP target matches email or phone
        const matchesEmail = otpRecord.channel === 'email' && otpRecord.target === email;
        const matchesPhone = otpRecord.channel === 'sms' && otpRecord.target === phone;
        if (!matchesEmail && !matchesPhone) {
            return res.status(400).json({ message: "OTP does not match provided contact" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            username,
            email,
            phone,
            password: hashedPassword,
            profile: { age: null, address: null, avatar: null },
        });

        await user.save();
        // Invalidate OTP record for reuse prevention
        try { await Otp.deleteOne({ _id: otpRecord._id }); } catch (e) {}
        res.json({ 
            message: "User registered successfully", 
            user: { 
                id: user._id, 
                name: user.name, 
                username: user.username,
                email: user.email 
            } 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

<<<<<<< HEAD
// REGISTER WITHOUT OTP (Simple Registration)
exports.registerUserSimple = async (req, res) => {
    try {
        const { name, username, email, password, phone } = req.body;

        // بررسی اینکه username قبلاً وجود نداشته باشه
        const existingUsername = await User.findByUsername(username);
        if (existingUsername) return res.status(400).json({ message: "Username already exists" });

        // بررسی اینکه email قبلاً وجود نداشته باشه
        const existingEmail = await User.findByEmail(email);
        if (existingEmail) return res.status(400).json({ message: "Email already exists" });

        // بررسی اینکه phone قبلاً وجود نداشته باشه
        if (phone) {
            const existingPhone = await User.findByPhone(phone);
            if (existingPhone) return res.status(400).json({ message: "Phone number already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            username,
            email,
            phone: phone || null,
            password: hashedPassword,
            age: null,
            address: null,
            avatar: null,
        });

        res.json({ 
            message: "User registered successfully (without OTP)", 
            user: { 
                id: user.id, 
                name: user.name, 
                username: user.username,
                email: user.email,
                phone: user.phone
            } 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

=======
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
// LOGIN (expects req.user set by passport.authenticate)
exports.loginUser = async (req, res) => {
    try {
        const user = req.user;
        if (!user) return res.status(401).json({ message: "Not authenticated" });

        const jwtSecret = process.env.JWT_SECRET || 'fallback-jwt-secret-please-set-in-env';
        if (!process.env.JWT_SECRET) {
            console.warn('⚠️  WARNING: JWT_SECRET not set in environment variables. Using fallback secret.');
        }
        const token = jwt.sign(
            { id: user._id, role: user.role },
            jwtSecret,
            { expiresIn: "30d" }
        );

        // ذخیره اطلاعات کاربر در session
        if (req.session) {
            req.session.userId = user.id;
            req.session.userRole = user.role;
            req.session.userEmail = user.email;
            req.session.token = token;
            console.log('💾 Session saved for user:', user.email);
        }

        return res.status(200).json({
            message: "User login successfully",
            token,
            user: { id: user._id, name: user.name, username: user.username, email: user.email, profile: user.profile }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// GET PROFILE
exports.getProfile = async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "User not authorized" });
    res.json({ user: req.user });
};

// EDIT PROFILE
exports.editProfile = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ message: "User not authorized" });

        const { username, email, password, currentPassword, age, avatar, address } = req.body;

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.profile = user.profile || {};

        if (username) {
            const existingUsername = await User.findOne({ username });
            if (existingUsername && existingUsername._id.toString() !== user._id.toString()) {
                return res.status(400).json({ message: "Username already in use" });
            }
            user.username = username;
        }

        if (email) {
            const existingUser = await User.findOne({ email });
            if (existingUser && existingUser._id.toString() !== user._id.toString()) {
                return res.status(400).json({ message: "Email already in use" });
            }
            user.email = email;
        }

        // بررسی اینکه phone قبلاً وجود نداشته باشه (اگر تغییر کرده)
        if (req.body.phone) {
            const existingPhone = await User.findByPhone(req.body.phone);
            if (existingPhone && existingPhone.id !== user.id) {
                return res.status(400).json({ message: "Phone number already in use" });
            }
            updateData.phone = req.body.phone;
        }

        if (age !== undefined) {
            if (typeof age !== "number" || age < 0) return res.status(400).json({ message: "Invalid age" });
            user.profile.age = age;
        }

        if (address !== undefined) user.profile.address = address;
        if (avatar !== undefined) user.profile.avatar = avatar;

        if (password) {
            if (!currentPassword) return res.status(400).json({ message: "Current password is required" });
            if (!user.password) return res.status(400).json({ message: "This account uses Google login and cannot change password" });

            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) return res.status(401).json({ message: "Current password is incorrect" });

            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();
        res.json({ message: "Profile updated successfully", user: { id: user._id, name: user.name, username: user.username, email: user.email, profile: user.profile } });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// LOGOUT
exports.logoutUser = async (req, res, next) => {
    // پاک کردن session
    if (req.session) {
        console.log('🗑️ Clearing session for user:', req.session.userEmail);
        req.session.destroy((err) => {
            if (err) {
                console.error('❌ Error destroying session:', err);
                return next(err);
            }
            res.json({ message: "Logout successfully" });
        });
    } else {
        req.logout(err => {
            if (err) return next(err);
            res.json({ message: "Logout successfully" });
        });
    }
};
