import * as core from '@actions/core';
import * as fs from 'fs';

async function run() {
  try {
    const filePath = core.getInput('file-path', { required: true });
    if (fs.existsSync(filePath)) {
      core.info(`File ${filePath} exists!`);
      core.setOutput('exists', 'true');
    } else {
      core.setFailed(`File ${filePath} does not exist.`);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    core.setFailed(`Action failed: ${message}`);
  }
}

run();