
## `01 // OVERVIEW`

**`gregoosec`** is the official engineering and security portfolio of **Gregory G. Machiwa** (`@gregootz`), Full-Stack Developer at **Heptacorenet Technologies**. Built as a high-performance Single Page Application (SPA), it showcases active operations across **full-stack software architecture**, **digital forensics**, **penetration testing**, and **defensive infrastructure engineering**.

* **Production Endpoint:** [https://gregoosec.heptacorenet.co.tz](https://gregoosec.heptacorenet.co.tz)
* **Design System:** Dark-mode cyber aesthetic with modular component primitives (`shadcn/ui`) and utility-first responsive styling.

---

## `02 // TECH_STACK_&_TOOLING`

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | React, TypeScript (`tsconfig.app.json`), Vite (`vite.config.ts`) |
| **Styling & UI** | Tailwind CSS (`tailwind.config.ts`), PostCSS, `shadcn/ui` (`components.json`) |
| **Package Management** | Bun (`bun.lock` / `bun.lockb`) & npm (`package-lock.json`) |
| **Testing & QA** | Vitest (`vitest.config.ts`), Playwright E2E (`playwright.config.ts`), ESLint |
| **Automation** | GitHub Actions CI/CD (`.github/workflows`) |

---

## `03 // REPOSITORY_ARCHITECTURE`

```text
gregoosec/
├── .github/workflows/      # CI/CD build, lint, and deployment pipelines
├── public/                 # Static assets, favicons, and SEO metadata
├── src/                    # Application source code (components, pages, hooks, styles)
├── tests/                  # Automated unit and end-to-end test suites
├── components.json         # shadcn/ui component registry configuration
├── eslint.config.js        # Static code analysis and linting rules
├── index.html              # SPA entry template
├── playwright.config.ts    # End-to-end browser test configuration
├── playwright-fixture.ts   # Custom Playwright test fixtures
├── tailwind.config.ts      # Design tokens, color palette, and theme extensions
├── vite.config.ts          # Vite bundler and dev-server configuration
└── vitest.config.ts        # Unit test runner configuration
