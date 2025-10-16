# WhatsApp Campaign Management API

یک سیستم جامع برای مدیریت کمپین‌های واتساپ با قابلیت‌های پیشرفته و رابط کاربری مدرن.

<<<<<<< HEAD
## 🚀 ویژگی‌های کلیدی

### 📱 مدیریت کمپین‌های واتساپ
- **ایجاد کمپین**: ایجاد کمپین‌های جدید با پیام‌های سفارشی
- **ارسال انبوه**: ارسال پیام به هزاران مخاطب به صورت خودکار
- **پیوست‌ها**: پشتیبانی از ارسال فایل‌های مختلف (تصویر، ویدیو، سند)
- **زمان‌بندی**: قابلیت زمان‌بندی ارسال پیام‌ها
- **QR Code**: اتصال امن از طریق QR Code

### 🔐 سیستم احراز هویت
- **OTP**: احراز هویت با کد یکبار مصرف
- **JWT**: سیستم توکن‌های امن
- **Session Management**: مدیریت جلسات کاربری
- **Role-based Access**: دسترسی بر اساس نقش کاربر

### 💳 سیستم پرداخت
- **پکیج‌های اشتراک**: پکیج‌های مختلف با محدودیت پیام
- **درگاه پرداخت**: پشتیبانی از درگاه‌های مختلف
- **مدیریت تراکنش**: پیگیری کامل تراکنش‌ها

### 📊 گزارش‌گیری و آمار
- **آمار کمپین**: آمار کامل ارسال و تحویل
- **گزارش Excel**: خروجی گزارش‌ها به صورت Excel
- **Real-time Updates**: به‌روزرسانی لحظه‌ای وضعیت

### 🛡️ امنیت و بهینه‌سازی
- **Rate Limiting**: محدودیت نرخ درخواست
- **Input Validation**: اعتبارسنجی ورودی‌ها
- **Error Handling**: مدیریت خطاهای جامع
- **Logging**: سیستم لاگ‌گیری پیشرفته

## 🏗️ معماری سیستم
=======
## 📁 ساختار پروژه
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

```
src/
├── app.js                 # تنظیمات اصلی Express
├── config/               # تنظیمات پایگاه داده و احراز هویت
├── controllers/          # کنترلرهای API
├── middlewares/         # میدل‌ویرهای امنیتی و اعتبارسنجی
├── models/              # مدل‌های Prisma
├── routes/              # مسیرهای API
├── services/            # سرویس‌های WhatsApp و WebSocket
├── utils/               # ابزارهای کمکی
└── validators/          # اعتبارسنجی ورودی‌ها
```

## 🛠️ تکنولوژی‌های استفاده شده

- **Backend**: Node.js, Express.js
- **Database**: MySQL با Prisma ORM
- **Authentication**: JWT, Passport.js
- **WhatsApp**: whatsapp-web.js
- **Real-time**: WebSocket
- **File Upload**: Multer
- **Validation**: Zod
- **Security**: Helmet, bcrypt

## 📋 پیش‌نیازها

<<<<<<< HEAD
- Node.js (v16 یا بالاتر)
- MySQL (v8 یا بالاتر)
=======
### پیش‌نیازها
- Node.js (v14 یا بالاتر)
- MongoDB
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
- npm یا yarn

## ⚙️ نصب و راه‌اندازی

### 1. کلون کردن پروژه
```bash
git clone <repository-url>
cd whatsapp-messager
```

### 2. نصب وابستگی‌ها
```bash
npm install
```

### 3. تنظیم متغیرهای محیطی
فایل `.env` را ایجاد کنید:

<<<<<<< HEAD
```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/whatsapp_campaign"

# JWT
JWT_SECRET="your-jwt-secret"
JWT_REFRESH_SECRET="your-refresh-secret"

# Session
SESSION_SECRET="your-session-secret"

# Server
PORT=3000
NODE_ENV=development

# Frontend
FRONTEND_URL="http://localhost:3000"

# SMS Service (Kavenegar)
KAVENEGAR_API_KEY="your-kavenegar-api-key"

# Email
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=587
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-email-password"
```

### 4. راه‌اندازی پایگاه داده
```bash
# تولید Prisma Client
npm run db:generate

# اجرای مایگریشن‌ها
npm run db:migrate

# (اختیاری) مشاهده پایگاه داده
npm run db:studio
```

### 5. اجرای پروژه
```bash
# حالت توسعه
npm run dev

# حالت تولید
=======
# راه‌اندازی سرور
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
npm start
```

## 🔧 اسکریپت‌های مفید

<<<<<<< HEAD
```bash
# بررسی متغیرهای محیطی
npm run check-env

# ایجاد کاربر ادمین
npm run make-admin

# اجرای تست‌ها
npm test
npm run test:campaign
npm run test:whatsapp
npm run test:all
```

## 📚 API Documentation

### احراز هویت
- `POST /api/auth/request-otp` - درخواست کد OTP
- `POST /api/auth/verify-otp` - تایید کد OTP

### مدیریت کاربران
- `GET /api/user/profile` - دریافت پروفایل کاربر
- `PUT /api/user/profile` - به‌روزرسانی پروفایل
- `POST /api/refresh/token` - تازه‌سازی توکن

### مدیریت کمپین‌ها
- `POST /api/campaigns` - ایجاد کمپین جدید
- `GET /api/campaigns` - لیست کمپین‌های کاربر
- `GET /api/campaigns/:id` - جزئیات کمپین
- `POST /api/campaigns/:id/upload-recipients` - آپلود لیست مخاطبین
- `POST /api/campaigns/:id/upload-attachment` - آپلود پیوست
- `POST /api/campaigns/:id/generate-qr` - تولید QR Code
- `POST /api/campaigns/:id/start` - شروع کمپین
- `GET /api/campaigns/:id/status` - وضعیت کمپین

### مدیریت پکیج‌ها
- `GET /api/packages` - لیست پکیج‌ها
- `GET /api/packages/:id` - جزئیات پکیج

### مدیریت سفارشات
- `POST /api/orders` - ایجاد سفارش
- `GET /api/orders/me` - سفارشات کاربر

### مدیریت پرداخت
- `POST /api/payments/verify` - تایید پرداخت
- `GET /api/payments/me` - تاریخچه پرداخت‌ها

### پنل ادمین
- `GET /api/admin/users` - لیست کاربران
- `GET /api/admin/transactions` - لیست تراکنش‌ها
- `GET /api/admin/dashboard` - آمار داشبورد

## 🔌 WebSocket Events

### اتصال
```javascript
const socket = io('ws://localhost:3000/ws/campaigns');
```

### رویدادهای کمپین
- `campaign_status` - به‌روزرسانی وضعیت کمپین
- `message_progress` - پیشرفت ارسال پیام
- `connection_status` - وضعیت اتصال WhatsApp

## 📱 استفاده از WhatsApp

### 1. اتصال به WhatsApp
```javascript
// تولید QR Code
POST /api/campaigns/:id/generate-qr

// بررسی وضعیت اتصال
GET /api/campaigns/:id/connection-status
=======
### بررسی محیط
```bash
node scripts/check-env.js
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
```

### 2. شروع کمپین
```javascript
// شروع ارسال پیام
POST /api/campaigns/:id/start
```

<<<<<<< HEAD
### 3. نظارت بر پیشرفت
```javascript
// دریافت وضعیت کمپین
GET /api/campaigns/:id/status

// دریافت آمار
GET /api/campaigns/:id/stats
```
=======
### اجرای تست‌ها
```bash
# اجرای همه تست‌ها
npm run test

# اجرای تست‌های خاص
node tests/test-apis.js
```

## 📚 مستندات

- [مستندات API](docs/API_DOCUMENTATION.md)
- [راهنمای WhatsApp Integration](docs/WHATSAPP_INTEGRATION.md)
- [نتایج تست‌ها](docs/FINAL_TEST_RESULTS.md)
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

## 🧪 تست‌ها

### اجرای تست‌های کامل
```bash
npm run test:all
```

### تست‌های خاص
```bash
# تست API های کمپین
npm run test:campaign

# تست یکپارچگی WhatsApp
npm run test:whatsapp
```

## 📊 مانیتورینگ و لاگ‌ها

### لاگ‌های سیستم
- تمام درخواست‌ها در فایل لاگ ثبت می‌شوند
- خطاها با جزئیات کامل لاگ می‌شوند
- آمار عملکرد سیستم قابل رصد است

### مانیتورینگ کمپین‌ها
- وضعیت لحظه‌ای کمپین‌ها
- آمار ارسال و تحویل پیام‌ها
- گزارش‌های تفصیلی عملکرد

## 🔒 امنیت

### اقدامات امنیتی
- **Rate Limiting**: محدودیت 200 درخواست در 15 دقیقه
- **Helmet**: محافظت از هدرهای HTTP
- **CORS**: کنترل دسترسی cross-origin
- **Input Validation**: اعتبارسنجی کامل ورودی‌ها
- **Password Hashing**: رمزنگاری امن رمز عبور

### بهترین شیوه‌ها
- استفاده از متغیرهای محیطی برای اطلاعات حساس
- اعتبارسنجی تمام ورودی‌ها
- لاگ‌گیری مناسب برای امنیت
- به‌روزرسانی منظم وابستگی‌ها

## 🚀 استقرار (Deployment)

### متغیرهای محیطی تولید
```env
NODE_ENV=production
DATABASE_URL="mysql://user:pass@host:port/db"
JWT_SECRET="strong-secret"
SESSION_SECRET="strong-session-secret"
```

### دستورات استقرار
```bash
# نصب وابستگی‌ها
npm install --production

# اجرای مایگریشن‌ها
npm run db:deploy

# شروع سرویس
npm start
```

## 🤝 مشارکت

1. Fork کنید
2. شاخه جدید ایجاد کنید (`git checkout -b feature/amazing-feature`)
3. تغییرات را commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request ایجاد کنید

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 📞 پشتیبانی

برای سوالات و پشتیبانی:
- ایمیل: support@example.com
- تلگرام: @support_bot

## 🔄 به‌روزرسانی‌ها

### نسخه 1.0.0
- راه‌اندازی اولیه سیستم
- پشتیبانی از کمپین‌های واتساپ
- سیستم احراز هویت OTP
- پنل ادمین کامل
- گزارش‌گیری پیشرفته

---

**نکته**: این سیستم برای استفاده تجاری طراحی شده و تمام قابلیت‌های امنیتی و بهینه‌سازی لازم را دارا می‌باشد.
