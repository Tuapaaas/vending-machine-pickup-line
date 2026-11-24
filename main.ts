// Vending Machine Pickup Line — one line a vending machine would say to a
// passing human, written to /output/entry.txt. Gate: UTF-8, 1-200 chars,
// single non-blank line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Every coin you drop spins my coils, but you're the first thing I've ever wanted to give away for free.";

if (line.length < 1 || line.length > 200 || line.trim() !== line) {
  throw new Error(`line fails the gate (${line.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
