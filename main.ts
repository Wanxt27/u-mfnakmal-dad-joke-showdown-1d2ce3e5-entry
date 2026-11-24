import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I volunteered to do the dishes tonight. My wife said, \"Don't rinse and repeat.\" I said, \"Fine — I'll just wash my hands of it.\"";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry length ${joke.length} is outside the 1..200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
