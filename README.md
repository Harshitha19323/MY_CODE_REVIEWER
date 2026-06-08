<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,20&height=180&section=header&text=CodeLens&fontSize=52&fontColor=fff&animation=twinkling&fontAlignY=32&desc=AI-Powered%20Code%20Review%20for%20Node.js%20%7C%20Powered%20by%20LLaMA%203.3%2070B%20%2B%20Groq&descAlignY=55&descSize=14)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=6BCB77&center=true&vCenter=true&width=700&lines=Paste+your+Node.js+code.+Get+instant+AI+review.;Issues+%E2%9A%A0%EF%B8%8F+%7C+Suggestions+%F0%9F%92%A1+%7C+Explanations+%F0%9F%93%96;Built+for+developers+who+want+to+debug+faster.;Powered+by+LLaMA+3.3+70B+via+Groq+API)](https://git.io/typing-svg)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Groq](https://img.shields.io/badge/Groq-F55036?style=for-the-badge&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

**Live Demo → [my-code-reviewer-1.onrender.com](https://my-code-reviewer-1.onrender.com)**

</div>

---

## 😤 The Problem

You wrote Node.js code. It's broken. You don't know why.

Here's what usually happens:

- **You stare at the error for 30 minutes** without knowing where to start
- **Stack Overflow answers are generic** — not specific to your code
- **You paste it into ChatGPT or Claude** — and get a wall of text back with no structure
- **You're a student or junior dev** — you need explanations, not just fixes

CodeLens gives you a **structured, instant code review** — issues, suggestions, and a plain-language explanation, every time, for any Node.js code you paste.

---

## 💡 But Wait — Why Not Just Use ChatGPT or Claude?

Great question. You *can* paste code into ChatGPT. But here's what actually happens:

| | ChatGPT / Claude | **CodeLens** |
|---|---|---|
| Response format | Unstructured wall of text | ✅ Structured: Issues / Suggestions / Explanation |
| Context needed | You have to write a good prompt | ✅ Just paste code — no prompting needed |
| Consistency | Different every time | ✅ Same structured output every review |
| Focused on Node.js | Generic for all languages | ✅ Optimized prompts for Node.js patterns |
| Built for students | No — built for everyone | ✅ Explanations written for learning, not just fixing |
| Deployment | You open a new tab every time | ✅ One URL, always ready |

> **The core difference:** ChatGPT is a conversation. CodeLens is a tool — purpose-built for one job, done consistently well.

This is the same reason developers use ESLint instead of asking an AI "is my code okay?" — **specialized tools beat general ones for focused tasks.**

---

## ✨ What You Get

| | Output | Description |
|---|---|---|
| ⚠️ | **Issues** | Bugs, errors, and broken logic identified in your code |
| 💡 | **Suggestions** | Improvements, best practices, and optimizations |
| 📖 | **Explanation** | Plain-language breakdown of what's wrong and why it matters |

---

## 🧠 How It Works

```
User pastes Node.js code
        ↓
Node.js backend receives the request
        ↓
Forwards to Python FastAPI AI service
        ↓
LLaMA 3.3 70B via Groq API analyzes the code
with a structured Node.js-specific review prompt
        ↓
Returns JSON: { issues[], suggestions[], explanation }
        ↓
Frontend renders results in 3 clean cards
```

No generic prompts. The AI service uses a structured prompt engineered specifically for Node.js code review — asking for issues, suggestions, and explanation as separate outputs every time.

---

## 🛠️ Tech Stack

```yaml
AI Model:     LLaMA 3.3 70B (via Groq API)
AI Service:   Python + FastAPI
Backend:      Node.js + Express.js
Frontend:     Vanilla HTML + CSS + JavaScript
Deployment:   Render (live)
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ installed
- Python 3.10+ installed
- Free Groq API key → [console.groq.com](https://console.groq.com) (2 min, no credit card)

### Step 1 — Clone the repo
```bash
git clone https://github.com/Harshitha19323/MY_CODE_REVIEWER.git
cd MY_CODE_REVIEWER
```

### Step 2 — Set up the AI service
```bash
cd ai-service
pip install -r requirements.txt
```

Create a `.env` file inside `ai-service/`:
```
GROQ_API_KEY=your_groq_key_here
```

Start the AI service:
```bash
uvicorn main:app --reload --port 8001
```

### Step 3 — Set up the backend
```bash
cd ../Backend
npm install
npm start
```

### Step 4 — Open in browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
MY_CODE_REVIEWER/
├── Backend/              # Node.js + Express server
│   ├── routes/
│   │   └── review.routes.js
│   └── app.js
├── ai-service/           # Python FastAPI — LLM inference via Groq
│   ├── main.py
│   └── requirements.txt
├── index.html            # Frontend UI
├── package.json
└── .gitignore
```

---

## 🌐 Live Demo

**[https://my-code-reviewer-1.onrender.com](https://my-code-reviewer-1.onrender.com)**

> Note: Hosted on Render free tier — first load after inactivity may take 30–50 seconds to wake up.

---

## 💬 Built From Real Mentoring Experience

This project was built after **25+ mentoring sessions** with backend development students. The most common pain point: students knew *something* was wrong but couldn't identify *what* or *why*.

CodeLens was designed to give students the structured feedback a mentor would give — not just "here's the fix" but "here's what's wrong, here's why it matters, here's how to think about it."

---

## 🌐 Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Harshitha19323)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Harshitha19323)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pulipakala.harshitha09@gmail.com)

</div>

---

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,20&height=120&section=footer)

</div>
