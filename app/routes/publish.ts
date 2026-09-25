type Source = typeof import("studyluma/src/milestone/routes/publish");
export async function action(args: Parameters<Source["action"]>[0]) {
  return (await import("studyluma/src/milestone/routes/publish")).action(args);
}
