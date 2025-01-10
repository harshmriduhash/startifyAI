# 🚀 **Startify Copilot – Frontend README**  

**A seamless and intuitive frontend interface for Startup Copilot, designed to provide AI-powered insights, startup health analysis, and pitch deck generation.**

---

## 🌟 **Introduction**  

The **Startify Copilot Frontend** serves as the user interface for interacting with the backend APIs. Users can perform global searches, check their startup's health metrics, and generate AI-powered pitch decks.

---

## Demo
https://drive.google.com/file/d/1EPAxHCQkCmKgS2vtER61xLp4eYmBnFlg/view?usp=sharing

## 🛠️ **Features**  

### ✅ **1. Global Query Search**  
- Ask questions about startups, funding, or insights.  
- Retrieve AI-generated answers powered by the backend.  
- View query history with unique URLs for each query.  

### ✅ **2. Startup Health Check**  
- Input startup financial metrics.  
- Receive detailed analysis and suggestions.  
- View metrics via graphs and visualizations.  

### ✅ **3. AI-Powered Pitch Deck Generator**  
- Provide startup details: Name, Domain, Problem, Solution, Founders.  
- Generate a professional pitch deck.  
- Download pitch decks as PDF files.  

### ✅ **4. Authentication with Clerk**  
- Secure user authentication and authorization.  
- Personalized dashboards for logged-in users.  

### ✅ **5. Responsive Design**  
- Optimized for desktop and mobile experiences.  
- Smooth navigation and animations.  

---

## 💻 **Tech Stack**  

- **Frontend Framework:** Next.js (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **State Management:** React Context API  
- **Authentication:** Clerk  
- **Data Fetching:** Axios  

---

## 📂 **Folder Structure**  

```plaintext
frontend/
├── app/                 # Next.js App Router structure
│   ├── layout.tsx       # Main layout file
│   ├── page.tsx         # Home Page
│   ├── query/           # Query-specific pages
│   │   ├── page.tsx     # Query results page
│   ├── health-check/    # Health check input & result pages
│   │   ├── page.tsx     # Health Check page
│   ├── pitch-deck/      # Pitch deck generator pages
│   │   ├── page.tsx     # Pitch Deck page
│   ├── components/      # Reusable UI components
│   │   ├── SearchBar.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── QueryHistory.tsx
│   │   ├── HealthCheckForm.tsx
│   │   ├── PitchDeckForm.tsx
│   ├── utils/           # Utility functions
│   │   ├── api.ts       # API handler with Axios
│   ├── styles/          # Global CSS
│   │   ├── globals.css
│   ├── public/          # Static assets
├── .env.local           # Environment variables
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

---


Let’s revolutionize the startup world with AI-powered tools! 🚀✨
