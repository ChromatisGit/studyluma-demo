type ActionSource = typeof import("studyluma/routes/publish");
export async function action(args: Parameters<ActionSource["action"]>[0]) {
  return (await import("studyluma/routes/publish")).action(args);
}
