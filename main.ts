import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "My fridge hums all night like it pays the rent, but the ice maker quit in 2019 and the light only flickers on to judge my 2 a.m. snack raids.";

if (line.length > MAX_CHARS || line.includes("\n")) {
  throw new Error(
    `Roast line must be a single line of at most ${MAX_CHARS} characters (got ${line.length}).`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
