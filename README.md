# 💻 GrowthProAI – Mini Local Business Dashboard 🚀

Welcome to the **GrowthProAI Full Stack Intern Assignment**. This project simulates how small businesses can view their Google Business ratings and AI-generated SEO headlines in a visually engaging and responsive dashboard.

---

## 🧩 Project Overview

The Mini Local Business Dashboard is a full-stack web application built using:

- **Frontend:** React js + Tailwind CSS  
- **Backend:** Node.js + Express (REST API)

Users can submit their business name and location, which returns simulated SEO content including rating, reviews, and a smart AI-style headline. The headline can also be regenerated dynamically via a dedicated API call.

---

## 🌟 Features

### 🔹 Frontend (React + Tailwind CSS)
- ✅ Input form with:
  - Business Name
  - Location
- ✅ Dynamic display card showing:
  - Google Rating (e.g., ⭐ 4.5)
  - Number of Reviews
  - AI-generated SEO headline
  - Button to regenerate headline
- ✅ Clean, responsive UI with Tailwind CSS
- ✅ Loading spinner during API interactions
- ✅ Context API for global state management

### 🔸 Backend (Node.js + Express)
- **POST `/business-data`**
  - Accepts JSON: `{ "name": "Cake & Co", "location": "Mumbai" }`
  - Returns: `rating`, `reviews`, and `headline`

- **GET `/regenerate-headline?name=...&location=...`**
  - Returns a new AI-style SEO headline from a static list

---

## 💻 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React (Class Components), Tailwind CSS |
| Backend   | Node.js, Express       |   
---

## Folder Structure
```
GrowthProAI/
├── backend/ # Node.js + Express backend
│ ├── index.js # Main server file with endpoints
│ └── package.json # Backend dependencies
│
├── frontend/ # React frontend application
│ ├── public/ # Public assets
│ ├── src/ # Source files
│ │ ├── components/ # Reusable components (Form, Card, Dashboard)
│ │ ├── context/ # React Context for state management
│ │ ├── App.js # Main app component
│ │ ├── index.css # Global styles
│ │ └── index.js # React entry point
│ └── package.json # Frontend dependencies
├── README.md # Project documentation
└── .gitignore # Files and folders to ignore in Git
```

## 🚀 Project Setup Instructions

## Frontend 
```bash
cd frontend
npm install
npm run start
```

## Backend 
```bash
cd backend
npm install
node index.js
```




 

