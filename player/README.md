Safari requires `video.currentTime += parseFloat(this.dataset.skip)` for skip to work.

`video.webkitEnterFullscreen()` for Safari as opposed to https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API. It adds handlers for ESC and a little player control overlay.
