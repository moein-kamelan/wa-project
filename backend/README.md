# WhatsApp Campaign Management API

یک سیستم جامع برای مدیریت کمپین‌های واتساپ با قابلیت‌های پیشرفته و رابط کاربری مدرن.

## 📁 ساختار پروژه

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

### پیش‌نیازها
- Node.js (v14 یا بالاتر)
- MongoDB
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

# راه‌اندازی سرور
npm start
```

## 🔧 اسکریپت‌های مفید

### بررسی محیط
```bash
node scripts/check-env.js
```

### 2. شروع کمپین
```javascript
// شروع ارسال پیام
POST /api/campaigns/:id/start
```

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
