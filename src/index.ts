import * as core from '@actions/core';

async function run() {
  try {
    const name = core.getInput('name', { required: true });
    const prefix = core.getInput('prefix')
    const greeting = ` ${prefix}, ${name}! Welcome to GitHub Actions!`;
    core.info(greeting);
    core.setOutput('greeting', greeting);
  } catch (error: unknown) {
    // Type guard to ensure error is an Error object
    const message = error instanceof Error ? error.message : String(error);
    core.setFailed(`Action failed: ${message}`);
  }
}

run();