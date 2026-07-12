# 🔧 Backend Deployment (Optional but Recommended)

## Why Deploy Backend?

Without a deployed backend:
- ❌ Appointments won't save
- ❌ Doctor profiles won't work
- ❌ Images won't upload
- ✅ Website will still display data (mock data)

With deployed backend:
- ✅ Full app functionality
- ✅ Real database
- ✅ Doctor management
- ✅ Appointment system works

---

## **Option 1: Deploy on Render.com (FREE, Recommended)**

### Step 1: Prepare Backend

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

### Step 2: Create Render Account

1. Go to: https://render.com
2. Click **"Sign up"** → Choose **"GitHub"**
3. Authorize Render to access your repos

### Step 3: Deploy on Render

1. Click **"New +"** → **"Web Service"**
2. Select: `klasiqsabbath/prescripto-backend`
3. Fill in:
   - **Name**: `prescripto-backend`
   - **Environment**: `Node`
   - **Region**: `(your closest region)`
   - **Branch**: `main`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Instance Type**: `Free` (scroll down)

### Step 4: Add Environment Variables

In the same page, scroll to **"Environment"** section:

Add these variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prescripto
JWT_SECRET=prescripto-secret-2024
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Where to get these:**
- **MONGODB_URI**: MongoDB Atlas (see guide below)
- **JWT_SECRET**: Just use: `prescripto-secret-2024`
- **Cloudinary**: Sign up at cloudinary.com (free tier)

### Step 5: Deploy

Click **"Create Web Service"** and wait 5-10 minutes

You'll get a URL like: `https://prescripto-backend.onrender.com`

### Step 6: Update Frontend URLs

In both `clientside` and `admin` folders, create `.env` file:

**clientside/.env:**
```
VITE_API_URL=https://prescripto-backend.onrender.com
```

**admin/.env:**
```
VITE_API_URL=https://prescripto-backend.onrender.com
```

Then commit and push:
```powershell
git add .env
git commit -m "Update API URL"
git push
```

Netlify will auto-redeploy with new settings ✅

---

## **MongoDB Setup (FREE Database)**

### Step 1: Create MongoDB Account

1. Go to: https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"**
3. Sign up with email
4. Create organization and project

### Step 2: Create Cluster

1. Click **"Build a Database"**
2. Select **"M0 Shared"** (Always FREE)
3. Choose your region
4. Click **"Create Deployment"**
5. Wait for cluster to be created

### Step 3: Create Database User

1. Go to **"Database Access"** tab
2. Click **"Add New Database User"**
3. Create username: `admin`
4. Create password: (save this!)
5. Click **"Add User"**

### Step 4: Allow Network Access

1. Go to **"Network Access"** tab
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### Step 5: Get Connection String

1. Go to **"Clusters"** → Click **"Connect"**
2. Select **"Drivers"** → **Node.js**
3. Copy the connection string:
   ```
   mongodb+srv://admin:PASSWORD@cluster.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace:
   - `admin` → your username
   - `PASSWORD` → your password
   - Add `/prescripto` at the end:
   ```
   mongodb+srv://admin:PASSWORD@cluster.mongodb.net/prescripto?retryWrites=true&w=majority
   ```

This is your `MONGODB_URI` for Render.com

---

## **Cloudinary Setup (FREE Image Hosting)**

### Step 1: Create Account

1. Go to: https://cloudinary.com
2. Click **"Sign up"** (FREE tier)
3. Verify email

### Step 2: Get API Credentials

1. Go to Dashboard
2. Find these values:
   - **Cloud Name**: `dxxxxxxxx` (or your custom name)
   - **API Key**: `123456789...`
   - **API Secret**: `abc123xyz...`

Copy these to use in environment variables

---

## **Summary:**

```
Backend URL: https://prescripto-backend.onrender.com
Database: MongoDB Atlas (FREE 512MB)
Images: Cloudinary (FREE tier)
Cost: $0
Setup Time: ~30 minutes
```

---

## **After Deployment:**

Your Prescripto app will be FULLY FUNCTIONAL:
- Website: `https://prescripto-website-xxx.netlify.app`
- Admin: `https://prescripto-admin-xxx.netlify.app`
- Backend: `https://prescripto-backend.onrender.com`

All **FREE** and **Production Ready!** 🎉

---

**Need help?** Check the troubleshooting section in the main DEPLOYMENT_STEPS.md file.
