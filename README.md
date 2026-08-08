# 77 - Gaming Portal Platform

Full Stack Web Application สำหรับจัดการระบบเกมส์และเดิมพัน

## 📁 โครงสร้างโปรเจค

```
77/
├── frontend/              # React Frontend
│   ├── src/
│   │   ├── components/   # React Components
│   │   ├── pages/        # หน้าต่างๆ
│   │   ├── services/     # API Services
│   │   ├── hooks/        # Custom Hooks
│   │   ├── context/      # Context API
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
├── backend/               # Node.js + Express Backend
│   ├── src/
│   │   ├── routes/       # API Routes
│   │   ├── controllers/  # Controllers
│   │   ├── models/       # Database Models
│   │   ├── middleware/   # Middleware
│   │   ├── config/       # Configuration
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── README.md             # นี่
```

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, JWT
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## ✨ ฟีเจอร์หลัก

- ✅ ระบบสมัครสมาชิก / เข้าสู่ระบบ
- ✅ หน้า Home แสดงเกมส์และบทความ
- ✅ Dashboard ผู้ใช้ (ประวัติ, กระเป๋าเงิน)
- ✅ Admin Panel (จัดการเกมส์, ผู้ใช้, เดิมพัน)
- ✅ ระบบเดิมพัน (Betting System)
- ✅ ระบบ Wallet/กระเป๋าเงิน
- ✅ API RESTful
- ✅ Responsive Design

## 📋 Getting Started

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 🔐 Security
- JWT Authentication
- Password Hashing (bcrypt)
- Environment Variables (.env)
- CORS Protection

---

**Created with ❤️ by Copilot**
