# Prescripto - Test Credentials & Login Guide

## ✅ All Servers Running

### Current Status:
- ✅ **Website (Clientside):** http://localhost:5173 (Running - Port 5173)
- ✅ **Admin Dashboard:** http://localhost:5174 (Running - Port 5174)  
- ✅ **Backend API:** http://localhost:4000 (Running - Port 4000)

---

## 🔐 Login Credentials

### ADMIN DASHBOARD - http://localhost:5174

#### Admin Account:
```
Email:    admin@prescripto.com
Password: admin123
```

#### Doctor Accounts (switch to "Doctor Login" on admin page):
```
All doctors have password: password123

- Dr. Richard James        → richard.james@prescripto.com
- Dr. Emily Larson         → emily.larson@prescripto.com
- Dr. Sarah Patel          → sarah.patel@prescripto.com
- Dr. Christopher Lee      → christopher.lee@prescripto.com
- Dr. Jennifer Garcia      → jennifer.garcia@prescripto.com
```

---

### WEBSITE/PATIENT PORTAL - http://localhost:5173

#### Pre-Registered User Accounts:
```
Account 1:
Email:    john@example.com
Password: password123

Account 2:
Email:    jane@example.com
Password: password123
```

#### OR Create a New Account:
Click "Create account" button and sign up with any email/password combination.

---

## 🚀 Quick Start - How to Test

### Step 1: Open Both Applications
- Website: http://localhost:5173
- Admin: http://localhost:5174

### Step 2: Login as Admin
1. Go to http://localhost:5174
2. Make sure "Admin" tab is selected
3. Enter: `admin@prescripto.com`
4. Enter password: `admin123`
5. Click Login

**What you'll see after login:**
- Dashboard with statistics
- List of doctors
- Manage appointments
- Add new doctors

### Step 3: Login as Patient/User (Website)
1. Go to http://localhost:5173
2. Click "Create account" button (top right)
3. Toggle to "Login" mode
4. Enter: `john@example.com`
5. Enter password: `password123`
6. Click Login

**What you'll see after login:**
- Browse and book appointments with doctors
- View your booked appointments
- Cancel appointments
- Update your profile

### Step 4: Login as Doctor (Admin Panel)
1. On the admin login page (http://localhost:5174)
2. Click "Doctor Login? Click here"
3. Enter: `richard.james@prescripto.com`
4. Enter password: `password123`
5. Click Login

**What you'll see after login:**
- Your appointments list
- Mark appointments as complete
- View patient details

---

## 🛠️ Technical Details

### Environment Configuration
```
Backend URL: http://localhost:4000
Admin Email: admin@prescripto.com (from .env)
Admin Password: admin123 (from .env)
JWT Secret: demo_jwt_secret_key_for_testing_only
```

### How Authentication Works
1. **Admin Login:** Uses environment variables (ADMIN_EMAIL, ADMIN_PASSWORD)
2. **User Login:** Checks in-memory storage (or MongoDB if configured)
3. **Doctor Login:** Checks in-memory storage (or MongoDB if configured)
4. **Tokens:** Stored in localStorage
   - `token` - User authentication token
   - `aToken` - Admin authentication token
   - `dToken` - Doctor authentication token

### Test Data Source
- All test data is stored in-memory when MongoDB is unavailable
- Located in: `backend/storage/memoryStorage.js`
- Pre-populated with 5 doctors and 2 test users
- All test passwords hashed with bcrypt

---

## 📝 Features to Test

### As Admin:
- [ ] Login to admin panel
- [ ] View dashboard statistics
- [ ] View all doctors list
- [ ] Add a new doctor
- [ ] View all appointments
- [ ] Cancel an appointment
- [ ] Update appointment status

### As Patient:
- [ ] Sign up for new account
- [ ] Login with existing account
- [ ] Browse doctors by speciality
- [ ] View doctor profile and fees
- [ ] Book an appointment
- [ ] View my appointments
- [ ] Cancel an appointment
- [ ] Update profile

### As Doctor:
- [ ] Login to doctor portal
- [ ] View today's appointments
- [ ] Mark appointment as complete
- [ ] Cancel appointment
- [ ] View appointment details

---

## ❓ Troubleshooting

### Backend Not Connecting
If you see "net::ERR_CONNECTION_REFUSED":
```bash
# In backend directory, run:
npm run server
# Should show: "Server started 4000"
```

### Can't Login?
1. Check browser console for error messages (F12)
2. Verify backend is running and listening on port 4000
3. Check that credentials match exactly (case-sensitive email)
4. Clear browser cache/localStorage and try again

### Test Data Not Loading?
- Test users and doctors are in-memory storage
- If database is unavailable, memory storage is used automatically
- No need for MongoDB setup for testing

---

## 📂 Project Structure
```
prescripto-main/
├── backend/              # Node.js + Express API
│   └── storage/memoryStorage.js  (Test data here)
├── clientside/          # React patient portal
├── admin/               # React admin dashboard
└── TEST_CREDENTIALS.md  (This file)
```

---

## 🎯 Next Steps

1. **Login and test all three roles** (Admin, User, Doctor)
2. **Test creating appointments** from patient portal
3. **Manage appointments** from admin dashboard
4. **Deploy to production** when ready (update .env with real credentials)

Good luck! 🎉
