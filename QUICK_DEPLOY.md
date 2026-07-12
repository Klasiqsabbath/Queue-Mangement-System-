# ⚡ Quick Start: Deploy in 5 Minutes

## **Your Setup Is Ready!** ✅

Both projects are initialized and ready to push:
- ✅ `clientside/` → Connected to GitHub remote
- ✅ `admin/` → Connected to GitHub remote

---

## **NOW DO THIS (Step-by-Step):**

### **STEP 1: Get GitHub Token (2 minutes)**

1. Go to: https://github.com/settings/tokens
2. **Sign in** if needed (use your account)
3. Click **"Generate new token (classic)"**
4. Set **Token name**: `Netlify Deployment`
5. Set **Expiration**: `90 days`
6. Check ONLY this box: ☑️ `repo`
7. Scroll down → Click **"Generate token"**
8. **IMMEDIATELY COPY THE TOKEN** (you can't see it again!)
   - It looks like: `ghp_abc123xyz...`
9. **Paste it in a notepad** - you'll need it in 2 minutes

---

### **STEP 2: Create GitHub Repositories (1 minute)**

**Create TWO repositories on GitHub:**

#### **Repository 1: Website**
1. Go to: https://github.com/new
2. **Repository name**: `prescripto-website`
3. **Description**: `Prescripto Appointment Booking - Website`
4. Select: **Public**
5. Click **"Create repository"**
6. You'll see commands - you don't need them (already set up)

#### **Repository 2: Admin Dashboard**
Repeat the same for:
2. **Repository name**: `prescripto-admin`
3. **Description**: `Prescripto Admin Dashboard`

---

### **STEP 3: Push Code to GitHub (1 minute)**

**Open PowerShell and run:**

```powershell
# Push Website
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\clientside"
git push -u origin main
```

When prompted:
- **Username**: `klasiqsabbath`
- **Password**: Paste your token from Step 1

Then:
```powershell
# Push Admin Dashboard
cd "c:\Users\Stephen Quansah\Desktop\prescripto-main\admin"
git push -u origin main
```

**Paste token again when prompted**

✅ If you see `Branch 'main' set up to track...` → **SUCCESS!**

---

### **STEP 4: Deploy on Netlify (1 minute per site)**

#### **Deploy Website:**

1. Go to: https://netlify.com
2. Click **"Sign up"** (if new) or **"Log in"**
3. Choose **"GitHub"** → Authorize
4. Click **"Add new site"** → **"Import an existing project"**
5. **Select**: `klasiqsabbath / prescripto-website`
6. Click **Deploy site** (settings are auto-filled!)
7. ⏳ Wait 2-3 minutes...

**🎉 Your site is LIVE!**
- Check your Netlify Dashboard for the URL
- It will be something like: `https://prescripto-website-abc123.netlify.app`

#### **Deploy Admin Dashboard:**

Repeat the same for `prescripto-admin` repository

---

## **DONE!** 🚀

You now have:
- ✅ Website deployed: `https://prescripto-website-{random}.netlify.app`
- ✅ Admin panel deployed: `https://prescripto-admin-{random}.netlify.app`

---

## **Troubleshooting:**

| If... | Then... |
|-------|---------|
| **Token error** | Get a new one at https://github.com/settings/tokens |
| **Push rejected** | Make sure repositories exist on GitHub |
| **Build fails** | Click "Deploys" in Netlify → Click failed deploy → View logs |
| **Website won't load** | Wait 5 min for deployment to complete |

---

## **Next Steps (Optional):**

- Deploy the backend to Render.com for database functionality
- Set up custom domain name
- Add SSL certificate (Netlify does this automatically)

---

**IMPORTANT REMINDERS:**
- Keep your GitHub token safe (don't share it)
- You can regenerate tokens anytime
- Both deployments are on free tier ✅

Need help? Let me know which step you're on! 📍
