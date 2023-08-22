import Controller from "./controller.ts";
import downloadAudio from "../core/audio.ts";
import { CACHE } from "../config.ts";
import logger from "../logger.ts";

export default <Controller> {
  path: "/audio",
  get: async (ctx) => {
    const videoId = ctx.request.url.searchParams.get("v");
    if (!videoId) {
      ctx.response.status = 400;
      ctx.response.body = { error: "No video ID provided (v query parameter)" };
      return;
    }

    logger.info(`Received request for audio ${videoId}`);

    const audioPath = await downloadAudio(videoId);
    ctx.response.headers.set(
      "Content-Disposition",
      `inline; filename="${videoId}.mp3"`,
    );
    await ctx.send({ root: ".", path: audioPath });

    if (!CACHE) {
      logger.info(`Removing audio ${videoId}`);
      await Deno.remove(audioPath);
    }
  },
};
