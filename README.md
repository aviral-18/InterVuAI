# InterVuAI 

> An AI-powered mock interview platform that generates role-specific interview questions, records your spoken answers, and returns instant AI feedback and scoring.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)
![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white)
[![CI](https://github.com/aviral-18/InterVuAI/actions/workflows/ci.yml/badge.svg)](https://github.com/aviral-18/InterVuAI/actions/workflows/ci.yml)

---

##  Overview

**InterVuAI** helps you prepare for job interviews by simulating a real interview
experience. You describe the role, tech stack, and years of experience; the app uses
**Google Gemini** to generate tailored questions. You answer out loud using your
webcam and microphone, and the platform transcribes your responses and produces
AI-generated feedback, a rating, and suggested improvements — all saved to your
account so you can track your progress over time.

##  Features

-  **Authentication** — email/social sign-in powered by [Clerk](https://clerk.com/)
-  **AI question generation** — role/stack/experience-aware questions via Google Gemini
-  **Webcam + speech-to-text answering** — record spoken answers in the browser
-  **Instant AI feedback** — per-question rating, feedback, and model answers
-  **Interview history** — revisit past interviews and feedback from your dashboard
-  **Pricing / upgrade pages** — plan presentation scaffold
-  **Modern UI** — Tailwind CSS, Radix UI, shadcn/ui components, and Magic UI animations

##  Tech Stack

| Layer          | Technology                                              |
| -------------- | ------------------------------------------------------- |
| Framework      | [Next.js 14](https://nextjs.org/) (App Router)          |
| Language       | JavaScript / TypeScript                                 |
| Authentication | [Clerk](https://clerk.com/)                             |
| AI             | [Google Generative AI (Gemini)](https://ai.google.dev/) |
| Database       | [MongoDB](https://www.mongodb.com/) via Mongoose        |
| Styling        | Tailwind CSS, Radix UI, shadcn/ui, Magic UI             |
| Media          | react-webcam, react-hook-speech-to-text                 |

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18.18+ (LTS recommended)
- A [MongoDB](https://www.mongodb.com/atlas) connection string
- A [Clerk](https://dashboard.clerk.com/) application (publishable + secret keys)
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aviral-18/InterVuAI.git
cd InterVuAI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your own credentials:

```bash
cp .env.example .env.local
```

See [Environment Variables](#-environment-variables) below for details.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the following values:

| Variable                                | Required | Description                                                     |
| --------------------------------------- | :------: | --------------------------------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`     |    ✅    | Clerk publishable key (`pk_...`)                                |
| `CLERK_SECRET_KEY`                      |    ✅    | Clerk secret key (`sk_...`)                                     |
| `MONGO_URI`                             |    ✅    | MongoDB connection string                                       |
| `NEXT_PUBLIC_GEMINI_API_KEY`            |    ✅    | Google Gemini API key                                           |
| `NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT`  |    ➖    | Number of questions to generate per interview (e.g. `5`)        |
| `NEXT_PUBLIC_INFORMATION`               |    ➖    | Informational text shown on the interview details page          |
| `NEXT_PUBLIC_QUESTION_NOTE`             |    ➖    | Note shown alongside interview questions                        |

> ⚠️ Never commit real secrets. `.env.local` is git-ignored by default.

## 📜 Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server             |
| `npm run build` | Create a production build                |
| `npm run start` | Run the production build                 |
| `npm run lint`  | Run Next.js/ESLint checks                |

## 🗂️ Project Structure

```
app/
  (auth)/           # Clerk sign-in / sign-up routes
  api/              # Route handlers (interviews, feedback)
  dashboard/        # Authenticated dashboard, interviews, feedback UI
  models/           # Mongoose models
  dbConfig/         # MongoDB connection helper
components/         # UI components (shadcn/ui, Magic UI)
lib/                # Shared utilities
utils/              # Gemini client / chat session
public/             # Static assets
```

## ☁️ Deployment

This app deploys cleanly to [Vercel](https://vercel.com/) (the recommended host for
Next.js). Import the repository, add the environment variables listed above in the
Vercel project settings, and deploy.

## 🙏 Acknowledgements

This repository is a personal copy created **with the explicit written permission of the
original author**.

- **Original project:** [`avinashk010/InterVuAI`](https://github.com/avinashk010/InterVuAI)
- **Original author:** [@avinashk010](https://github.com/avinashk010)
- **Original live demo:** <https://inter-vu-ai.vercel.app>

All credit for the original concept and implementation goes to the original author.
Please review the original repository for its terms before reusing this code.

## 📄 License

The original repository does not include an explicit open-source license file, so all
rights remain with the original author by default. This copy is maintained under the
permission granted by the author. If you wish to reuse this project, please contact the
original author for licensing terms.
