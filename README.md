# Areesha Farooq — Full Stack Portfolio

A modern, responsive portfolio website with a dark/light mode toggle,
scroll animations, and a working contact form backed by a real
Node.js + Express + MongoDB API.

## Tech Stack

**Frontend:** React (Vite) · Tailwind CSS · Framer Motion · react-icons
**Backend:** Node.js · Express.js · MongoDB (Mongoose)

## Folder Structure

```
portfolio/
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   │   ├── context/         # ThemeContext (dark/light mode)
│   │   ├── data/            # Dummy skills & projects data — edit these!
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
├── backend/                 # Express + MongoDB API
│   ├── models/Message.js    # Mongoose schema for contact messages
│   ├── routes/contact.js    # POST /api/contact, GET /api/contact
│   ├── server.js
│   └── package.json
└── README.md
```

## 1. Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, **or** a free
  [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (recommended for deployment)

## 2. Backend Setup

```cmd
cd backend
npm install
cp .env.example .env
# Edit .env if you're using MongoDB Atlas instead of a local database
npm run dev
```

The API will start on `http://localhost:5000`. Test it with:

```cmd
curl http://localhost:5000
# → "Portfolio API is running."
```

## 3. Frontend Setup

Open a **second terminal** (keep the backend running):

```cmd
cd frontend
npm install
cp .env.example .env
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 4. Customize It

- **Photo:** drop a real photo at `frontend/public/profile.jpg` (create the `public` folder if it doesn't exist).
- **Projects:** edit `frontend/src/data/projects.js`.
- **Skills:** edit `frontend/src/data/skills.js`.
- **Socials:** edit the links array in `frontend/src/components/Footer.jsx`.
- **Colors/fonts:** edit the design tokens in `frontend/tailwind.config.js`.

## 5. Deployment

- **Frontend:** deploy the `frontend` folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
  Run `npm run build` locally first to make sure it builds cleanly.
- **Backend:** deploy the `backend` folder to [Render](https://render.com) or [Railway](https://railway.app).
  Set `MONGO_URI` (your Atlas connection string) and `PORT` as environment variables there.
- After deploying the backend, update `VITE_API_URL` in the frontend's `.env`
  (or your host's environment variables) to point at the live backend URL, then redeploy the frontend.

## 6. How the Contact Form Works

1. User fills the form and clicks **Send Message**.
2. The frontend sends a `POST` request to `${VITE_API_URL}/api/contact`.
3. Express validates the fields and saves them to MongoDB via the `Message` model.
4. On success, the frontend shows a "✅ Message Sent!" toast for 3 seconds.

You can view all saved messages by visiting `http://localhost:5000/api/contact` while the backend is running.

---

Built by Areesha Farooq — CS student, Lahore, Pakistan.
