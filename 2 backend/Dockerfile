
# استخدم صورة Node.js خفيفة
FROM node:20-alpine

# مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ ملفات package.json و package-lock.json لتثبيت الحزم
COPY package*.json ./

# تثبيت الحزم
RUN npm install

# نسخ باقي ملفات المشروع (server.js وملفات SSL)
COPY . .

# فتح بورت HTTPS
EXPOSE 3443

# أمر تشغيل السيرفر
CMD ["node", "server.js"]
