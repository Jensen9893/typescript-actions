import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run(): Promise<void> {
  try {
    // Get inputs
    const imageName = core.getInput('image-name', { required: true });
    const tag = core.getInput('tag', { required: true });
    const push = core.getInput('push') === 'true';
    const registry = core.getInput('registry');
    const username = core.getInput('username');
    const password = core.getInput('password');

    // Construct image reference
    const imageRef = registry ? `${registry}/${imageName}:${tag}` : `${imageName}:${tag}`;

    // Build Docker image
    core.info(`Building Docker image: ${imageRef}`);
    await exec.exec('docker', ['build', '-t', imageRef, '.']);

    // Push to registry if enabled
    if (push) {
      if (!username || !password || !registry) {
        core.setFailed('Registry, username, and password are required to push');
        return;
      }

      // Login to registry
      core.info(`Logging into ${registry}`);
      await exec.exec('docker', ['login', '-u', username, '--password-stdin', registry], {
        input: Buffer.from(password),
      });

      // Push image
      core.info(`Pushing image: ${imageRef}`);
      await exec.exec('docker', ['push', imageRef]);
    }

    core.setOutput('image', imageRef);
  } catch (error) {
    core.setFailed(`Action failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

run();