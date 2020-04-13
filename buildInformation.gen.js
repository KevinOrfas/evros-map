const util = require("util");
const childProcess = require("child_process");

const exec = util.promisify(childProcess.exec);

async function captureBuildInformation() {
  const { stdout } = await exec("git rev-parse HEAD");
  const compiledAt = new Date().toISOString();
  const commitSha = stdout.replace("\n", "");

  return {
    code: `export const compiledAt = ${compiledAt}; export const commitSha = ${commitSha};`,
  };
}

module.exports = captureBuildInformation;
