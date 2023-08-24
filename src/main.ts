import { Application, Router } from "oak";
import { oakCors } from "cors";
import { AUDIO_DIR, HOST, PORT, VIDEO_DIR } from "./config.ts";
import { registerController } from "./controller/controller.ts";
import videoController from "./controller/video.ts";
import audioController from "./controller/audio.ts";
import logger from "./logger.ts";
import { fileExists } from "./utils.ts";
import requestLogger from "./middleware/req_logger.ts";

if (!await fileExists(VIDEO_DIR)) {
  logger.info("Creating video directory");
  await Deno.mkdir(VIDEO_DIR);
}
if (!await fileExists(AUDIO_DIR)) {
  logger.info("Creating audio directory");
  await Deno.mkdir(AUDIO_DIR);
}

const app = new Application();
const router = new Router();

registerController(videoController, router);
registerController(audioController, router);

app.use(oakCors());

app.use(requestLogger);

app.use(router.routes());
app.use(router.allowedMethods());

logger.info(`Listening on http://${HOST}:${PORT}`);
await app.listen({ hostname: HOST, port: PORT });
