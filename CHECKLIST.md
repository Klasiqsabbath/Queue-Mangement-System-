# ✅ DEPLOYMENT CHECKLIST

## **PHASE 1: PREPARATION** ⏱️ 5 minutes

### Before You Start:
- [ ] You have a GitHub account (`klasiqsabbath`)
- [ ] You have a Netlify account (or ready to create one)
- [ ] You're connected to internet
- [ ] PowerShell terminal is available

### Files Created:
- [ ] ✅ QUICK_DEPLOY.md
- [ ] ✅ COMMANDS_REFERENCE.md
- [ ] ✅ DEPLOYMENT_STEPS.md
- [ ] ✅ BACKEND_DEPLOYMENT.md
- [ ] ✅ README_DEPLOYMENT.md

---

## **PHASE 2: GITHUB SETUP** ⏱️ 10 minutes

### Create Repositories:
- [ ] Repository 1: `prescripto-website`
  - [ ] Name: `prescripto-website`
  - [ ] Visibility: **Public**
  - [ ] Created ✅

- [ ] Repository 2: `prescripto-admin`
  - [ ] Name: `prescripto-admin`
  - [ ] Visibility: **Public**
  - [ ] Created ✅

### Get GitHub Token:
- [ ] Go to: https://github.com/settings/tokens
- [ ] Generate new token (classic)
- [ ] Token name: `Netlify Deployment`
- [ ] Scopes: ☑️ `repo` only
- [ ] Token copied: `ghp_____________`
- [ ] **Token saved in safe place** ⚠️

---

## **PHASE 3: PUSH TO GITHUB** ⏱️ 5 minutes

### Push Website:
```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside"
git push -u origin main
```
- [ ] Command executed
- [ ] Username: `klasiqsabbath`
- [ ] Password: [GitHub token]
- [ ] Result: `Branch 'main' set up to track 'origin/main'` ✅

### Push Admin Dashboard:
```powershell
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\admin"
git push -u origin main
```
- [ ] Command executed
- [ ] Username: `klasiqsabbath`
- [ ] Password: [GitHub token]
- [ ] Result: `Branch 'main' set up to track 'origin/main'` ✅

---

## **PHASE 4: NETLIFY DEPLOYMENT** ⏱️ 15 minutes

### Deploy Website:
1. [ ] Go to: https://netlify.com
2. [ ] Sign in with GitHub
3. [ ] Click: "Add new site" → "Import an existing project"
4. [ ] Select: `klasiqsabbath/prescripto-website`
5. [ ] Settings auto-filled:
   - [ ] Build command: `npm run build`
   - [ ] Publish directory: `dist`
6. [ ] Click: "Deploy site"
7. [ ] ⏳ Wait 2-3 minutes for deployment
8. [ ] Website URL: `https://prescripto-website-________________.netlify.app` ✅

### Deploy Admin Dashboard:
1. [ ] Click: "Add new site" → "Import an existing project"
2. [ ] Select: `klasiqsabbath/prescripto-admin`
3. [ ] Settings auto-filled
4. [ ] Click: "Deploy site"
5. [ ] ⏳ Wait 2-3 minutes for deployment
6. [ ] Admin URL: `https://prescripto-admin-________________.netlify.app` ✅

---

## **PHASE 5: VERIFICATION** ⏱️ 5 minutes

### Test Website:
- [ ] Visit: `https://prescripto-website-xxx.netlify.app`
- [ ] Homepage loads ✅
- [ ] Navigation works ✅
- [ ] Doctors display ✅
- [ ] "Book appointment" button works ✅

### Test Admin Panel:
- [ ] Visit: `https://prescripto-admin-xxx.netlify.app`
- [ ] Login page displays ✅
- [ ] Can enter credentials ✅

---

## **PHASE 6: OPTIONAL - BACKEND DEPLOYMENT** ⏱️ 20 minutes

### Create Backend Repository:
- [ ] Repository name: `prescripto-backend`
- [ ] Visibility: **Public**
- [ ] Created ✅

### Push Backend to GitHub:
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
- [ ] Command executed ✅
- [ ] Result: `Branch 'main' set up to track 'origin/main'` ✅

### MongoDB Setup:
- [ ] Go to: https://mongodb.com/cloud/atlas
- [ ] Create account (FREE)
- [ ] Create M0 cluster (FREE)
- [ ] Create database user: `admin`
- [ ] Get connection string: `mongodb+srv://admin:____@cluster.mongodb.net/prescripto`
- [ ] Connection string saved ✅

### Cloudinary Setup:
- [ ] Go to: https://cloudinary.com
- [ ] Create account (FREE)
- [ ] Get Cloud Name: `______________`
- [ ] Get API Key: `______________`
- [ ] Get API Secret: `______________`
- [ ] Credentials saved ✅

### Deploy Backend on Render:
- [ ] Go to: https://render.com
- [ ] Sign up with GitHub ✅
- [ ] Click: "New +" → "Web Service"
- [ ] Select: `klasiqsabbath/prescripto-backend`
- [ ] Settings:
  - [ ] Name: `prescripto-backend`
  - [ ] Environment: `Node`
  - [ ] Build Command: `npm install`
  - [ ] Start Command: `npm run server`
  - [ ] Instance Type: `Free`
- [ ] Environment Variables:
  - [ ] MONGODB_URI: `mongodb+srv://...`
  - [ ] JWT_SECRET: `prescripto-secret-2024`
  - [ ] CLOUDINARY_NAME: `______________`
  - [ ] CLOUDINARY_API_KEY: `______________`
  - [ ] CLOUDINARY_API_SECRET: `______________`
- [ ] Click: "Create Web Service"
- [ ] ⏳ Wait 5-10 minutes
- [ ] Backend URL: `https://prescripto-backend.onrender.com` ✅

### Update Frontend URLs:
- [ ] Create `clientside/.env`:
  ```
  VITE_API_URL=https://prescripto-backend.onrender.com
  ```
- [ ] Create `admin/.env`:
  ```
  VITE_API_URL=https://prescripto-backend.onrender.com
  ```
- [ ] Push changes to GitHub
- [ ] Netlify auto-redeploys ✅

---

## **🎉 FINAL STATUS:**

### ✅ BASIC DEPLOYMENT (Website + Admin):
- [ ] Website live: ✅
- [ ] Admin panel live: ✅
- [ ] Total time: ~30 minutes
- [ ] Cost: **$0**

### ✅ FULL DEPLOYMENT (+ Backend):
- [ ] Backend live: ✅
- [ ] Database connected: ✅
- [ ] Images uploading: ✅
- [ ] All features working: ✅
- [ ] Total time: ~50 minutes
- [ ] Cost: **$0**

---

## **📱 YOUR LIVE URLS:**

```
🌐 WEBSITE:
   https://prescripto-website-[name].netlify.app

🔐 ADMIN PANEL:
   https://prescripto-admin-[name].netlify.app

🔧 BACKEND API (Optional):
   https://prescripto-backend.onrender.com
```

---

## **🆘 TROUBLESHOOTING:**

| Issue | Status | Solution |
|-------|--------|----------|
| Can't push to GitHub | [ ] | Get new token at github.com/settings/tokens |
| Build fails on Netlify | [ ] | Check logs: Dashboard → Deploys → View logs |
| Website won't load | [ ] | Wait 5 more minutes or refresh browser |
| Backend not connecting | [ ] | Check environment variables in Render |
| Images not uploading | [ ] | Verify Cloudinary keys in Render |

---

## **📝 NOTES:**

- GitHub token: `_____________________`
- Website URL: `_____________________`
- Admin URL: `_____________________`
- Backend URL: `_____________________`
- MongoDB URI: `_____________________`

---

## **✨ YOU DID IT!**

Mark all boxes ✅ and celebrate! 🎉

Your app is now live on the internet for FREE! 🚀

---

*Print this page and keep it handy while deploying!*
