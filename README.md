# Inventory & Order Tracking MVP

## Daily Progress Log

### Day 0 — Environment Bootstrap
- Installed and verified toolchain on Ubuntu: Docker, Docker Compose, Azure CLI, kubectl, Helm, Terraform, Node.js, Python, Cloud Foundry CLI.
- Configured SSD/HDD split: OS + tools + active dev on SSD, bulk storage + Docker images + backups on HDD (`/data`).
- Verified everything with `docker run hello-world`, `az version`, `kubectl version`, etc.
- Firewall baseline set up (22, 80, 443 open).

### Day 1 — Orientation & Linux Basics
- Practiced file operations, permissions (`chmod`, `chown`), process inspection (`ps aux`, `top`), and man pages.
- Repo scaffold created at `/data/cloudsap/inventory-saas` with folders: `infra/`, `api/`, `frontend/`, `docs/`.
- Added `README.md` and initial `ARCHITECTURE.md` outlining backend (Node.js API), database (SAP HANA Cloud), frontend (React), infra (Azure + Terraform), observability (Azure Monitor + OTEL).
- Committed and pushed scaffold to GitHub.

### Day 2 — First Running Service
- Built first Node.js API service in `/api` with Express + Morgan.
- Endpoints implemented:
  - `GET /health` → `{ "status": "ok", "service": "inventory-api" }`
  - `GET /` → `{ "ok": true, "service": "inventory-api", "time": "..." }`
- Logging enabled for startup and each request.
- Verified service runs locally (`curl http://localhost:3000/health`) and produces logs.
- Committed code and added Day-2 status note in `docs/day2.md`.

