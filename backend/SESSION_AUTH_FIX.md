# 🔧 Session Authentication Fix - گزارش تصحیح مشکل احراز هویت

## 🎯 **مشکل:**
فرانت کار گزارش داد که پس از دریافت فایل‌های جدید بک‌اند، توکن منقضی شده و مجبور به لاگین مجدد شده است. همچنین با حذف هدر Authorization، پیغام خطای زیر دریافت می‌کند:

```json
{
    "message": "Authorization token missing",
    "hint": "Provide token in Authorization header or ensure user is logged in via session"
}
```

## ✅ **راه‌حل پیاده‌سازی شده:**

### **1. 🔄 تغییر Middleware در تمام Route ها:**
تمام route های محافظت شده از `authenticateJwt` به `authenticateSession` تغییر یافتند:

#### **فایل‌های تغییر یافته:**
- ✅ `src/routes/campaignRoutes.js`
- ✅ `src/routes/orderRoutes.js` 
- ✅ `src/routes/packageRoutes.js`
- ✅ `src/routes/paymentRoutes.js`
- ✅ `src/routes/adminRoutes.js`
- ✅ `src/routes/refreshRoutes.js`

### **2. 🛠️ بهبود Middleware `authenticateSession`:**

#### **قابلیت‌های جدید:**
- ✅ **خواندن توکن از session:** `req.session.token` و `req.session.jwt`
- ✅ **Fallback به Authorization header:** در صورت عدم وجود session
- ✅ **مدیریت خطای Database:** در صورت عدم دسترسی به MongoDB
- ✅ **ذخیره اطلاعات کاربر در session:** برای درخواست‌های بعدی

#### **نحوه کارکرد:**
```javascript
// 1. ابتدا session را بررسی می‌کند
if (req.session && req.session.userId) {
    // کاربر از session شناسایی می‌شود
}

// 2. سپس توکن را از session می‌خواند
const token = extractToken(req); // از session یا header

// 3. در صورت خطای Database، از session استفاده می‌کند
catch (dbError) {
    // استفاده از اطلاعات session
}
```

### **3. 📋 Route های پشتیبانی شده:**

#### **Campaign Routes:**
- ✅ `GET /api/campaigns` - لیست کمپین‌ها
- ✅ `POST /api/campaigns` - ایجاد کمپین
- ✅ `PUT /api/campaigns/:id/message` - تنظیم پیام
- ✅ `POST /api/campaigns/:id/recipients` - آپلود Excel
- ✅ `POST /api/campaigns/:id/attachment` - آپلود ضمیمه
- ✅ `PUT /api/campaigns/:id/interval` - تنظیم فاصله
- ✅ `POST /api/campaigns/:id/whatsapp/connect` - اتصال WhatsApp
- ✅ `GET /api/campaigns/:id/preview` - پیش‌نمایش
- ✅ `POST /api/campaigns/:id/confirm-and-start` - تایید و شروع

#### **Order Routes:**
- ✅ `POST /api/orders` - ایجاد سفارش
- ✅ `GET /api/orders/me` - سفارشات من

#### **Package Routes:**
- ✅ `POST /api/packages` - ایجاد پکیج (Admin)
- ✅ `PUT /api/packages/:id` - ویرایش پکیج (Admin)
- ✅ `DELETE /api/packages/:id` - حذف پکیج (Admin)

#### **Payment Routes:**
- ✅ `POST /api/payments/start` - شروع پرداخت
- ✅ `POST /api/payments/confirm` - تایید پرداخت

#### **Admin Routes:**
- ✅ `GET /api/admin/users` - لیست کاربران
- ✅ `PATCH /api/admin/users/:id/role` - تغییر نقش کاربر
- ✅ `PATCH /api/admin/users/:id/status` - تغییر وضعیت کاربر

#### **Refresh Routes:**
- ✅ `POST /api/refresh/logout-all` - خروج از همه دستگاه‌ها

## 🎯 **نحوه استفاده برای فرانت کار:**

### **1. 🔐 لاگین (بدون تغییر):**
```javascript
// لاگین عادی - توکن در session ذخیره می‌شود
const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // مهم: برای session
    body: JSON.stringify({
        email: 'user@example.com',
        password: 'password123'
    })
});
```

### **2. 📡 درخواست‌های محافظت شده (بدون هدر Authorization):**
```javascript
// نیازی به هدر Authorization نیست!
const response = await fetch('/api/campaigns', {
    method: 'GET',
    credentials: 'include' // مهم: برای session
});

// یا برای POST requests
const response = await fetch('/api/campaigns', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // مهم: برای session
    body: JSON.stringify({
        message: 'سلام'
    })
});
```

### **3. 🔄 Fallback به Authorization Header:**
```javascript
// اگر session کار نکرد، می‌توانید از Authorization header استفاده کنید
const response = await fetch('/api/campaigns', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer your-jwt-token'
    },
    credentials: 'include'
});
```

## 🎯 **مزایای جدید:**

### **1. 🚀 راحتی استفاده:**
- ✅ **بدون هدر Authorization:** نیازی به مدیریت دستی توکن نیست
- ✅ **Session خودکار:** توکن در session ذخیره می‌شود
- ✅ **Fallback هوشمند:** در صورت عدم وجود session، از header استفاده می‌کند

### **2. 🔒 امنیت:**
- ✅ **Session-based:** توکن در کوکی httpOnly ذخیره می‌شود
- ✅ **JWT validation:** توکن همچنان اعتبارسنجی می‌شود
- ✅ **Database fallback:** در صورت عدم دسترسی به DB، از session استفاده می‌کند

### **3. 🛠️ سازگاری:**
- ✅ **Backward compatible:** API های قدیمی همچنان کار می‌کنند
- ✅ **Header support:** همچنان از Authorization header پشتیبانی می‌کند
- ✅ **Session support:** از session cookie پشتیبانی می‌کند

## 🧪 **تست شده:**

### **✅ Session Authentication:**
- ✅ لاگین و دریافت session cookie
- ✅ دسترسی به route های محافظت شده با session
- ✅ Fallback به Authorization header
- ✅ مدیریت خطای Database

### **✅ Route Coverage:**
- ✅ تمام Campaign routes
- ✅ تمام Order routes  
- ✅ تمام Package routes
- ✅ تمام Payment routes
- ✅ تمام Admin routes
- ✅ تمام Refresh routes

## 📝 **نکات مهم برای فرانت کار:**

### **1. 🔑 همیشه `credentials: 'include'` استفاده کنید:**
```javascript
// ✅ درست
fetch('/api/campaigns', {
    credentials: 'include'
});

// ❌ اشتباه
fetch('/api/campaigns');
```

### **2. 🍪 Session Cookie:**
- Session cookie به صورت خودکار در مرورگر ذخیره می‌شود
- نیازی به مدیریت دستی کوکی نیست
- کوکی `httpOnly` است و از JavaScript قابل دسترسی نیست

### **3. 🔄 Fallback Strategy:**
- ابتدا session بررسی می‌شود
- در صورت عدم وجود session، از Authorization header استفاده می‌شود
- در صورت خطای Database، از session data استفاده می‌شود

## 🎯 **خلاصه:**

**مشکل حل شد!** حالا فرانت کار می‌تواند:

1. **بدون هدر Authorization** درخواست بفرستد
2. **Session cookie** به صورت خودکار مدیریت می‌شود  
3. **Fallback** به Authorization header در صورت نیاز
4. **تمام API ها** از session authentication پشتیبانی می‌کنند

**دیگر نیازی به مدیریت دستی توکن نیست!** ✨

