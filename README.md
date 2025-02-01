# 🛡️ Authentication Flow (Age, Email, OTP Verification) 🔐

This project implements a **multi-step authentication system** using **React, Tailwind CSS, and React Router**. Users must verify their **date of birth, email, and OTP** before proceeding.

## 🚀 Features
- **Age Verification** (Users must enter their date of birth)
- **Email Verification** (Users enter their email to proceed)
- **OTP Verification** (Users input a 5-digit OTP)
- **Navigation Between Steps** using `react-router-dom`
- **Dynamic Button Disabling** (Buttons remain disabled until valid input is provided)
- **Tailwind CSS for Styling** (Modern & Responsive UI)

---

## 🛠️ Tech Stack  
- **Frontend:** React, Tailwind CSS  
- **Routing:** React Router  
- **State Management:** useState, useRef  

---

## 📂 Folder Structure  
authentication-flow/
│── public/                     # Static files
│── src/                        # Source code
│   ├── components/             # Reusable UI components
│   │   ├── Age.jsx             # Age verification component
│   │   ├── Start.jsx           # Email verification component
│   │   ├── Otp.jsx             # OTP verification component
│   │   ├── Button.jsx          # Custom button component
│   │   ├── InputBox.jsx        # Custom input field component
│   │   ├── Header.jsx          # Header component
│   ├── App.js                  # Main application file
│   ├── index.js                # Entry point
│── package.json                # Project dependencies
│── README.md                   # Documentation
