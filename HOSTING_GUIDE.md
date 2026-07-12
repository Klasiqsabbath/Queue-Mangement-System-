# 🚀 Free Hosting Guide for Prescripto

## Step 1: MongoDB Atlas Setup (FREE Database)

1. **Create Account**: Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. **Sign Up** with email
3. **Create Free Cluster**:
   - Click "Build a Database"
   - Select **M0 Shared** (Always FREE)
   - Choose region (closest to you)
   - Click "Create Deployment"
4. **Create Database User**:
   - Go to "Database Access" tab
   - Click "Add New Database User"
   - Set username and password (save these!)
   - Click "Add User"
5. **Add IP Address**:
   - Go to "Network Access" tab
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"
6. **Get Connection String**:
   - Click "Clusters" → "Connect"
   - Select "Drivers"
   - Copy the MongoDB connection string
   - Replace `<username>`, `<password>` with your credentials

---

## Step 2: Cloudinary Setup (FREE Image Hosting)

1. **Create Account**: Go to [cloudinary.com](https://cloudinary.com)
2. **Sign Up** (free tier available)
3. **Get API Keys**:
   - Go to Dashboard
   - Copy: Cloud Name, API Key, API Secret
4. Save these values

---

## Step 3: Backend Deployment on Render.com (FREE)

1. **Create Account**: Go to [render.com](https://render.com)
2. **Sign Up** with GitHub account
3. **Push Backend to GitHub**:
   ```bash
   # Initialize git (if not done)
   cd backend
   git init
   git add .
   git commit -m "Backend for Prescripto"
   git remote add origin https://github.com/YOUR_USERNAME/prescripto-backend.git
   git push -u origin main
   ```

4. **Create New Web Service on Render**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Select the repo
   - Settings:
     - **Name**: prescripto-backend
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm run server`
     - **Instance Type**: Free

5. **Add Environment Variables**:
   - Scroll to "Environment" section
   - Add variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Any random string (e.g., `prescripto-secret-2024`)
     - `CLOUDINARY_NAME`: Your Cloudinary name
     - `CLOUDINARY_API_KEY`: Your API key
     - `CLOUDINARY_API_SECRET`: Your API secret
   - Click "Create Web Service"

6. **Get Your Backend URL**:
   - After deployment, copy the URL (e.g., `https://prescripto-backend.onrender.com`)
   - This is your `VITE_API_URL`

---

## Step 4: Update Frontend URLs

### In **clientside** folder:

Create/Update `.env`:
```
VITE_API_URL=https://prescripto-backend.onrender.com
```

Update **src/context/AppContext.jsx**:
```javascript
const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:4000"
```

### In **admin** folder:

Create/Update `.env`:
```
VITE_API_URL=https://prescripto-backend.onrender.com
```

Update **src/context/AdminContext.jsx**:
```javascript
const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:4000"
```

---

## Step 5: Deploy Frontend to Vercel (FREE)

### Deploy Clientside Website:

1. **Create Account**: Go to [vercel.com](https://vercel.com)
2. **Sign Up** with GitHub
3. **Push to GitHub**:
   ```bash
   cd clientside
   git init
   git add .
   git commit -m "Frontend for Prescripto"
   git remote add origin https://github.com/YOUR_USERNAME/prescripto-frontend.git
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to Vercel dashboard
   - Click "Add New..." → "Project"
   - Import your `prescripto-frontend` repo
   - Framework: Vite
   - Environment Variables:
     - `VITE_API_URL`: `https://prescripto-backend.onrender.com`
   - Click "Deploy"

5. **Get Frontend URL**: Copy your Vercel domain (e.g., `prescripto-frontend.vercel.app`)

---

### Deploy Admin Dashboard:

Repeat the same process for the **admin** folder:
1. Push to GitHub as `prescripto-admin`
2. Deploy on Vercel
3. Add same environment variables
4. Get Admin URL (e.g., `prescripto-admin.vercel.app`)

---

## Step 6: Update Backend API URLs

Go back to Render.com dashboard and add these environment variables:
- `FRONTEND_URL`: Your Vercel frontend URL
- `ADMIN_URL`: Your Vercel admin URL

---

## Summary of Free Resources:

| Service | Limit | Cost |
|---------|-------|------|
| MongoDB Atlas | 512MB storage | FREE |
| Cloudinary | 25 credits/month | FREE |
| Render.com | 1 free web service | FREE |
| Vercel | Unlimited deployments | FREE |

---

## Testing Your Deployment:

1. Visit your frontend URL
2. Create an account
3. Book an appointment
4. Visit admin URL and login
5. Check appointments

---

## Important Notes:

⚠️ **Render.com Free Tier**:
- Spins down after 15 min of inactivity
- Takes ~1 min to restart
- Perfect for learning/testing
- Upgrade to paid when ready for production

---

## Troubleshooting:

**Backend not connecting?**
- Check MongoDB connection string
- Verify IP whitelist in MongoDB Atlas
- Check environment variables on Render

**Images not uploading?**
- Verify Cloudinary API keys
- Check upload folder permissions

**CORS errors?**
- Add your frontend URL to CORS in backend/server.js
- Make sure `origin: true` is set

---

Need help? Let me know! 🚀
