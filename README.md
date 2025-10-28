# AlgoZap
# ⚡ AlgoZap — Blockchain-Verified Workflow Automation

**AlgoZap** is an open-source, Zapier-like automation platform that connects off-chain applications with **on-chain Algorand smart contract actions**.  
It allows users to create, execute, and verify automated workflows (“Zaps”) — all transparently verified on the blockchain.

---

## 🚀 Features

### 🧩 Core Features
- Create and manage workflows (Triggers + Actions)
- Integrations with Gmail, Slack, Google Sheets, Webhooks, etc.
- On-chain actions (token transfers, smart contract calls)
- Realtime execution logs and blockchain verification
- Secure credential storage and authentication

### 🔐 User System
- Email/password sign-up & login
- Optional wallet login (Pera Wallet / WalletConnect)
- JWT authentication and protected routes
- Multi-factor authentication support (optional)

### 🧠 Developer Features
- Custom connector SDK
- Algorand SDK integration for on-chain verification
- API key management for integrations

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Blockchain** | Algorand (via AlgoKit SDK) |
| **Authentication** | JWT, bcrypt |
| **Frontend (planned)** | React + Tailwind (dashboard builder) |

---

## ⚙️ Folder Structure
AlgoZap/
│
├── index.js # Entry point
├── config/
│ └── db.js # MongoDB connection
├── routes/
│ └── authRoutes.js # Authentication routes
├── controllers/
│ └── authController.js # Register/Login logic
├── models/
│ └── User.js # User schema
├── middleware/
│ └── authMiddleware.js # JWT verification
├── .env # Environment variables
├── package.json
└── README.md


---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/AlgoZap.git
cd AlgoZap

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the project root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/algozap
JWT_SECRET=supersecretkey123

Start MongoDB (local)
"C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe"

4️⃣ Start MongoDB (local)
"C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe"


<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/1394ffa8-0b1a-468c-9311-60f57efa125a" />
