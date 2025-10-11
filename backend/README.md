# WhatsApp Campaign API

یک API کامل برای مدیریت کمپین‌های WhatsApp با قابلیت‌های پیشرفته.

## 📁 ساختار پروژه

```
whatsapp-messager/
├── src/                    # کد اصلی برنامه
│   ├── controllers/        # کنترلرهای API
│   ├── models/            # مدل‌های دیتابیس
│   ├── routes/            # مسیرهای API
│   ├── services/          # سرویس‌های کسب‌وکار
│   ├── middlewares/       # میدل‌ویرها
│   ├── config/            # تنظیمات
│   ├── utils/             # ابزارهای کمکی
│   ├── validators/        # اعتبارسنجی‌ها
│   └── uploads/           # فایل‌های آپلود شده
├── tests/                 # فایل‌های تست
├── docs/                  # مستندات
├── scripts/               # اسکریپت‌های کمکی
├── postman/               # فایل‌های Postman
└── server.js              # نقطه ورود برنامه
```

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js (v14 یا بالاتر)
- MongoDB
- npm یا yarn

### نصب
```bash
# کلون کردن پروژه
git clone <repository-url>
cd whatsapp-messager

# نصب وابستگی‌ها
npm install

# تنظیم متغیرهای محیطی
cp .env.example .env
# فایل .env را ویرایش کنید

# راه‌اندازی سرور
npm start
```

## 🔧 اسکریپت‌های کمکی

### بررسی محیط
```bash
node scripts/check-env.js
```

### ایجاد ادمین
```bash
node scripts/make-admin.js
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

همه فایل‌های تست در پوشه `tests/` قرار دارند:

- `test-apis.js` - تست‌های اصلی API
- `test-campaign-apis.js` - تست‌های کمپین
- `test-whatsapp-integration.js` - تست‌های WhatsApp
- `test-bug-fixes.js` - تست‌های رفع باگ

## 📦 Postman

فایل‌های Postman در پوشه `postman/` قرار دارند:
- `WhatsApp-Campaign-API.postman_collection.json`
- `WhatsApp-Campaign-Environment.postman_environment.json`

## 🔒 امنیت

- احراز هویت JWT
- اعتبارسنجی ورودی‌ها
- محدودیت نرخ درخواست
- رمزگذاری پسوردها

## 📊 ویژگی‌ها

- ✅ مدیریت کاربران و احراز هویت
- ✅ ایجاد و مدیریت کمپین‌ها
- ✅ آپلود فایل Excel برای مخاطبین
- ✅ ارسال پیام‌های WhatsApp
- ✅ گزارش‌گیری و آمار
- ✅ مدیریت بسته‌ها و پرداخت
- ✅ WebSocket برای به‌روزرسانی‌های real-time

## 🐛 گزارش باگ

اگر باگی پیدا کردید، لطفاً در بخش Issues گزارش دهید.

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.
