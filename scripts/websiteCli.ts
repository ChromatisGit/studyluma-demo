import { resolve } from "node:path";

const allowed = new Set(["db:provision", "db:apply", "seed:milestone"]);
const command = process.argv[2];
if (!command || !allowed.has(command)) {
  throw new Error(`Unknown Website setup command: ${command ?? ""}`);
}

const websitePath = resolve(import.meta.dirname, "../node_modules/studyluma");
const processHandle = Bun.spawn(["bun", "run", command], {
  cwd: websitePath,
  env: process.env,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});
process.exit(await processHandle.exited);
