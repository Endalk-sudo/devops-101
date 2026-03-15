# Mini Project

A simple Node.js project demonstrating CI/CD with GitHub Actions.

## Features

- `sum` function - adds two numbers together
- Unit tests with Jest
- Code linting with ESLint
- Automated CI/CD pipeline with GitHub Actions

## Getting Started

### Prerequisites

- Node.js 24.x or higher
- npm

### Installation

```bash
npm install
```

### Usage

```bash
# Run the sum function
node index.js

# Run tests
npm test

# Run linting
npm run lint
```

## Project Structure

```
.
├── index.js          # Main source code with sum function
├── index.test.js     # Jest unit tests
├── package.json      # Project dependencies and scripts
├── eslint.config.mjs # ESLint configuration
└── .github/
    └── workflows/
        └── ci.yaml   # GitHub Actions CI/CD workflow
```

## CI/CD Pipeline

This project uses GitHub Actions to automate:

1. Installing dependencies
2. Running ESLint
3. Running unit tests

The workflow runs on every push to the `main` branch.

## License

ISC
