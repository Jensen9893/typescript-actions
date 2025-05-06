import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run() {
  try {
    // Run linting
    core.info('Running ESLint...');
    await exec.exec('npm', ['run', 'lint']);

    // Run tests
    core.info('Running Jest tests...');
    await exec.exec('npm', ['run', 'test']);

    core.info('Validation passed!');
    core.setOutput('validated', 'true');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    core.setFailed(`Validation failed: ${message}`);
  }
}

run();