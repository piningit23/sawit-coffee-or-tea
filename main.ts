// One Letter: Coffee or Tea — entry program.
// Writes exactly one letter, "A" (coffee), to /output/entry.txt.
// No explanation, no punctuation, no trailing newline: the gate requires
// UTF-8 text of exactly 1 character.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const LETTER = "A"; // A = coffee

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");

// Self-check: the gate requires exactly 1 character, nothing else.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== LETTER || written.length !== 1) {
  throw new Error(`entry.txt must hold exactly one letter, got ${written.length} chars`);
}
