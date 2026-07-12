# 🚀 Complete Deployment Guide - Prescripto Website

## **STEP 1: Generate GitHub Personal Access Token**

### Quick Steps:
1. **Log in to GitHub** at [github.com](https://github.com)
2. Click your **profile picture** (top-right) → **Settings**
3. Click **Developer settings** (left sidebar, scroll down)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token (classic)**
6. **Fill in the form:**
   - **Token name**: `Netlify Deployment`
   - **Expiration**: `90 days` (or your preference)
   - **Select scopes**: Check ONLY:
     - ☑️ `repo` (all)
   - Click **Generate token**
7. **COPY the token immediately** (you won't see it again!)
   - Format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
8. **Save it somewhere safe** - you'll use it in the next step

---

## **STEP 2: Push Code to GitHub**

### Run these commands in PowerShell:

```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside"
git push -u origin main
```

When prompted:
- **Username**: `klasiqsabbath`
- **Password**: Paste your Personal Access Token (from Step 1)

✅ If you see: "Branch 'main' set up to track 'origin/main'" → **SUCCESS!**

---

## **STEP 3: Create GitHub Repository (if not done)**

**Only do this if the repo doesn't exist yet:**

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `prescripto-website`
3. **Description**: `Prescripto Appointment Booking - Frontend`
4. Select **Public**
5. Click **Create repository**
6. Copy the commands and run them (you already have the remote added)

---

## **STEP 4: Deploy to Netlify (MAIN DEPLOYMENT)**

### Quick Steps:

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up** (if new) or **Log in** → Choose **GitHub**
3. Authorize Netlify to access your GitHub
4. Click **Add new site** → **Import an existing project**
5. **Select your repository:**
   - Organization: `klasiqsabbath`
   - Repository: `prescripto-website`
   - Branch: `main`
6. Click **Deploy site**
7. **Build Settings** (auto-filled but verify):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Environment variables**: (leave empty for now)
8. Click **Deploy**

### 🎉 Your Site Will Be Live In 2-3 Minutes!

**Your URL will be**: `https://prescripto-website-{random}.netlify.app`

---

## **STEP 5: Deploy Admin Dashboard (Optional)**

**Repeat the same process for admin:**

1. Initialize git in admin folder:
   ```powershell
   cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\admin"
   git init
   git config user.email "stephenquanssh@gmail.com"
   git config user.name "klasiqsabbath"
   git add .
   git commit -m "Initial admin dashboard"
   ```

2. Create GitHub repo: `prescripto-admin`

3. Push to GitHub:
   ```powershell
   git remote add origin https://github.com/klasiqsabbath/prescripto-admin.git
   git branch -M main
   git push -u origin main
   ```

4. Deploy on Netlify (same steps as website)

---

## **STEP 6: Deploy Backend (Optional but Recommended)**

For the backend to work with deployed frontends, deploy it on **Render.com**:

1. Create account at [render.com](https://render.com)
2. Push backend to GitHub
3. Create new Web Service on Render
4. Add environment variables
5. Deploy

---

## **Troubleshooting:**

| Problem | Solution |
|---------|----------|
| **Token expired** | Generate a new one at [github.com/settings/tokens](https://github.com/settings/tokens) |
| **Push rejected** | Make sure repository exists on GitHub |
| **Build failed on Netlify** | Check build logs: Dashboard → Deploys → Failed deploy → View logs |
| **CORS errors** | Need to deploy backend separately |

---

## **Summary of URLs After Deployment:**

- **Website**: `https://prescripto-website-{random}.netlify.app`
- **Admin**: `https://prescripto-admin-{random}.netlify.app` (if deployed)
- **Backend**: Needed for full functionality (separate deployment)

---

## **Quick Checklist:**

- [ ] Generate GitHub token
- [ ] Push code to GitHub
- [ ] Create Netlify account
- [ ] Deploy website on Netlify
- [ ] Test the deployed site
- [ ] (Optional) Deploy admin dashboard
- [ ] (Optional) Deploy backend

---

**Need help?** Let me know which step you're stuck on! 🚀
