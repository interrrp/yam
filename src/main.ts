import { Application, Router } from "oak";

import { HOST, PORT } from "./config.ts";
import { registerController } from "./controller/controller.ts";
import videoController from "./controller/video.ts";
import audioController from "./controller/audio.ts";

const app = new Application();
const router = new Router();

registerController(videoController, router);
registerController(audioController, router);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ hostname: HOST, port: PORT });
