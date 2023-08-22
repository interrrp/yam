# 🥔 Yam

> A YouTube video downloader

Yam is a web server that downloads YouTube videos. It can also download videos
as audio files.

## Starting the server

Prerequisites for running a Yam server:

- [Deno](https://deno.land/) 1.36.2 or higher
- [FFmpeg](https://ffmpeg.org/) 6.0 or higher

To start the server, clone and start the repository:

```sh
git clone https://github.com/interrrp/yam
cd yam
deno task start
```

## Usage - Bookmarks

Yam can be used as bookmarklets. To use Yam as a bookmarklet, create new
bookmarks and set their URLs to the following:

### Download video

```js
javascript:
window.location.href = window.location.href.replace(
  "https://www.youtube.com/watch",
  "http://localhost:4050/video",
);
```

### Download audio

```js
javascript:
window.location.href = window.location.href.replace(
  "https://www.youtube.com/watch",
  "http://localhost:4050/audio",
);
```

## Usage - API

Yam can also be used as an API. To use Yam as an API, send a `GET` request to
the following endpoints:

### Download video

```
http://localhost:4050/video?v=<YouTube video ID>
```

### Download audio

```
http://localhost:4050/audio?v=<YouTube video ID>
```

# License

Yam is licensed under [GPL-3.0](./LICENSE).
