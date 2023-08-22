import "std/dotenv/load.ts";

export const HOST = Deno.env.get("HOST") || "0.0.0.0";
export const PORT = Number(Deno.env.get("PORT")) || 4050;
export const FFMPEG_DIR = Deno.env.get("FFMPEG_DIR") || "ffmpeg";
export const VIDEO_DIR = Deno.env.get("VIDEO_DIR") || "videos";
export const AUDIO_DIR = Deno.env.get("AUDIO_DIR") || "audios";
export const CACHE = Deno.env.get("CACHE") === "true";
