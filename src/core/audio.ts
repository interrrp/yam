import { join } from "std/path/mod.ts";
import { ffmpeg } from "ffmpeg";
import { AUDIO_DIR, FFMPEG_DIR } from "../config.ts";
import downloadVideo from "./video.ts";
import { fileExists } from "../utils.ts";
import logger from "../logger.ts";

export default async function downloadAudio(id: string): Promise<string> {
  const path = join(AUDIO_DIR, `${id}.mp3`);
  if (await fileExists(path)) {
    // Audio already exists, no need to download it again
    logger.info(`Cache hit on audio ${id}`);
    return path;
  }

  const videoPath = await downloadVideo(id, true);

  await ffmpeg({ ffmpegDir: FFMPEG_DIR })
    .addInput(videoPath)
    .noVideo()
    .save(path);

  await Deno.remove(videoPath);

  return path;
}
