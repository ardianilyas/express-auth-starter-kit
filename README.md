# Express TS Better-auth starter kit

A modern backend boilerplate using **Express.js**, **TypeScript**, **Better Auth**, and **Drizzle ORM** with PostgreSQL.

## 🛠️ Tech Stack

- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Better Auth](https://better-auth.com/)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Testing**: [Vitest](https://vitest.dev/) & [Supertest](https://github.com/ladjs/supertest)
- **Runtime**: [Bun](https://bun.sh/)

## 📂 Project Structure

```text
.
├── drizzle/            # Generated database migrations
├── src/                # Application source code
│   ├── config/         # Environment variables and configurations
│   ├── db/             # Drizzle setup, schemas, and relations
│   ├── errors/         # Custom error classes (AppError, NotFound, etc.)
│   ├── lib/            # External library setup (e.g., Better Auth configuration)
│   ├── middlewares/    # Express middlewares (error handler, auth guard, roles)
│   ├── routes/         # Express router definitions
│   ├── shared/         # Shared utilities, constants, and types
│   └── server.ts       # Express application setup
├── tests/              # E2E and integration tests using Vitest
│   ├── helpers/        # Test utilities (db cleaner, auth helper)
│   ├── setup.ts        # Global test setup
│   └── *.test.ts       # Test files
├── drizzle.config.ts   # Drizzle ORM configuration
├── vitest.config.ts    # Vitest configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env` and fill in your details:
   ```bash
   cp .env.example .env
   ```

3. **Database Setup**
   Generate and push your database schema using Drizzle:
   ```bash
   bunx drizzle-kit generate
   bunx drizzle-kit push
   ```

4. **Run the server**
   Start the development server:
   ```bash
   bun run dev
   ```

5. **Run tests**
   Execute the test suite:
   ```bash
   bun test
   ```

## 🔐 Auth Routes (Better Auth)

By default, Better Auth exposes the following endpoints under `/api/auth`:

- **Sign In**: `POST /api/auth/sign-in/email`
- **Sign Up**: `POST /api/auth/sign-up/email`
- **Sign Out**: `POST /api/auth/sign-out`
- **Get Session**: `GET /api/auth/get-session`