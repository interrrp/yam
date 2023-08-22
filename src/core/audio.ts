import { join } from "std/path/mod.ts";
import { ffmpeg } from "ffmpeg";
import { AUDIO_DIR, FFMPEG_DIR } from "../config.ts";
import downloadVideo from "./video.ts";
import { fileExists } from "../utils.ts";

export default async function downloadAudio(id: string): Promise<string> {
  const path = join(AUDIO_DIR, `${id}.mp3`);
  if (await fileExists(path)) {
    // Audio already exists, no need to download it again
    return path;
  }

  const videoPath = await downloadVideo(id);

  await ffmpeg({ ffmpegDir: FFMPEG_DIR })
    .addInput(videoPath)
    .noVideo()
    .save(path);

  return path;
}
