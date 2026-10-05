# E-commerce

This repository contains two separate applications:

- `frontend/`: the existing React + Vite application.
- `backend/`: reserved for the Java + Spring Boot + PostgreSQL application.

## Frontend development

```sh
cd frontend
npm ci
npm run dev
```

The frontend continues to use the existing Workintech API by default. To point it at another backend, set `VITE_API_BASE_URL` in `frontend/.env.local` (see `frontend/.env.example`). Do not put secrets in a `VITE_` variable: it is exposed to the browser.

The Vercel project's Root Directory must be set to `frontend` before deploying this layout. The SPA rewrite configuration is in `frontend/vercel.json`.

`docs/` is intentionally ignored by Git; create it locally if it is missing after a fresh clone.
