# 📚 مستندات کامل API

مستندات جامع تمام API های سیستم مدیریت کمپین‌های واتساپ

## 🔐 احراز هویت (Authentication)

### Base URL
```
http://localhost:3000/api
```

<<<<<<< HEAD
### Headers مورد نیاز
```http
Content-Type: application/json
Authorization: Bearer <jwt-token>
```

## 📱 API های احراز هویت

### 1. درخواست OTP
```http
POST /api/auth/request-otp
=======
## Authentication Methods

### 🔐 Session-Based Authentication (Primary - Recommended)
The system now uses **session-based authentication** as the primary method:

**How it works:**
1. User logs in via `POST /api/user/login`
2. JWT token is automatically stored in session cookie
3. Frontend can make requests without manually adding Authorization header
4. Middleware automatically extracts token from session

**Benefits:**
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
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
```

**Request Body:**
```json
{
  "channel": "sms|email",
  "target": "09123456789|user@example.com"
}
```

**Response:**
```json
{
  "message": "OTP sent successfully",
  "expiresIn": 300
}
```

### 2. تایید OTP
```http
POST /api/auth/verify-otp
```

**Request Body:**
```json
{
  "channel": "sms|email",
  "target": "09123456789|user@example.com",
  "code": "123456"
}
```

**Response:**
```json
{
  "message": "OTP verified successfully",
  "verified": true
}
```

## 👤 API های کاربران

### 1. ثبت‌نام با OTP
```http
POST /api/user/register
```

<<<<<<< HEAD
=======
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

>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
**Request Body:**
```json
{
  "name": "علی احمدی",
  "username": "ali_ahmadi",
  "email": "ali@example.com",
  "phone": "09123456789",
  "password": "password123",
  "verificationToken": "otp-verification-token"
}
```

<<<<<<< HEAD
### 2. ثبت‌نام ساده
```http
POST /api/user/register-simple
```

**Request Body:**
```json
{
  "name": "علی احمدی",
  "username": "ali_ahmadi",
  "email": "ali@example.com",
  "phone": "09123456789",
  "password": "password123"
}
```

### 3. ورود
```http
POST /api/user/login
```
=======
**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "علی احمدی",
    "username": "ali_ahmadi",
    "email": "ali@example.com"
  }
}
```

### Login User
**POST** `/api/user/login`

Authenticate user and get JWT token.
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

**Request Body:**
```json
{
  "email": "ali@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User login successfully",
  "token": "jwt-token",
  "user": {
    "id": 1,
    "name": "علی احمدی",
    "username": "ali_ahmadi",
    "email": "ali@example.com",
    "role": "USER"
  }
}
```

### 4. دریافت پروفایل
```http
GET /api/user/profile
```

**Headers:**
```http
Authorization: Bearer <jwt-token>
```

### 5. ویرایش پروفایل
```http
POST /api/user/profile
```

**Request Body:**
```json
{
  "username": "new_username",
  "email": "new@example.com",
  "age": 25,
  "address": "تهران، ایران"
}
```

### 6. خروج
```http
POST /api/user/logout
```

## 🎯 API های کمپین‌ها

### 1. ایجاد کمپین جدید
```http
POST /api/campaigns
```

<<<<<<< HEAD
**Request Body:**
```json
{
  "message": "متن پیام کمپین",
  "title": "عنوان کمپین"
=======
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
      "username": "ali_ahmadi",
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

Create a new WhatsApp campaign with custom title.

**Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`

**Request Body:**
```json
{
  "title": "کمپین فروش ویژه",
  "message": "سلام! پیشنهاد ویژه برای شما..."
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
}
```

**Response:**
```json
{
  "message": "Campaign created successfully",
  "campaign": {
    "id": 1,
    "title": "عنوان کمپین",
    "status": "DRAFT"
  }
}
```

### 2. لیست کمپین‌های کاربر
```http
GET /api/campaigns
```

**Query Parameters:**
- `status`: وضعیت کمپین (DRAFT, READY, RUNNING, COMPLETED, PAUSED, FAILED)
- `title`: جستجو در عنوان
- `startDate`: تاریخ شروع
- `endDate`: تاریخ پایان
- `page`: شماره صفحه (پیش‌فرض: 1)
- `limit`: تعداد در هر صفحه (پیش‌فرض: 10)

### 3. جزئیات کمپین
```http
GET /api/campaigns/:campaignId
```

**Query Parameters:**
- `include`: شامل کردن اطلاعات اضافی (progress, recipients, attachments, report)

### 4. آپلود لیست مخاطبین
```http
POST /api/campaigns/:campaignId/recipients
```

**Content-Type:** `multipart/form-data`

**Form Data:**
- `recipientsFile`: فایل Excel (.xlsx)

**Response:**
```json
{
  "message": "Recipients uploaded successfully",
  "recipientsCount": 100,
  "campaign": {
    "id": 1,
    "status": "READY",
    "totalRecipients": 100
  }
}
```

### 5. آپلود پیوست
```http
POST /api/campaigns/:campaignId/attachment
```

**Content-Type:** `multipart/form-data`

**Form Data:**
- `attachment`: فایل پیوست

### 6. حذف پیوست
```http
DELETE /api/campaigns/:campaignId/attachment
```

### 7. تنظیم فاصله ارسال
```http
PUT /api/campaigns/:campaignId/interval
```

**Request Body:**
```json
{
  "interval": "5s|10s|20s",
  "sendType": "immediate|scheduled",
  "scheduledAt": "2024-01-01T10:00:00Z",
  "timezone": "Asia/Tehran"
}
```

### 8. تولید QR Code
```http
POST /api/campaigns/:campaignId/qr-code
```

**Response:**
```json
{
  "message": "QR code generation initiated",
  "sessionId": "uuid-session-id",
  "instructions": "WhatsApp session is being prepared. QR code will be sent via WebSocket."
}
```

### 9. بررسی وضعیت اتصال
```http
GET /api/campaigns/:campaignId/connection
```

### 10. شروع کمپین
```http
POST /api/campaigns/:campaignId/start
```

<<<<<<< HEAD
### 11. توقف کمپین
```http
POST /api/campaigns/:campaignId/pause
```

### 12. ادامه کمپین
```http
POST /api/campaigns/:campaignId/resume
```
=======
### Get Campaign Progress
**GET** `/api/campaigns/:campaignId/progress`

Get real-time campaign progress.
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

### 13. حذف کمپین
```http
DELETE /api/campaigns/:campaignId
```

### 14. پیش‌نمایش کمپین
```http
GET /api/campaigns/:campaignId/preview
```

### 15. وضعیت مراحل کمپین
```http
GET /api/campaigns/:campaignId/steps
```

### 16. گزارش کمپین
```http
GET /api/campaigns/:campaignId/report/download
```

**Response:** فایل Excel

## 📦 API های پکیج‌ها

### 1. لیست پکیج‌ها
```http
GET /api/packages
```

<<<<<<< HEAD
**Query Parameters:**
- `category`: دسته‌بندی پکیج
- `status`: وضعیت پکیج (ACTIVE, INACTIVE)

### 2. جزئیات پکیج
```http
GET /api/packages/:id
```

### 3. ایجاد پکیج (ادمین)
```http
POST /api/packages
```

**Request Body:**
```json
{
  "title": "پکیج پایه",
  "description": "توضیحات پکیج",
  "price": 100000,
  "duration": 30,
  "category": "basic",
  "status": "active"
=======
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
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
}
```

### 4. ویرایش پکیج (ادمین)
```http
PUT /api/packages/:id
```

### 5. حذف پکیج (ادمین)
```http
DELETE /api/packages/:id
```

## 💳 API های پرداخت

### 1. ایجاد سفارش
```http
POST /api/orders
```

**Request Body:**
```json
{
  "packageId": 1
}
```

### 2. لیست سفارشات کاربر
```http
GET /api/orders/me
```

### 3. شروع پرداخت
```http
POST /api/payments/start
```

**Request Body:**
```json
{
  "orderId": 1
}
```

### 4. تایید پرداخت
```http
POST /api/payments/verify
```

**Request Body:**
```json
{
  "orderId": 1,
  "success": true
}
```

### 5. تاریخچه پرداخت‌ها
```http
GET /api/payments/me
```

## 👨‍💼 API های ادمین

### 1. لیست کاربران
```http
GET /api/admin/users
```

**Query Parameters:**
- `q`: جستجو
- `role`: نقش کاربر
- `status`: وضعیت کاربر
- `page`: شماره صفحه
- `limit`: تعداد در هر صفحه

### 2. تغییر نقش کاربر
```http
PATCH /api/admin/users/:userId/role
```

**Request Body:**
```json
{
  "role": "admin|superAdmin"
}
```

### 3. تغییر وضعیت کاربر
```http
PATCH /api/admin/users/:userId/status
```

**Request Body:**
```json
{
  "status": "active|inactive|banned"
}
```

### 4. لیست تراکنش‌ها
```http
GET /api/admin/transactions
```

### 5. آمار داشبورد
```http
GET /api/admin/dashboard
```

**Response:**
```json
{
<<<<<<< HEAD
  "usersCount": 150,
  "packagesCount": 5,
  "paidOrdersCount": 75,
  "totalSales": 15000000
=======
  "campaigns": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "کمپین فروش ویژه",
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
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
}
```

### 6. مدیریت قالب Excel
```http
POST /api/admin/excel-template
GET /api/admin/excel-template/download
GET /api/admin/excel-template/info
```

## 🔄 API های تازه‌سازی توکن

### 1. تازه‌سازی توکن
```http
POST /api/refresh/token
```

**Request Body:**
```json
{
<<<<<<< HEAD
  "refreshToken": "refresh-token"
}
```

### 2. خروج از همه دستگاه‌ها
```http
POST /api/refresh/logout-all
=======
  "campaigns": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "کمپین فروش ویژه",
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
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
```

## 📊 کدهای وضعیت HTTP

<<<<<<< HEAD
| کد | معنی | توضیح |
|---|---|---|
| 200 | OK | درخواست موفق |
| 201 | Created | ایجاد موفق |
| 400 | Bad Request | درخواست نامعتبر |
| 401 | Unauthorized | عدم احراز هویت |
| 403 | Forbidden | عدم دسترسی |
| 404 | Not Found | یافت نشد |
| 500 | Internal Server Error | خطای سرور |
=======
Download campaign report as Excel file.
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

## 🔍 نمونه درخواست‌ها

<<<<<<< HEAD
### cURL Examples

#### ورود کاربر
```bash
curl -X POST http://localhost:3000/api/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ali@example.com",
    "password": "password123"
  }'
```

#### ایجاد کمپین
```bash
curl -X POST http://localhost:3000/api/campaigns \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt-token>" \
  -d '{
    "message": "سلام! این یک پیام تست است.",
    "title": "کمپین تست"
  }'
```

#### آپلود مخاطبین
```bash
curl -X POST http://localhost:3000/api/campaigns/1/recipients \
  -H "Authorization: Bearer <jwt-token>" \
  -F "recipientsFile=@recipients.xlsx"
```

## 🔌 WebSocket Events

### اتصال
```javascript
const socket = new WebSocket('ws://localhost:3000/ws/campaigns?campaignId=1&userId=1');
```

### رویدادها
- `campaign_update`: به‌روزرسانی وضعیت کمپین
- `progress_update`: به‌روزرسانی پیشرفت
- `status_update`: به‌روزرسانی وضعیت
- `error_update`: به‌روزرسانی خطا
- `qr_code`: دریافت QR Code
- `completion_update`: تکمیل کمپین
=======
**Response:**
- **Content-Type**: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- **Content-Disposition**: `attachment; filename="campaign-report-{campaignId}.xlsx"`
- **Body**: Excel file with two sheets:
  - **Campaign Summary**: Overview of campaign statistics
  - **Recipients Details**: Detailed list of all recipients with status
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

## 📝 نکات مهم

1. **احراز هویت**: تمام API های محافظت شده نیاز به JWT token دارند
2. **Rate Limiting**: حداکثر 200 درخواست در 15 دقیقه
3. **File Upload**: حداکثر 20MB برای فایل‌ها
4. **WebSocket**: برای دریافت به‌روزرسانی‌های لحظه‌ای
5. **Error Handling**: تمام خطاها در قالب JSON برگردانده می‌شوند

---

**نکته**: این مستندات به‌روزرسانی می‌شوند. لطفاً آخرین نسخه را بررسی کنید.
