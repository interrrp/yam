import { Context } from "oak";
import logger from "../logger.ts";

export default async function requestLogger(
  ctx: Context,
  // deno-lint-ignore no-explicit-any
  next: any,
): Promise<void> {
  logger.info(`${ctx.request.method} ${ctx.request.url}`);
  await next();
}
