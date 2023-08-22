import { join } from "std/path/mod.ts";
import ytdl from "ytdl_core";
import { VIDEO_DIR } from "../config.ts";
import { fileExists } from "../utils.ts";
import logger from "../logger.ts";

export default async function downloadVideo(id: string): Promise<string> {
  const path = join(VIDEO_DIR, `${id}.mp4`);
  if (await fileExists(path)) {
    // Video already exists, no need to download it again
    logger.info(`Cache hit on video ${id}`);
    return path;
  }

  const stream = await ytdl(id);

  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  const video = new Blob(chunks, { type: "video/mp4" });
  await Deno.writeFile(path, new Uint8Array(await video.arrayBuffer()));

  return path;
}
