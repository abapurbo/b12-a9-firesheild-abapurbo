# 🧠 SkillSwap – A Local Skill Exchange Platform

## 🔗 Live Demo  
[🔴 Click Here to Visit Live Site](https://b12-a9-firesheild-abapurbo.web.app/)  

---

## 📌 Project Overview
**SkillSwap** is an interactive platform designed for individuals to **offer, learn, and exchange skills** within their local community.  
From **guitar lessons** to **coding tutorials**, users can connect with local skill providers, browse listings, rate experiences, and even book sessions — all in one place.

---

## 🚀 Key Features

### 🌐 General Features
- Single Page Application (SPA) with **React Router**
- **Responsive Design** (mobile, tablet, desktop)
- Hosted on **Netlify / Firebase / Surge**
- **Environment variables** used to secure Firebase keys
- **Modern & Minimalist UI** with AOS animations and Framer Motion transitions

### 👥 Authentication
- **Firebase Authentication** (Email/Password + Google Login)
- Password Validation:
  - At least 6 characters
  - Must include uppercase & lowercase letters
- Functional **Forgot Password** system
- **Protected Routes** for authenticated users (e.g., Skill Details Page)
- User data persistence across reloads

### 🧑‍💼 My Profile
- Displays user info: **Name, Email, Profile Photo**
- Functional **Update Profile** using Firebase `updateProfile()`
- Update name and profile photo dynamically

### 🏠 Home Page Sections
1. **Hero Slider** – engaging carousel built using Swiper.js  
2. **Popular Skills** – dynamically loaded from local JSON data  
3. **Top Rated Providers** – static or fetched data section  
4. **How It Works** – 3-step explanation of how SkillSwap functions  
5. **Extra Section:** “Community Highlights” – showcasing user stories & collaborations  

### 💬 Skill Details Page
- Accessible only if logged in  
- Shows complete skill information (from JSON)  
- Includes **Book Session Form** with Toast success message  

### 🧩 Footer & Navbar
- Navbar shows user avatar on login  
- Hover displays user display name  
- Footer includes contact info, privacy policy & social links

---

## 🧾 JSON Data Example
```json
[
  {
    "skillId": 1,
    "skillName": "Beginner Guitar Lessons",
    "providerName": "Alex Martin",
    "providerEmail": "alex@skillswap.com",
    "price": 20,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Acoustic guitar classes for complete beginners.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Music"
  },
  {
    "skillId": 2,
    "skillName": "Spoken English Practice",
    "providerName": "Sara Hossain",
    "providerEmail": "sara@skillswap.com",
    "price": 10,
    "rating": 4.6,
    "slotsAvailable": 5,
    "description": "Conversational English sessions for non-native speakers.",
    "image": "https://i.postimg.cc/example2.png",
    "category": "Language"
  }
]
```

---

## 🔐 Environment Variables
Your Firebase credentials are stored securely in a `.env` file:
```
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```
✅ Make sure `.env` is listed in `.gitignore`.

---

## 📦 NPM Packages Used
| Package | Purpose |
|----------|----------|
| **react-hot-toast** | Toast notifications |
| **aos** | Scroll-based animations |
| **swiper** | Hero slider and carousel |

---

## 💡 Technical Features
- **React Router DOM v6** for route handling  
- **TailwindCSS + DaisyUI** for styling  
- **React Context API** for global authentication state  
- **Protected Routes** with redirect on unauthorized access  
- **SPA behavior ensured** – no reload errors  

---

## 🧑‍💻 Authentication Flow
1. **Signup** → Registers a new user and saves profile info  
2. **Login** → Authenticates existing user (via email or Google)  
3. **Forgot Password** → Redirects to Gmail after reset request  
4. **Logout** → Clears user session  

---

## 🧱 Extra Section Idea: Community Highlights
Displays testimonials or collaboration stories between users who exchanged skills successfully.  
Encourages new users to join and share their own experience.

---

## 🧰 Technologies Used
- **React.js**
- **Firebase Auth**
- **TailwindCSS + DaisyUI**
- **AOS**
- **Swiper**
- **React Hot Toast**
- **React Router DOM**

---

## My project repo and live link 
- [🔴 Github repo link](https://github.com/abapurbo/b12-a9-firesheild-abapurbo)
- [🔴 Live Site](https://b12-a9-firesheild-abapurbo.web.app/)

---



