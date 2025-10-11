# API Documentation

## Base URL
```
http://localhost:3000
```

## Authentication Methods

<<<<<<< HEAD
### JWT Token-Based Authentication
Most APIs use JWT tokens for authentication:

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Token Endpoints:**
- Login: `POST /api/auth/login`
- Register: `POST /api/auth/register`
- Refresh Token: `POST /api/auth/refresh`
- Logout: `POST /api/auth/logout`

**Session-Based Authentication (New):**
The system now supports automatic token extraction from session cookies:

**How it works:**
1. User logs in via `POST /api/auth/login`
=======
### 🔐 Session-Based Authentication (Primary - Recommended)
The system now uses **session-based authentication** as the primary method:

**How it works:**
1. User logs in via `POST /api/user/login`
>>>>>>> 7b5cd487057b4bfae44be4242df2cc2e89880df7
2. JWT token is automatically stored in session cookie
3. Frontend can make requests without manually adding Authorization header
4. Middleware automatically extracts token from session

**Benefits:**
<<<<<<< HEAD
- No need to manually manage Authorization headers
- Automatic token storage in session
- Seamless frontend integration
- Fallback to manual Authorization header if needed

**Frontend Implementation Example:**
```javascript
// Login request (token automatically stored in session)
const loginResponse = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include' // Important: include cookies
});

// Subsequent requests (no Authorization header needed)
const campaignsResponse = await fetch('/api/campaigns', {
    credentials: 'include' // Session cookie automatically sent
});

=======
- ✅ **No Authorization header needed** - Frontend doesn't need to manage tokens manually
- ✅ **Automatic token storage** - JWT stored securely in session cookie
- ✅ **Seamless frontend integration** - Just use `credentials: 'include'`
- ✅ **Fallback support** - Falls back to Authorization header if needed
- ✅ **Database resilience** - Works even if database is temporarily unavailable

**Frontend Implementation:**
```javascript
// 1. Login (token automatically stored in session)
const loginResponse = await fetch('/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Important: include cookies
    body: JSON.stringify({ email, password })
});

// 2. All subsequent requests (no Authorization header needed!)
const campaignsResponse = await fetch('/api/campaigns', {
    method: 'GET',
    credentials: 'include' // Session cookie automatically sent
});

const createCampaignResponse = await fetch('/api/campaigns', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Session cookie automatically sent
    body: JSON.stringify({ message: 'Hello World' })
});
```

### 🔄 JWT Token-Based Authentication (Fallback)
Traditional JWT authentication is still supported as fallback:

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**When to use:**
- When session authentication is not available
- For API testing with tools like Postman
- For server-to-server communication

**Example:**
```javascript
const response = await fetch('/api/campaigns', {
    headers: {
        'Authorization': 'Bearer your-jwt-token'
    }
});
```

>>>>>>> 7b5cd487057b4bfae44be4242df2cc2e89880df7
// Still works with manual Authorization header
const manualResponse = await fetch('/api/campaigns', {
    headers: { 'Authorization': `Bearer ${token}` }
});
```

<<<<<<< HEAD
=======
## 🔧 Recent Updates

### Session Authentication Fix (December 2024)
**Problem:** Frontend developers had to manually manage Authorization headers for every request, and tokens would expire requiring re-login.

**Solution:** Implemented session-based authentication as the primary method:
- ✅ **Automatic token extraction** from session cookies
- ✅ **No Authorization header required** for most requests  
- ✅ **Fallback support** to traditional JWT authentication
- ✅ **Database resilience** - works even if database is temporarily unavailable

**Impact:**
- 🚀 **Improved developer experience** - No manual token management
- 🔒 **Enhanced security** - Tokens stored in httpOnly cookies
- 🛠️ **Better reliability** - Fallback mechanisms for edge cases
- 📱 **Seamless frontend integration** - Just use `credentials: 'include'`
```

>>>>>>> 7b5cd487057b4bfae44be4242df2cc2e89880df7
### Session-Based Authentication
Some endpoints use session-based authentication:

**Session Endpoints:**
- Admin Login: `POST /api/admin/login`
- Admin Logout: `POST /api/admin/logout`

### Public Endpoints
These endpoints don't require authentication:

**Public Endpoints:**
- Health Check: `GET /api/health`
- Download Excel Template: `GET /api/campaigns/excel-template/download`
- Serve Temporary Files: `GET /api/temp-files/:filename`

## Authentication
- **JWT Token**: Required for protected endpoints
- **Session Cookie**: Required for profile endpoints
- **Admin Role**: Required for admin endpoints

---

## 🔐 Auth Endpoints

### Request OTP
**POST** `/api/auth/request-otp`

Send OTP via SMS or Email for user registration.

**Request Body:**
```json
{
  "channel": "sms|email",
  "target": "09120000000|user@example.com"
}
```

**Response:**
```json
{
  "message": "OTP sent"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/api/auth/request-otp \
  -H "Content-Type: application/json" \
  -d '{"channel":"sms","target":"09120000000"}'
```

### Verify OTP
**POST** `/api/auth/verify-otp`

Verify OTP code and get verification token.

**Request Body:**
```json
{
  "channel": "sms|email",
  "target": "09120000000|user@example.com",
  "code": "123456"
}
```

**Response:**
```json
{
  "message": "Verified",
  "verificationToken": "507f1f77bcf86cd799439011"
}
```

### Refresh Token
**POST** `/api/refresh/refresh`

Refresh access token using refresh token.

**Request Body:**
```json
{
  "refreshToken": "uuid-refresh-token"
}
```

**Response:**
```json
{
  "message": "Token refreshed successfully",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Logout
**POST** `/api/refresh/logout`

Logout and revoke refresh token.

**Request Body:**
```json
{
  "refreshToken": "uuid-refresh-token"
}
```

**Response:**
```json
{
  "message": "Logout successful"
}
```

### Logout All Devices
**POST** `/api/refresh/logout-all`

Logout from all devices (requires authentication).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Logged out from all devices"
}
```

---

## 👤 User Endpoints

### Register User
**POST** `/api/user/register`

Register a new user with OTP verification.

**Request Body:**
```json
{
  "name": "علی احمدی",
  "email": "ali@example.com",
  "phone": "09120000000",
  "password": "Passw0rd123!",
  "verificationToken": "507f1f77bcf86cd799439011"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "email": "ali@example.com"
  }
}
```

### Login User
**POST** `/api/user/login`

Authenticate user and get JWT token.

**Request Body:**
```json
{
  "email": "ali@example.com",
  "password": "Passw0rd123!"
}
```

**Response:**
```json
{
  "message": "User login successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "email": "ali@example.com",
    "profile": {
      "age": null,
      "address": null,
      "avatar": null
    }
  }
}
```

### Get Profile
**GET** `/api/user/profile`

Get current user profile (Session-based).

**Headers:** `Cookie: connect.sid=...`

**Response:**
```json
{
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "email": "ali@example.com",
    "role": "user",
    "status": "active",
    "profile": {
      "age": 25,
      "address": "تهران",
      "avatar": "https://example.com/avatar.jpg"
    },
    "purchasedPackages": [],
    "subscription": {
      "isActive": false,
      "expiresAt": null
    }
  }
}
```

### Update Profile
**POST** `/api/user/profile`

Update user profile (Session-based).

**Headers:** `Cookie: connect.sid=...`

**Request Body:**
```json
{
  "age": 25,
  "address": "تهران، خیابان ولیعصر",
  "avatar": "https://example.com/avatar.jpg",
  "password": "NewPassw0rd123!",
  "currentPassword": "Passw0rd123!"
}
```

**Response:**
```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "email": "ali@example.com",
    "profile": {
      "age": 25,
      "address": "تهران، خیابان ولیعصر",
      "avatar": "https://example.com/avatar.jpg"
    }
  }
}
```

### Logout
**POST** `/api/user/logout`

Logout user (Session-based).

**Headers:** `Cookie: connect.sid=...`

**Response:**
```json
{
  "message": "Logout successfully"
}
```

---

## 📦 Package Endpoints

### Get Packages
**GET** `/api/packages`

Get list of available packages (Public).

**Query Parameters:**
- `category` (optional): Filter by category
- `status` (optional): Filter by status (active/inactive)

**Response:**
```json
{
  "packages": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "پکیج طلایی",
      "description": "دسترسی کامل به تمام امکانات",
      "price": 490000,
      "duration": 30,
      "category": "services",
      "status": "active",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Get Package by ID
**GET** `/api/packages/:id`

Get specific package details (Public).

**Response:**
```json
{
  "package": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "پکیج طلایی",
    "description": "دسترسی کامل به تمام امکانات",
    "price": 490000,
    "duration": 30,
    "category": "services",
    "status": "active"
  }
}
```

### Create Package
**POST** `/api/packages`

Create new package (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "title": "پکیج طلایی",
  "description": "دسترسی کامل به تمام امکانات",
  "price": 490000,
  "duration": 30,
  "category": "services",
  "status": "active"
}
```

**Response:**
```json
{
  "message": "Package created",
  "package": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "پکیج طلایی",
    "description": "دسترسی کامل به تمام امکانات",
    "price": 490000,
    "duration": 30,
    "category": "services",
    "status": "active"
  }
}
```

### Update Package
**PUT** `/api/packages/:id`

Update package (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "price": 590000,
  "status": "inactive"
}
```

**Response:**
```json
{
  "message": "Package updated",
  "package": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "پکیج طلایی",
    "price": 590000,
    "status": "inactive"
  }
}
```

### Delete Package
**DELETE** `/api/packages/:id`

Delete package (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Package deleted"
}
```

---

## 🛒 Order Endpoints

### Create Order
**POST** `/api/orders`

Create new order for a package.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "packageId": "507f1f77bcf86cd799439011"
}
```

**Response:**
```json
{
  "message": "Order created",
  "order": {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439012",
    "package": "507f1f77bcf86cd799439013",
    "status": "pending",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Get My Orders
**GET** `/api/orders/me`

Get current user's orders.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "orders": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "user": "507f1f77bcf86cd799439012",
      "package": {
        "_id": "507f1f77bcf86cd799439013",
        "title": "پکیج طلایی",
        "price": 490000
      },
      "status": "paid",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

## 💳 Payment Endpoints

### Start Payment
**POST** `/api/payments/start`

Initiate payment with Zarinpal gateway.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "orderId": "507f1f77bcf86cd799439011"
}
```

**Response:**
```json
{
  "message": "Payment initiated",
  "paymentUrl": "https://www.zarinpal.com/pg/StartPay/A000000000000000000000000000000000000",
  "authority": "A000000000000000000000000000000000000"
}
```

### Confirm Payment (Mock)
**POST** `/api/payments/confirm`

Confirm payment for testing (Mock gateway).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "orderId": "507f1f77bcf86cd799439011",
  "success": true
}
```

**Response:**
```json
{
  "message": "Payment successful",
  "orderId": "507f1f77bcf86cd799439011"
}
```

### Payment Callback
**GET** `/api/payments/callback`

Zarinpal payment callback (Public).

**Query Parameters:**
- `Authority`: Payment authority code
- `Status`: Payment status (OK/NOK)

**Response:** Redirects to frontend success/failure page.

---

## 👨‍💼 Admin Endpoints

### Get Users
**GET** `/api/admin/users`

Get list of users (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Query Parameters:**
- `q` (optional): Search query
- `role` (optional): Filter by role (user/admin/superAdmin)
- `status` (optional): Filter by status (active/inactive/banned)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

**Response:**
```json
{
  "users": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "علی احمدی",
      "email": "ali@example.com",
      "phone": "09120000000",
      "role": "user",
      "status": "active",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "page": 1,
  "limit": 20,
  "total": 1
}
```

### Update User Role
**PATCH** `/api/admin/users/:userId/role`

Update user role (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "role": "admin"
}
```

**Response:**
```json
{
  "message": "Role updated",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "role": "admin"
  }
}
```

### Update User Status
**PATCH** `/api/admin/users/:userId/status`

Update user status (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "status": "banned"
}
```

**Response:**
```json
{
  "message": "Status updated",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "status": "banned"
  }
}
```

### Get Transactions
**GET** `/api/admin/transactions`

Get list of transactions (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Query Parameters:**
- `status` (optional): Filter by status (success/failure/pending)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

**Response:**
```json
{
  "transactions": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "order": {
        "_id": "507f1f77bcf86cd799439012",
        "user": {
          "_id": "507f1f77bcf86cd799439013",
          "name": "علی احمدی"
        },
        "package": {
          "_id": "507f1f77bcf86cd799439014",
          "title": "پکیج طلایی"
        }
      },
      "amount": 490000,
      "status": "success",
      "gateway": "zarinpal",
      "refId": "123456789",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "page": 1,
  "limit": 20,
  "total": 1
}
```

### Get Dashboard Stats
**GET** `/api/admin/dashboard`

Get admin dashboard statistics (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "usersCount": 150,
  "packagesCount": 5,
  "paidOrdersCount": 89,
  "totalSales": 43500000
}
```

### Upload Excel Template
**POST** `/api/admin/excel-template`

Upload Excel template file for recipient data (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request:** `multipart/form-data`
- `template`: Excel file (.xlsx) with recipient template

**Response:**
```json
{
  "message": "Excel template uploaded successfully",
  "template": {
    "filename": "recipients-template.xlsx",
    "originalName": "template.xlsx",
    "size": 8192,
    "path": "/uploads/templates/recipients-template.xlsx"
  }
}
```

### Download Excel Template (Admin)
**GET** `/api/admin/excel-template/download`

Download the current Excel template file (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:** Excel file download (`recipients-template.xlsx`)

### Get Excel Template Info
**GET** `/api/admin/excel-template/info`

Get information about the current Excel template (Admin only).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "hasTemplate": true,
  "template": {
    "filename": "recipients-template.xlsx",
    "size": 8192,
    "lastModified": "2024-01-15T10:30:00.000Z",
    "path": "/uploads/templates/recipients-template.xlsx"
  }
}
```

---

## 📱 Campaign Endpoints

### Get Subscription Info
**GET** `/api/campaigns/subscription`

Get user's subscription information and message quota.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "subscription": {
    "isActive": true,
    "expiresAt": "2024-02-01T00:00:00.000Z",
    "totalLimit": 1000,
    "used": 150,
    "remaining": 850,
    "packages": [
      {
        "id": "507f1f77bcf86cd799439011",
        "title": "پکیج طلایی",
        "messageLimit": 1000
      }
    ]
  }
}
```

### Campaign Wizard Flow

The campaign creation follows an 8-step wizard:

1. **Step 1: تعریف کمپین و متن پیام** - Create campaign and message text
2. **Step 2: آپلود فایل Excel مخاطبین** - Upload Excel file with recipients
3. **Step 3: آپلود فایل ضمیمه (اختیاری)** - Upload attachment (optional)
4. **Step 4: تنظیم فاصله ارسال** - Set sending interval and schedule
5. **Step 5: اتصال WhatsApp** - Connect WhatsApp
6. **Step 6: پیش‌نمایش و تایید** - Preview and confirm
7. **Step 7: شروع ارسال** - Start sending
8. **Step 8: گزارش نهایی** - Final report

### Create Campaign
**POST** `/api/campaigns`

Create a new WhatsApp campaign with automatic title generation.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "message": "سلام! پیشنهاد ویژه برای شما..."
}
```

**Response:**
```json
{
  "message": "Campaign created successfully",
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "title": "14040303",
    "humanReadableTitle": "کمپین ۳ خرداد ۱۴۰۴",
    "status": "draft"
  }
}
```

**Note:** The `title` field is automatically generated based on the Persian date of creation (format: YYYYMMDD). The `humanReadableTitle` provides a Persian-readable version of the date.

### Get Campaign Step Status
**GET** `/api/campaigns/:campaignId/steps`

Get the current step status of a campaign in the 8-step flow.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "status": "draft",
    "currentStep": 2,
    "stepStatus": {
      "step1": { "completed": true, "title": "تعریف کمپین و متن پیام" },
      "step2": { "completed": true, "title": "دانلود فایل نمونه اکسل" },
      "step3": { "completed": false, "title": "آپلود فایل اکسل" },
      "step4": { "completed": false, "title": "افزودن فایل ضمیمه" },
      "step5": { "completed": false, "title": "تنظیمات وقفه ارسال" },
      "step6": { "completed": false, "title": "اتصال حساب WhatsApp" },
      "step7": { "completed": false, "title": "ارسال پیام‌ها" },
      "step8": { "completed": false, "title": "گزارش نهایی" }
    },
    "progress": {
      "total": 0,
      "sent": 0,
      "failed": 0
    },
    "message": "سلام! پیشنهاد ویژه برای شما...",
    "interval": "10s",
    "recipientsCount": 0,
    "hasAttachment": false,
    "whatsappConnected": false
  }
}
```


### Download Excel Template
**GET** `/api/campaigns/excel-template/download`

Download the Excel template file for recipient data.

**Response:** Excel file download (`recipients-template.xlsx`)

**Template Format:**
- **Column A:** `phone` - Phone number (required)
- **Column B:** `name` - Recipient name (optional)

**Example Template Content:**
```
phone         | name
09123456789   | علی احمدی
09987654321   | فاطمه محمدی
09111111111   | حسن رضایی
```

### Upload Recipients
**POST** `/api/campaigns/:campaignId/recipients`

Upload Excel file with recipient phone numbers.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request:** `multipart/form-data`
- `recipientsFile`: Excel file (.xlsx, .xls) with columns: phone, name

**Response:**
```json
{
  "message": "Recipients uploaded successfully",
  "recipientsCount": 150,
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "status": "ready",
    "totalRecipients": 150
  }
}
```

### Upload Attachment
**POST** `/api/campaigns/:campaignId/attachment`

Upload file attachment for campaign. If an attachment already exists, it will be replaced.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request:** `multipart/form-data`
- `attachment`: File (any type except dangerous formats)

**Allowed File Types:**
- All file types are allowed except dangerous formats (executable files, etc.)
- Examples: Images (JPEG, PNG, GIF), Documents (PDF, DOC, TXT), Archives (ZIP, RAR), Excel (XLSX, XLS), etc.

**Max File Size:** 20MB

**Response:**
```json
{
  "message": "Attachment uploaded successfully",
  "attachment": {
    "filename": "attachment-1234567890.jpg",
    "originalName": "product-image.jpg",
    "size": 1024000,
    "mimetype": "image/jpeg"
  }
}
```

### Get Attachment Details
**GET** `/api/campaigns/:campaignId/attachment`

Get details about the campaign's attachment.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response (with attachment):**
```json
{
  "hasAttachment": true,
  "attachment": {
    "filename": "attachment-1234567890.jpg",
    "originalName": "product-image.jpg",
    "size": 1024000,
    "mimetype": "image/jpeg",
    "uploadDate": "2024-01-15T10:30:00.000Z"
  }
}
```

**Response (no attachment):**
```json
{
  "hasAttachment": false,
  "attachment": null
}
```

### Delete Attachment
**DELETE** `/api/campaigns/:campaignId/attachment`

Delete the campaign's attachment. Cannot be done while campaign is running.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Attachment deleted successfully"
}
```

**Error Response (campaign running):**
```json
{
  "message": "Cannot delete attachment while campaign is running"
}
```

### Upload Temporary Attachment
**POST** `/api/campaigns/:campaignId/attachment/temp`

Upload file attachment temporarily for preview before final confirmation.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request:** `multipart/form-data`
- `attachment`: File (any type except dangerous formats)

**Response:**
```json
{
  "message": "Temporary attachment uploaded successfully",
  "file": {
    "filename": "temp-attachment-1234567890.jpg",
    "originalName": "my-image.jpg",
    "size": 1024000,
    "mimetype": "image/jpeg",
    "tempPath": "uploads/temp/temp-attachment-1234567890.jpg",
    "url": "/api/temp-files/temp-attachment-1234567890.jpg"
  }
}
```

### Confirm Attachment
**POST** `/api/campaigns/:campaignId/attachment/confirm`

Confirm temporary attachment and move to permanent storage.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "tempFilename": "temp-attachment-1234567890.jpg",
  "originalName": "my-image.jpg",
  "mimetype": "image/jpeg"
}
```

**Response:**
```json
{
  "message": "Attachment confirmed and saved successfully",
  "attachment": {
    "filename": "attachment-1234567890.jpg",
    "originalName": "my-image.jpg",
    "size": 1024000,
    "mimetype": "image/jpeg"
  }
}
```

### Serve Temporary Files
**GET** `/api/temp-files/:filename`

Serve temporary files for preview.

**Response:** File content with appropriate headers.

### Clean Up Temporary Files
**POST** `/api/campaigns/cleanup-temp`

Clean up old temporary files (older than 24 hours).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Cleaned up 5 temporary files",
  "cleanedCount": 5
}
```

### Get Campaign Preview
**GET** `/api/campaigns/:campaignId/preview`

Get campaign preview for wizard step 6 with recipient cards.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign preview retrieved successfully",
  "campaign": {
    "id": "campaign_id",
    "message": "سلام، روزت بخیر 🌹",
    "totalRecipients": 150,
    "interval": "10s",
    "hasAttachment": true,
    "attachment": {
      "filename": "image1.jpg",
      "size": 2048000,
      "type": "image/jpeg"
    },
    "whatsappConnected": true,
    "status": "ready"
  },
  "recipients": [
    {
      "id": 1,
      "phone": "09121234567",
      "name": "علی احمدی",
      "message": "سلام، روزت بخیر 🌹",
      "attachment": {
        "filename": "image1.jpg",
        "size": 2048000,
        "type": "image/jpeg"
      }
    }
  ],
  "preview": {
    "totalCards": 150,
    "sampleCards": [...],
    "hasMore": true
  }
}
```

### Confirm and Start Campaign
**POST** `/api/campaigns/:campaignId/confirm-and-start`

Confirm campaign and start sending messages immediately.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign confirmed and started successfully",
  "campaign": {
    "id": "campaign_id",
    "status": "running",
    "totalRecipients": 150,
    "startedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Get Campaign Step Status
**GET** `/api/campaigns/:campaignId/steps`

Get campaign step status for wizard navigation.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign step status retrieved successfully",
  "campaign": {
    "id": "campaign_id",
    "status": "ready",
    "currentStep": 4,
    "totalSteps": 6
  },
  "steps": {
    "step1": {
      "name": "تعریف کمپین و متن پیام",
      "completed": true,
      "canNavigate": true
    },
    "step2": {
      "name": "آپلود فایل Excel مخاطبین",
      "completed": true,
      "canNavigate": true
    },
    "step3": {
      "name": "آپلود فایل ضمیمه (اختیاری)",
      "completed": false,
      "canNavigate": true,
      "optional": true
    },
    "step4": {
      "name": "تنظیم فاصله ارسال",
      "completed": true,
      "canNavigate": true
    },
    "step5": {
      "name": "اتصال WhatsApp",
      "completed": false,
      "canNavigate": true
    },
    "step6": {
      "name": "پیش‌نمایش و تایید",
      "completed": false,
      "canNavigate": false
    }
  },
  "navigation": {
    "canGoBack": true,
    "canGoForward": false,
    "availableSteps": ["step1", "step2", "step3", "step4", "step5"]
  }
}
```

### Navigate to Step
**POST** `/api/campaigns/:campaignId/navigate`

Navigate to specific wizard step.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "step": 3
}
```

**Response:**
```json
{
  "message": "Navigating to step 3",
  "step": {
    "number": 3,
    "name": "آپلود فایل ضمیمه (اختیاری)",
    "completed": false,
    "optional": true
  },
  "campaign": {
    "id": "campaign_id",
    "status": "ready",
    "message": "سلام، روزت بخیر 🌹",
    "recipients": 150,
    "attachment": null,
    "interval": "10s",
    "whatsappConnected": false
  }
}
```

### Go Back Step
**POST** `/api/campaigns/:campaignId/go-back`

Go back to previous wizard step.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Going back to step 3",
  "step": {
    "number": 3,
    "name": "آپلود فایل ضمیمه (اختیاری)",
    "completed": false
  },
  "campaign": {
    "id": "campaign_id",
    "status": "ready"
  }
}
```

### Reset to Step
**POST** `/api/campaigns/:campaignId/reset`

Reset campaign to specific step (clears data from that step onwards).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "step": 2
}
```

**Response:**
```json
{
  "message": "Campaign reset to step 2",
  "campaign": {
    "id": "campaign_id",
    "status": "draft",
    "message": "سلام، روزت بخیر 🌹",
    "recipients": 0,
    "attachment": null,
    "interval": "10s",
    "whatsappConnected": false
  }
}
```

### Set Campaign Interval and Schedule
**PUT** `/api/campaigns/:campaignId/interval`

Set campaign interval and schedule settings.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "interval": "10s",
  "sendType": "scheduled",
  "scheduledAt": "2024-01-15T14:30:00.000Z",
  "timezone": "Asia/Tehran"
}
```

**Response:**
```json
{
  "message": "Campaign settings updated successfully",
  "campaign": {
    "id": "campaign_id",
    "interval": "10s",
    "schedule": {
      "isScheduled": true,
      "scheduledAt": "2024-01-15T14:30:00.000Z",
      "timezone": "Asia/Tehran",
      "sendType": "scheduled"
    },
    "status": "ready"
  }
}
```

**Request Body (Immediate):**
```json
{
  "interval": "10s",
  "sendType": "immediate"
}
```

### Get Scheduled Campaigns
**GET** `/api/campaigns/scheduled`

Get all scheduled campaigns for the user.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Scheduled campaigns retrieved successfully",
  "campaigns": [
    {
      "id": "campaign_id",
      "message": "سلام، روزت بخیر 🌹",
      "recipients": 150,
      "scheduledAt": "2024-01-15T14:30:00.000Z",
      "timezone": "Asia/Tehran",
      "interval": "10s",
      "status": "ready"
    }
  ]
}
```

### Cancel Scheduled Campaign
**POST** `/api/campaigns/:campaignId/cancel-schedule`

Cancel a scheduled campaign.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Scheduled campaign cancelled successfully",
  "campaign": {
    "id": "campaign_id",
    "schedule": {
      "isScheduled": false,
      "scheduledAt": null,
      "timezone": "Asia/Tehran",
      "sendType": "immediate"
    }
  }
}
```

### Generate WhatsApp QR Code
**POST** `/api/campaigns/:campaignId/qr-code`

Generate QR code for WhatsApp connection.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "QR code generation initiated",
  "sessionId": "uuid-session-id",
  "instructions": "WhatsApp session is being prepared. QR code will be sent via WebSocket."
}
```

**Note:** QR code is sent via WebSocket in real-time. Connect to `ws://localhost:3000/ws/campaigns?campaignId=:campaignId&userId=:userId` to receive QR code.

### Check WhatsApp Connection
**GET** `/api/campaigns/:campaignId/connection`

Check WhatsApp connection status.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "isConnected": true,
  "lastActivity": "2024-01-01T12:00:00.000Z"
}
```

### Start Campaign
**POST** `/api/campaigns/:campaignId/start`

Start sending messages.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign started successfully",
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "status": "running",
    "totalRecipients": 150,
    "startedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

### Get Campaign Progress
**GET** `/api/campaigns/:campaignId/progress`

Get real-time campaign progress.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "status": "running",
    "progress": {
      "total": 150,
      "sent": 45,
      "failed": 2,
      "delivered": 43
    },
    "startedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

### Get My Campaigns
**GET** `/api/campaigns`

Get list of user's campaigns with filtering options.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Query Parameters:**
- `status` (optional): Filter by status (draft/ready/running/completed/paused/failed)
- `title` (optional): Filter by campaign title (case-insensitive search)
- `startDate` (optional): Filter campaigns created after this date (ISO format)
- `endDate` (optional): Filter campaigns created before this date (ISO format)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "campaigns": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "14040303",
      "humanReadableTitle": "کمپین ۳ خرداد ۱۴۰۴",
      "status": "completed",
      "progress": {
        "total": 150,
        "sent": 148,
        "failed": 2
      },
      "createdAt": "2024-01-01T00:00:00.000Z",
      "startedAt": "2024-01-01T12:00:00.000Z",
      "completedAt": "2024-01-01T12:30:00.000Z",
      "message": "سلام! پیشنهاد ویژه برای شما..."
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "filters": {
    "status": null,
    "title": null,
    "startDate": null,
    "endDate": null
  }
}
```

### Search Campaigns
**GET** `/api/campaigns/search`

Advanced search for campaigns with multiple filters and sorting options.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Query Parameters:**
- `query` (optional): General search term (searches in title and message)
- `status` (optional): Filter by status (draft/ready/running/completed/paused/failed)
- `title` (optional): Filter by campaign title (case-insensitive search)
- `startDate` (optional): Filter campaigns created after this date (ISO format)
- `endDate` (optional): Filter campaigns created before this date (ISO format)
- `sortBy` (optional): Sort field (createdAt/startedAt/completedAt/title) (default: createdAt)
- `sortOrder` (optional): Sort order (asc/desc) (default: desc)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "campaigns": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "14040303",
      "humanReadableTitle": "کمپین ۳ خرداد ۱۴۰۴",
      "status": "completed",
      "progress": {
        "total": 150,
        "sent": 148,
        "failed": 2
      },
      "createdAt": "2024-01-01T00:00:00.000Z",
      "startedAt": "2024-01-01T12:00:00.000Z",
      "completedAt": "2024-01-01T12:30:00.000Z",
      "message": "سلام! پیشنهاد ویژه برای شما..."
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "filters": {
    "query": "فروش",
    "status": "completed",
    "title": null,
    "startDate": "2024-01-01T00:00:00.000Z",
    "endDate": "2024-01-31T23:59:59.999Z",
    "sortBy": "createdAt",
    "sortOrder": "desc"
  }
}
```

### Generate Campaign Report
**GET** `/api/campaigns/:campaignId/report`

Generate campaign report (JSON format).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Report generated successfully",
  "report": {
    "campaignId": "507f1f77bcf86cd799439011",
    "status": "running",
    "totalMessages": 150,
    "successfulMessages": 45,
    "failedMessages": 2,
    "remainingMessages": 103,
    "deliveryRate": 30.0,
    "startedAt": "2024-01-01T12:00:00.000Z",
    "completedAt": null,
    "duration": 1800000,
    "isCompleted": false,
    "errors": [
      {
        "phone": "09120000001",
        "error": "Invalid phone number"
      }
    ]
  }
}
```

### Download Campaign Report
**GET** `/api/campaigns/:campaignId/report/download`

Download campaign report as Excel file.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
- **Content-Type**: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- **Content-Disposition**: `attachment; filename="campaign-report-{campaignId}.xlsx"`
- **Body**: Excel file with two sheets:
  - **Campaign Summary**: Overview of campaign statistics
  - **Recipients Details**: Detailed list of all recipients with status

**Note:** Report is available for campaigns with status: `running`, `paused`, or `completed`

### Pause Campaign
**POST** `/api/campaigns/:campaignId/pause`

Pause running campaign.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign paused successfully",
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "status": "paused"
  }
}
```

### Resume Campaign
**POST** `/api/campaigns/:campaignId/resume`

Resume paused campaign.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign resumed successfully",
  "campaign": {
    "id": "507f1f77bcf86cd799439011",
    "status": "running"
  }
}
```

### Delete Campaign
**DELETE** `/api/campaigns/:campaignId`

Delete campaign (only if not running).

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Response:**
```json
{
  "message": "Campaign deleted successfully"
}
```

---

## 📡 WebSocket Real-time Updates

### Connection
**WebSocket** `ws://localhost:3000/ws/campaigns?campaignId=CAMPAIGN_ID&userId=USER_ID`

Connect to WebSocket for real-time campaign updates.

**Query Parameters:**
- `campaignId`: Campaign ID to track
- `userId`: User ID for authentication

### Message Types

#### Campaign Update
```json
{
  "type": "campaign_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "status": "running",
    "progress": {
      "total": 150,
      "sent": 45,
      "failed": 2,
      "delivered": 43
    },
    "startedAt": "2024-01-01T12:00:00.000Z",
    "completedAt": null,
    "timestamp": "2024-01-01T12:05:00.000Z"
  }
}
```

#### Progress Update
```json
{
  "type": "progress_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "progress": {
      "total": 150,
      "sent": 46,
      "failed": 2,
      "delivered": 44
    },
    "timestamp": "2024-01-01T12:05:30.000Z"
  }
}
```

#### Status Update
```json
{
  "type": "status_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "status": "completed",
    "message": "Campaign completed successfully",
    "timestamp": "2024-01-01T12:30:00.000Z"
  }
}
```

#### Error Update
```json
{
  "type": "error_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "error": "WhatsApp connection lost",
    "timestamp": "2024-01-01T12:15:00.000Z"
  }
}
```

#### Completion Update
```json
{
  "type": "completion_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "report": {
      "totalMessages": 150,
      "successfulMessages": 148,
      "failedMessages": 2,
      "deliveryRate": 98.67
    },
    "timestamp": "2024-01-01T12:30:00.000Z"
  }
}
```

### JavaScript Client Example
```javascript
const ws = new WebSocket('ws://localhost:3000/ws/campaigns?campaignId=YOUR_CAMPAIGN_ID&userId=YOUR_USER_ID');

ws.onopen = function() {
    console.log('Connected to campaign updates');
};

ws.onmessage = function(event) {
    const message = JSON.parse(event.data);
    
    switch(message.type) {
        case 'campaign_update':
            updateCampaignUI(message.data);
            break;
        case 'progress_update':
            updateProgressBar(message.data.progress);
            break;
        case 'status_update':
            updateStatus(message.data.status, message.data.message);
            break;
        case 'error_update':
            showError(message.data.error);
            break;
        case 'completion_update':
            showCompletionReport(message.data.report);
            break;
    }
};

ws.onclose = function() {
    console.log('Disconnected from campaign updates');
};
```

---

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env
# Server Configuration
PORT=3000
BASE_URL=http://localhost:3000
FRONTEND_URL=http://localhost:3000

# Database
MONGO_URI=mongodb://127.0.0.1:27017/commerce_system

# Security
SESSION_SECRET=your-very-strong-session-secret-here
JWT_SECRET=your-very-strong-jwt-secret-here

# Zarinpal Payment Gateway
ZARINPAL_MERCHANT_ID=your-zarinpal-merchant-id

# SMS (Kavenegar)
KAVENEGAR_API_KEY=your-kavenegar-api-key
KAVENEGAR_SENDER=2000660110

# Email (Gmail)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Email (SMTP Alternative)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

---

## 📝 Error Responses

### Validation Error (400)
```json
{
  "message": "Validation error",
  "errors": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "number",
      "path": ["email"],
      "message": "Expected string, received number"
    }
  ]
}
```

### Authentication Error (401)
```json
{
  "message": "Not authenticated"
}
```

### Authorization Error (403)
```json
{
  "message": "Forbidden"
}
```

### Not Found Error (404)
```json
{
  "message": "User not found"
}
```

### Server Error (500)
```json
{
  "message": "Server error",
  "error": "Detailed error message"
}
```

---

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Setup Environment:**
   - Copy `.env.example` to `.env`
   - Configure your environment variables

3. **Start Server:**
   ```bash
   npm start
   ```

4. **Test APIs:**
   - Use Postman or curl
   - Follow the authentication flow: OTP → Register → Login → Use APIs

---

## 🔌 WebSocket Real-time Updates

### Connection
Connect to WebSocket for real-time campaign updates:

```
ws://localhost:3000/ws/campaigns?campaignId=:campaignId&userId=:userId
```

### Message Types

#### QR Code
```json
{
  "type": "qr_code",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "qrCode": "data:image/png;base64,iVBORw0KGgo...",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

#### Status Update
```json
{
  "type": "status_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "status": "ready",
    "message": "WhatsApp connected successfully",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

#### Progress Update
```json
{
  "type": "progress_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "progress": {
      "sent": 45,
      "total": 150,
      "current": "09123456789"
    },
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

#### Error Update
```json
{
  "type": "error_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "error": "Failed to send to 09123456789: Invalid number",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

#### Completion Update
```json
{
  "type": "completion_update",
  "campaignId": "507f1f77bcf86cd799439011",
  "data": {
    "report": {
      "status": "completed",
      "totalSent": 145,
      "totalFailed": 5,
      "reportUrl": "/api/campaigns/507f1f77bcf86cd799439011/report"
    },
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

### JavaScript Client Example
```javascript
const ws = new WebSocket('ws://localhost:3000/ws/campaigns?campaignId=123&userId=456');

ws.onopen = () => {
  console.log('WebSocket connected');
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  
  switch (message.type) {
    case 'qr_code':
      // Display QR code for WhatsApp connection
      document.getElementById('qr-code').src = message.data.qrCode;
      break;
      
    case 'status_update':
      // Update campaign status
      document.getElementById('status').textContent = message.data.status;
      break;
      
    case 'progress_update':
      // Update progress bar
      const progress = message.data.progress;
      document.getElementById('progress').textContent = `${progress.sent}/${progress.total}`;
      break;
      
    case 'error_update':
      // Show error message
      console.error('Campaign error:', message.data.error);
      break;
      
    case 'completion_update':
      // Show completion message
      console.log('Campaign completed:', message.data.report);
      break;
  }
};

ws.onclose = () => {
  console.log('WebSocket disconnected');
};
```

---

## 📋 API Flow Example

1. **Request OTP:**
   ```bash
   POST /api/auth/request-otp
   {"channel":"sms","target":"09120000000"}
   ```

2. **Verify OTP:**
   ```bash
   POST /api/auth/verify-otp
   {"channel":"sms","target":"09120000000","code":"123456"}
   ```

3. **Register User:**
   ```bash
   POST /api/user/register
   {"name":"علی","email":"ali@example.com","phone":"09120000000","password":"Passw0rd123!","verificationToken":"..."}
   ```

4. **Login:**
   ```bash
   POST /api/user/login
   {"email":"ali@example.com","password":"Passw0rd123!"}
   ```

5. **Use Protected APIs:**
   ```bash
   GET /api/orders/me
   Authorization: Bearer YOUR_JWT_TOKEN
   ```

---

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access Control**: Admin/User permissions
- **Rate Limiting**: 200 requests per 15 minutes
- **Input Validation**: Zod schema validation
- **Password Hashing**: bcrypt encryption
- **OTP Verification**: SMS/Email verification
- **Helmet Security**: Security headers
- **CORS**: Cross-origin resource sharing

---

## 🆕 Recent Updates

### New Features Added:
1. **Temporary File Storage System**
   - Upload files temporarily for preview
   - Confirm files before permanent storage
   - Automatic cleanup of old temporary files

2. **Campaign Preview System**
   - Step 6: Preview recipient cards before sending
   - Display phone, message, and attachment for each recipient
   - Final confirmation before campaign start

3. **Wizard Navigation**
   - Navigate between wizard steps
   - Go back to previous steps
   - Reset campaign data from specific step

4. **Scheduled Campaigns**
   - Set specific date and time for sending
   - Timezone support
   - Cancel scheduled campaigns

5. **Enhanced File Support**
   - All file types allowed (except dangerous formats)
   - Increased file size limit to 20MB
   - Better error handling for Excel files

6. **Improved Error Handling**
   - Better Excel file validation
   - Graceful handling of missing columns
   - Detailed error messages for debugging

### API Endpoints Added:
- `POST /api/campaigns/:campaignId/attachment/temp` - Upload temporary attachment
- `POST /api/campaigns/:campaignId/attachment/confirm` - Confirm attachment
- `GET /api/campaigns/:campaignId/preview` - Get campaign preview
- `POST /api/campaigns/:campaignId/confirm-and-start` - Confirm and start campaign
- `GET /api/campaigns/:campaignId/steps` - Get step status
- `POST /api/campaigns/:campaignId/navigate` - Navigate to step
- `POST /api/campaigns/:campaignId/go-back` - Go back step
- `POST /api/campaigns/:campaignId/reset` - Reset to step
- `GET /api/campaigns/scheduled` - Get scheduled campaigns
- `POST /api/campaigns/:campaignId/cancel-schedule` - Cancel schedule
- `GET /api/temp-files/:filename` - Serve temporary files
- `POST /api/campaigns/cleanup-temp` - Clean up temporary files

## 📞 Support

For issues or questions, please check the error responses and ensure all environment variables are properly configured.
