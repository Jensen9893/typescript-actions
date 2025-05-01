# GitHub Actions TypeScript Example

A simple GitHub Action written in TypeScript that greets a user.

## Setup
1. Ensure Node.js is installed.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to compile TypeScript to `dist/`.
4. Push to GitHub to trigger the workflow.

## Workflow
- The workflow (`greet.yml`) runs on push.
- It takes a `name` input and outputs a greeting.

## Testing Locally
- Modify `src/index.ts` for changes.
- Run `npm run build` to update `dist/index.js`.
- Commit and push to test on GitHub.