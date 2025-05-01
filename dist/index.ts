"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
async function run() {
  try {
    const name = core.getInput("name", { required: true });
    const greeting = `Hello, ${name}! Welcome to GitHub Actions!`;
    core.info(greeting);
    core.setOutput("greeting", greeting);
  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
  }
}
run();