import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My fridge hums all night like it pays the rent, yet the ice maker quit in 2019 and the light only works when it feels appreciated.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
