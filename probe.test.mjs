// PROBE.md sammelt je Realprobe von szyOS eine Zeile „Realprobe JJJJ-MM-TT“; andere Inhalte gehören nicht hinein.
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

test("PROBE.md enthält nur Zeilen „Realprobe JJJJ-MM-TT“", () => {
  if (!existsSync("PROBE.md")) return;
  const lines = readFileSync("PROBE.md", "utf8").split(/\r?\n/).filter(Boolean);
  for (const line of lines) assert.match(line, /^Realprobe \d{4}-\d{2}-\d{2}$/);
});

test("PROBE.md endet mit „Realprobe 2026-10-24“", () => {
  const lines = readFileSync("PROBE.md", "utf8").split(/\r?\n/).filter(Boolean);
  assert.equal(lines.at(-1), "Realprobe 2026-10-24");
});
