function new2dCanvas(id, width, height) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  return [canvas, ctx];
}

const [canvas, ctx] = new2dCanvas("play-area", 600, 600);

const FPS = 60;
const settings = {
  fps: FPS,
  fpsInterval: 1000 / FPS,
};

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(canvas.width / 2, canvas.height / 2, 100, 100);
}

let stop = false,
  now,
  lastFrame;

(function startAnimating() {
  lastFrame = window.performance.now();
  animate();
})();

function animate(newtime) {
  if (stop) return;
  requestAnimationFrame(animate);
  now = newtime;
  const elapsed = now - lastFrame;
  if (elapsed > settings.fpsInterval) {
    lastFrame = now - (elapsed % settings.fpsInterval);
    update();
  }
}
