# E-commerce

A responsive e-commerce application built for educational purposes as part of a bootcamp project. It focuses on React component design, state management, REST API integration, and shopping and checkout flows.

The interface is based on Figma designs, and development tasks are organized and tracked using a Kanban board.

## Project status

**In progress.** The frontend currently uses the Workintech API and includes the main shopping and order flows. A custom backend using **Java, Spring Boot, and PostgreSQL** is planned; the `backend/` directory is currently a placeholder.

Checkout submits orders to the educational API. A real payment provider is not integrated.

## Technologies

- **React and JavaScript** — component-based user interface.
- **Vite** — development server and production builds.
- **Tailwind CSS** — styling and responsive layouts.
- **Vanilla Redux, React Redux, Redux Thunk, and Redux Logger** — shared state, asynchronous actions, and development logging.
- **React Router v5** — navigation, dynamic product routes, and protected routes.
- **Axios** — REST API requests.
- **React Hook Form** — form handling and validation.
- **Swiper, Lucide React, React Icons, React Toastify, and React Gravatar** — sliders, icons, notifications, and user avatars.
- **ESLint** — code linting.

## Features

- Responsive layouts with mobile hamburger navigation.
- Category navigation, product listing, and product detail pages.
- Debounced product search, category filtering, price/rating sorting, and pagination.
- Grid and list views with product ratings, sold counts, and prices.
- Shopping cart with a header dropdown, quantity controls, item selection, and order summaries.
- Customer/store registration, login, Remember Me, and token verification on app startup.
- Protected checkout and order history pages.
- Shipping and invoice address selection, with address creation, editing, and deletion.
- Saved card selection and card creation, editing, and deletion for the demo checkout.
- Order submission, success/error notifications, cart reset after a successful order, and order history with expandable details.

## Repository structure

```text
frontend/   React application
backend/    Placeholder for the planned Spring Boot application
docs/       Local project documentation (ignored by Git)
```

The frontend keeps pages, reusable components, layouts, Redux actions/reducers, API services, hooks, and utilities in separate directories under `frontend/src/`.

## Run locally

Install Node.js and npm, then run:

```sh
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite.

### API configuration

The default API is `https://workintech-fe-ecommerce.onrender.com`. To use a different backend, create `frontend/.env.local` using `frontend/.env.example` as a reference:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Restart the development server after changing this value.

### Available commands

Run these commands from `frontend/`:

```sh
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Deployment

For a Vercel deployment, set the project's **Root Directory** to `frontend`. The SPA rewrite configuration is included in `frontend/vercel.json`.
