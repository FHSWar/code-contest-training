/**
 * Runs unittest in each weekNN/<problem-dir>/ that contains test_*.py.
 * Hyphenated slugs (e.g. 704-binary-search) are not valid package names, so
 * `discover -s week01` alone finds 0 tests on Windows/Linux.
 */
import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const algoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

function hasTestPy(dir) {
  try {
    return readdirSync(dir).some(
      (f) => f.startsWith("test_") && f.endsWith(".py"),
    );
  } catch {
    return false;
  }
}

/** @returns {string[] | null} argv prefix e.g. ['py', '-3'] or ['python3'] */
function resolvePython() {
  const tries = [
    ["python3", []],
    ["python", []],
    ["py", ["-3"]],
  ];
  for (const [cmd, prefix] of tries) {
    const r = spawnSync(cmd, [...prefix, "--version"], {
      stdio: "pipe",
      shell: false,
    });
    if (r.status === 0 && !r.error) {
      return [cmd, ...prefix];
    }
  }
  return null;
}

const py = resolvePython();
if (!py) {
  console.error(
    "Python not found. Install Python 3 or ensure `python3`, `python`, or `py` is on PATH.",
  );
  process.exit(1);
}

const weekDirs = readdirSync(algoRoot).filter((name) => /^week\d+$/.test(name));
let failed = false;

for (const week of weekDirs) {
  const base = join(algoRoot, week);
  if (!statSync(base).isDirectory()) continue;

  for (const problem of readdirSync(base)) {
    const dir = join(base, problem);
    if (!statSync(dir).isDirectory()) continue;
    if (!hasTestPy(dir)) continue;

    const r = spawnSync(
      py[0],
      [
        ...py.slice(1),
        "-m",
        "unittest",
        "discover",
        "-s",
        dir,
        "-p",
        "test_*.py",
        "-v",
      ],
      { cwd: algoRoot, stdio: "inherit", shell: false },
    );
    if (r.status !== 0) {
      failed = true;
    }
  }
}

process.exit(failed ? 1 : 0);
