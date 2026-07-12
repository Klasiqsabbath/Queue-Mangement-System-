# 📋 Copy-Paste Commands Reference

## **IMPORTANT: Do These IN ORDER**

---

## **Phase 1: Create GitHub Repositories**

1. Go to https://github.com/new
2. Create **first repo**:
   - Name: `prescripto-website`
   - Description: `Prescripto Appointment Booking - Website`
   - Visibility: **Public**
   - Click **Create repository**

3. Go to https://github.com/new again
4. Create **second repo**:
   - Name: `prescripto-admin`
   - Description: `Prescripto Admin Dashboard`
   - Visibility: **Public**
   - Click **Create repository**

---

## **Phase 2: Get GitHub Token**

1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. **Token name**: `Netlify Deployment`
4. **Expiration**: `90 days`
5. **Scopes**: Check ONLY ☑️ `repo`
6. Click **Generate token**
7. **COPY AND SAVE** the token (you won't see it again!)

---

## **Phase 3: Push Code to GitHub**

**Copy and paste these commands exactly:**

### **Push Website:**
```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside"
git push -u origin main
```

When prompted:
- Username: `klasiqsabbath`
- Password: `[paste your GitHub token here]`

### **Push Admin Dashboard:**
```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\admin"
git push -u origin main
```

When prompted:
- Username: `klasiqsabbath`
- Password: `[paste your GitHub token here]`

---

## **Phase 4: Deploy on Netlify**

### **For Website:**

1. Go to https://netlify.com
2. Click **"Sign up"** → **"GitHub"**
3. Authorize Netlify
4. Click **"Add new site"** → **"Import an existing project"**
5. **Select**: `klasiqsabbath/prescripto-website`
6. Settings (should auto-fill):
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click **Deploy site**
8. ⏳ Wait 2-3 minutes
9. Your URL will appear: `https://prescripto-website-{random}.netlify.app`

### **For Admin Dashboard:**

Repeat the same process for `prescripto-admin` repository

---

## **COMMANDS FOR BACKEND (Optional)**

### **Push Backend to GitHub:**

```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\backend"
git init
git config user.email "stephenquanssh@gmail.com"
git config user.name "klasiqsabbath"
git add .
git commit -m "Backend for Prescripto"
git remote add origin https://github.com/klasiqsabbath/prescripto-backend.git
git branch -M main
git push -u origin main
```

When prompted:
- Username: `klasiqsabbath`
- Password: `[paste your GitHub token]`

### **Then Deploy on Render.com:**

1. Go to https://render.com
2. Click **"Sign up"** → **"GitHub"**
3. Authorize Render
4. Click **"New +"** → **"Web Service"**
5. **Select**: `klasiqsabbath/prescripto-backend`
6. Settings:
   - **Name**: `prescripto-backend`
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Instance Type**: `Free`

7. **Environment Variables** (click to expand):
   ```
   MONGODB_URI=mongodb+srv://admin:PASSWORD@cluster.mongodb.net/prescripto
   JWT_SECRET=prescripto-secret-2024
   CLOUDINARY_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   ```

8. Click **"Create Web Service"**
9. ⏳ Wait 5-10 minutes

---

## **UPDATE FRONTEND API URLS (After Backend Deployment)**

### **Update clientside/.env:**

Create file at: `c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside\.env`

Content:
```
VITE_API_URL=https://prescripto-backend.onrender.com
```

### **Update admin/.env:**

Create file at: `c:\Users\Stephen Quansah\Desktop\prescripto-main\admin\.env`

Content:
```
VITE_API_URL=https://prescripto-backend.onrender.com
```

### **Push Changes:**

```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside"
git add .env
git commit -m "Update API URL"
git push

cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\admin"
git add .env
git commit -m "Update API URL"
git push
```

Netlify will auto-redeploy! ✅

---

## **GET MONGODB URI**

1. Go to https://mongodb.com/cloud/atlas
2. Sign up (FREE)
3. Create cluster (M0 FREE)
4. Create database user:
   - Username: `admin`
   - Password: (your choice)
5. Go to Clusters → Connect → Drivers
6. Copy connection string
7. Replace PASSWORD with your password
8. Format: `mongodb+srv://admin:PASSWORD@cluster.mongodb.net/prescripto`

---

## **GET CLOUDINARY KEYS**

1. Go to https://cloudinary.com
2. Sign up (FREE)
3. Go to Dashboard
4. Copy:
   - Cloud Name
   - API Key
   - API Secret

---

## **FINAL DEPLOYMENT LINKS:**

After everything is deployed, you'll have:

```
🌐 Website:        https://prescripto-website-{random}.netlify.app
🔐 Admin Panel:    https://prescripto-admin-{random}.netlify.app
🔧 Backend API:    https://prescripto-backend.onrender.com
💾 Database:       MongoDB Atlas (FREE)
📸 Images:         Cloudinary (FREE)

Total Cost: $0 🎉
```

---

## **TROUBLESHOOTING COMMANDS:**

### **Check git status:**
```powershell
cd c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside
git status
```

### **Check remote URL:**
```powershell
git remote -v
```

### **See all commits:**
```powershell
git log --oneline
```

### **Check git config:**
```powershell
git config --list
```

---

## **SUPPORT:**

❓ **Issue**: Push rejected
✅ **Solution**: Make sure repo exists on GitHub

❓ **Issue**: Token error
✅ **Solution**: Generate new token at https://github.com/settings/tokens

❓ **Issue**: Build failed on Netlify
✅ **Solution**: Check logs in Netlify Dashboard → Deploys → View logs

❓ **Issue**: Backend not connecting
✅ **Solution**: Check MONGODB_URI and Cloudinary keys in Render env variables

---

**You're all set!** Follow the steps in order and your website will be live! 🚀
