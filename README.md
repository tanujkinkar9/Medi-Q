# Medi-Q
A clinic queue management system that replaces paper tokens and phone-call chaos with a simple digital queue — patients join remotely or via QR code, get a live token, and track their status in real time. Staff (doctors, receptionists, admins) manage the flow from a dashboard.

Tech Stack

Frontend: React (Vite) + React Router + Tailwind CSS + Axios Backend: Node.js + Express Database: MongoDB (via Mongoose), hosted on MongoDB Atlas Auth: bcrypt for password hashing (JWT-based route protection planned)

Project Structure
Medi-Q/
├── client/                 # React frontend (Vite)
│   └── src/
│       ├── pages/
│       │   ├── patient/    # Landing, JoinQueue, WaitingBoard, CreateAccount
│       │   ├── staff/      # Login, Doctor, Receptionist
│       │   └── admin/      # StaffManagement
│       └── components/     # Shared components (Sidebar, etc.)
│
└── server/                 # Express backend
    ├── models/             # User.js, Queue.js
    ├── controllers/        # authController.js, queueController.js
    ├── routes/             # authRoutes.js, queueRoutes.js
    ├── config/
    ├── middleware/
    ├── socket/              # (reserved for future real-time updates)
    └── index.js             # server entry point
Features Built So Far
Staff Login — role-based (Doctor / Receptionist / Admin), passwords hashed with bcrypt, verified against MongoDB on login
Guest Queue Join — patients join with just name + phone, no account needed; backend generates a sequential token (MQ-001, MQ-002, ...)
Live Waiting Board — patients see their token and the full live queue, fetched from the database
Receptionist Dashboard — live queue table with a "Mark as Done" action per patient, updates the database and removes the patient from the active list
Doctor Dashboard — shows the current patient (first in queue) and an "Up Next" list of the rest; "Call Next" / "Done" mark the current patient's status and advance the queue
Known Limitations (by design, for now)
Queue list refreshes only on page load / manual refresh — no live auto-update yet (polling or websockets planned; a socket/ folder is reserved for this)
Token numbers are generated from a simple document count — can produce duplicate tokens under concurrent joins; needs a more robust counter later
No multi-clinic support yet — all data is in a single shared database (a clinicId-based multi-tenant design is planned before onboarding multiple clinics)
No JWT/session protection on staff routes yet — anyone with the URL can currently reach dashboard pages regardless of login state
Patient-facing fields shown on staff dashboards (age, visit reason, diagnosis tags, etc.) are placeholder UI only — not yet backed by real data fields
Local Setup
Backend
powershell
cd server
npm install
node index.js

Runs on http://localhost:5000. Requires a .env file with:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
Frontend
powershell
cd client
npm install
npm run dev

Runs on http://localhost:5173 (default Vite port).

API Reference (current)
Method	Route	Purpose
POST	/api/auth/register	Create a staff account (name, email, password, role)
POST	/api/auth/login	Staff login (email, password, role)
POST	/api/queue/join	Guest joins the queue (name, phone) → returns a token
GET	/api/queue/list	Get all patients with status: waiting
PUT	/api/queue/done/:id	Mark a patient's status as done
Next Steps
Fix duplicate-token edge case in token generation
Add live/auto-refreshing queue view (polling or Socket.io)
Add JWT-based auth protection on staff/admin routes
Design and implement clinicId-based multi-tenancy before onboarding real clinics
Decide on data residency model (cloud vs. local-per-clinic deployment) before go-to-mar
