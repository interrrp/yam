import Controller from "./controller.ts";
import downloadVideo from "../core/video.ts";
import { CACHE } from "../config.ts";
import logger from "../logger.ts";

export default <Controller> {
  path: "/video",
  get: async (ctx) => {
    const videoId = ctx.request.url.searchParams.get("v");
    if (!videoId) {
      ctx.response.status = 400;
      ctx.response.body = { error: "No video ID provided (v query parameter)" };
      return;
    }

    const videoPath = await downloadVideo(videoId);
    ctx.response.headers.set(
      "Content-Disposition",
      `inline; filename="${videoId}.mp4"`,
    );
    await ctx.send({ root: ".", path: videoPath });

    if (!CACHE) {
      logger.info(`Removing video ${videoId}`);
      await Deno.remove(videoPath);
    }
  },
};
