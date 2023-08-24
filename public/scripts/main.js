const urlEl = document.getElementById("url");

function extractVideoId(url) {
  const match = url.match(/v=(.{11})/);
  return match ? match[1] : null;
}

// Will be called by button click handler defined in the HTML
// deno-lint-ignore no-unused-vars
function toVideo() {
  const url = urlEl.value;
  const videoId = extractVideoId(url);
  if (videoId) {
    window.location.href = `/video?v=${videoId}`;
  }
}

// Will be called by button click handler defined in the HTML
// deno-lint-ignore no-unused-vars
function toAudio() {
  const url = urlEl.value;
  const videoId = extractVideoId(url);
  if (videoId) {
    window.location.href = `/audio?v=${videoId}`;
  }
}
