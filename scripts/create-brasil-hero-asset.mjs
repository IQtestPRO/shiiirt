import { chromium } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const outPath = path.join(ROOT, "public", "assets", "hero-brasil-copa-2026-premium.png");
const frontPath = path.join(
  ROOT,
  "public",
  "assets",
  "products",
  "ct-002",
  "ct-002__camisa-brasil-i-2026-amarela__front__public-reference__v1.jpg"
);
const backPath = path.join(
  ROOT,
  "public",
  "assets",
  "products",
  "ct-002",
  "ct-002__camisa-brasil-i-2026-amarela__back__public-reference__v1.jpg"
);

function dataUrl(buffer, mime = "image/jpeg") {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

const [frontBuffer, backBuffer] = await Promise.all([readFile(frontPath), readFile(backPath)]);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 720 }, deviceScaleFactor: 1 });

const imageData = await page.evaluate(
  async ({ frontUrl, backUrl }) => {
    const W = 1920;
    const H = 720;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    function load(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }

    function roundedRect(context, x, y, w, h, r) {
      context.beginPath();
      context.moveTo(x + r, y);
      context.arcTo(x + w, y, x + w, y + h, r);
      context.arcTo(x + w, y + h, x, y + h, r);
      context.arcTo(x, y + h, x, y, r);
      context.arcTo(x, y, x + w, y, r);
      context.closePath();
    }

    function cutOut(img) {
      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const cctx = c.getContext("2d", { willReadFrequently: true });
      cctx.drawImage(img, 0, 0);
      const data = cctx.getImageData(0, 0, c.width, c.height);
      const width = c.width;
      const height = c.height;
      const marked = new Uint8Array(width * height);
      const queue = [];

      function isBackdrop(pixelIndex) {
        const offset = pixelIndex * 4;
        const r = data.data[offset];
        const g = data.data[offset + 1];
        const b = data.data[offset + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max - min;
        return r > 188 && g > 188 && b > 188 && saturation < 72;
      }

      function enqueue(x, y) {
        if (x < 0 || y < 0 || x >= width || y >= height) return;
        const pixelIndex = y * width + x;
        if (marked[pixelIndex] || !isBackdrop(pixelIndex)) return;
        marked[pixelIndex] = 1;
        queue.push(pixelIndex);
      }

      for (let x = 0; x < width; x += 1) {
        enqueue(x, 0);
        enqueue(x, height - 1);
      }
      for (let y = 0; y < height; y += 1) {
        enqueue(0, y);
        enqueue(width - 1, y);
      }

      for (let head = 0; head < queue.length; head += 1) {
        const pixelIndex = queue[head];
        const x = pixelIndex % width;
        const y = Math.floor(pixelIndex / width);
        enqueue(x + 1, y);
        enqueue(x - 1, y);
        enqueue(x, y + 1);
        enqueue(x, y - 1);
      }

      for (let i = 0; i < data.data.length; i += 4) {
        const pixelIndex = i / 4;
        if (marked[pixelIndex]) {
          data.data[i + 3] = 0;
        }
      }

      cctx.putImageData(data, 0, 0);
      return c;
    }

    function drawCutout(img, x, y, w, h, opacity = 1) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
      ctx.shadowBlur = 38;
      ctx.shadowOffsetY = 26;
      ctx.drawImage(img, x, y, w, h);
      ctx.restore();
    }

    const [front, back] = await Promise.all([load(frontUrl), load(backUrl)]);
    const frontCut = cutOut(front);
    const backCut = cutOut(back);

    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#04122d");
    bg.addColorStop(0.42, "#063a86");
    bg.addColorStop(0.66, "#0b4faf");
    bg.addColorStop(1, "#061934");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    const field = ctx.createLinearGradient(0, H * 0.74, W, H);
    field.addColorStop(0, "rgba(46,159,91,0.55)");
    field.addColorStop(0.55, "rgba(19,95,67,0.36)");
    field.addColorStop(1, "rgba(6,25,52,0)");
    ctx.fillStyle = field;
    ctx.fillRect(0, H * 0.62, W, H * 0.38);

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    for (let i = -5; i < 10; i += 1) {
      ctx.strokeStyle = i % 2 === 0 ? "rgba(246,211,74,0.16)" : "rgba(255,255,255,0.08)";
      ctx.lineWidth = i % 2 === 0 ? 8 : 3;
      ctx.beginPath();
      ctx.moveTo(i * 190, H + 40);
      ctx.lineTo(i * 190 + 760, -40);
      ctx.stroke();
    }
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    const beam = ctx.createLinearGradient(620, 0, 1440, H);
    beam.addColorStop(0, "rgba(255,255,255,0.34)");
    beam.addColorStop(0.34, "rgba(246,211,74,0.10)");
    beam.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = beam;
    ctx.beginPath();
    ctx.moveTo(740, 0);
    ctx.lineTo(1120, 0);
    ctx.lineTo(1660, H);
    ctx.lineTo(960, H);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 4;
    roundedRect(ctx, 90, 82, 730, 560, 28);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "rgba(246,211,74,0.18)";
    ctx.beginPath();
    ctx.moveTo(80, 636);
    ctx.lineTo(680, 636);
    ctx.lineTo(580, 720);
    ctx.lineTo(0, 720);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgba(46,159,91,0.24)";
    ctx.beginPath();
    ctx.moveTo(360, 0);
    ctx.lineTo(880, 0);
    ctx.lineTo(780, 104);
    ctx.lineTo(260, 104);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    drawCutout(backCut, 66, 118, 470, 470, 0.54);
    drawCutout(frontCut, 310, 34, 676, 676, 1);

    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(4, 18, 45, 0.54)";
    ctx.fillRect(1120, 0, 800, H);
    const rightFade = ctx.createLinearGradient(860, 0, 1220, 0);
    rightFade.addColorStop(0, "rgba(4,18,45,0)");
    rightFade.addColorStop(1, "rgba(4,18,45,0.54)");
    ctx.fillStyle = rightFade;
    ctx.fillRect(860, 0, 420, H);
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.86)";
    for (let x = 1180; x < 1810; x += 52) {
      ctx.fillRect(x, 82, 28, 5);
    }
    ctx.fillStyle = "rgba(246,211,74,0.95)";
    ctx.fillRect(1220, 104, 190, 6);
    ctx.fillStyle = "rgba(46,159,91,0.9)";
    ctx.fillRect(1426, 104, 120, 6);
    ctx.restore();

    return canvas.toDataURL("image/png");
  },
  {
    frontUrl: dataUrl(frontBuffer),
    backUrl: dataUrl(backBuffer)
  }
);

await browser.close();
await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, Buffer.from(imageData.split(",")[1], "base64"));
console.log(outPath);
