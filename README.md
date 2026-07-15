# LeaderLink

### CONNECT • LISTEN • DELIVER

> A civic-tech platform bringing transparency between citizens and their elected representatives.

---

## Overview

**LeaderLink** is a real SaaS platform (not a college project) built to bridge the gap between citizens and their elected legislative representatives in India. It allows citizens to:

- Find their local leader based on State → District → Constituency
- View a detailed profile of their leader
- Report civic issues (roads, water, electricity, etc.) directly to them
- Track the resolution progress of reported issues

The core mission of LeaderLink is **accountability and transparency** — making it easier for everyday citizens to know who represents them and to hold that representation accountable in a modern, accessible way.

LeaderLink is currently in **early-stage active development**, being built solo by a beginner developer learning by building in public.

---

## Design Philosophy

LeaderLink is deliberately designed to *not* look like a traditional, boring government portal. Instead, it follows a **modern SaaS aesthetic** inspired by products like **Stripe** and **Linear**:

- Glassmorphism cards
- Gradient buttons
- Dark navy background
- Orange, pink, and purple accent colors

The goal is to make civic engagement feel modern, trustworthy, and genuinely usable — not bureaucratic.

---

## Features

### ✅ Currently Working

- **Splash Screen** — Smooth fade-in animation on app load
- **Landing Page** — App branding with a clear call-to-action
- **Find Your Leader Tool** — Dropdown-based selection flow: State → District → Constituency
- **Real Election Data** — Actual 2024 Maharashtra Assembly election data for Dharashiv district, covering 4 constituencies: Umarga, Tuljapur, Osmanabad, and Paranda, with real leader names and party affiliations
- **Leader Profile Screen** — Displays photo (or initial-letter placeholder), name, party, and constituency details
- **Dashboard Tabs** — Three tabs on the profile screen: Issue Reporting, Achievements, and Ongoing Projects (currently placeholder content, to be made functional next)
- **Fully Responsive Design** — Optimized for mobile, tablet, and desktop

### 🚧 Planned / Not Yet Built

- Functional issue reporting (citizens submitting real complaints)
- User authentication (login / signup)
- User dashboard for tracking submitted issues
- Backend API and database integration
- Real leader photos for all constituencies (currently limited coverage)

---

## Tech Stack

| Layer      | Technology                          | Status         |
|------------|--------------------------------------|----------------|
| Frontend   | Next.js (App Router), TypeScript, Tailwind CSS | ✅ Built |
| Backend    | Node.js + Express (planned)          | 🚧 Not yet built |
| Database   | PostgreSQL (planned)                 | 🚧 Not yet built |

> **Current state:** LeaderLink is a frontend-only prototype using hardcoded/mock data. Backend and database integration are planned as the next major milestones.

---

## Getting Started

Follow these steps to run LeaderLink locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/leaderlink.git
   cd leaderlink
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the app**

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see LeaderLink running.

---

## Project Structure

LeaderLink follows the standard **Next.js App Router** structure.

```
leaderlink/
├── app/
│   ├── page.tsx        # Main application logic and UI (current prototype)
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── public/               # Static assets (images, icons)
└── ...
```

> **Note:** All application logic currently lives in a single file (`app/page.tsx`), using React's `useState` for screen navigation instead of formal routing. This is an intentional choice during the prototyping phase and will be refactored into a proper multi-page structure as the project grows.

---

## Roadmap

- [ ] Make Issue Reporting tab fully functional
- [ ] Build backend API with Node.js + Express
- [ ] Set up PostgreSQL database
- [ ] Implement user authentication (login/signup)
- [ ] Build a citizen dashboard to track submitted issues
- [ ] Expand constituency and leader data beyond Dharashiv district
- [ ] Add real leader photos across all constituencies
- [ ] Refactor single-file logic into proper routed pages/components

---

## Project Status

🔨 **Active development.** LeaderLink is being built solo, from the ground up, as a real-world learning project with the long-term goal of becoming a fully functional civic accountability platform. Expect frequent changes as new features are added.

---

## Contributing

This project is currently maintained solo, but feedback, suggestions, and ideas are always welcome. Feel free to open an issue if you'd like to discuss something.