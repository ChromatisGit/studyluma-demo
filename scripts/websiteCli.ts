import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const command = process.argv[2];
const websitePath = dirname(
  fileURLToPath(import.meta.resolve("studyluma/package.json")),
);
const commands: Record<string, string[]> = {
  "db:provision": [
    "bun",
    "run",
    fileURLToPath(import.meta.resolve("studyluma/setup/provision-roles")),
  ],
  "db:apply": ["bun", "run", "db", "apply"],
  seed: [
    "bun",
    "run",
    fileURLToPath(import.meta.resolve("studyluma/setup/seed")),
  ],
};
const args = command ? commands[command] : undefined;
if (!args) {
  throw new Error(`Unknown Website setup command: ${command ?? ""}`);
}
const processHandle = Bun.spawn(args, {
  cwd: websitePath,
  env: process.env,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});
process.exit(await processHandle.exited);
