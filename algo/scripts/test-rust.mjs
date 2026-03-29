/**
 * Runs `cargo test` from algo/. If cargo is missing, prints install hints and exits 1.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const algoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const result = spawnSync("cargo", ["test", "--manifest-path", "Cargo.toml"], {
  cwd: algoRoot,
  stdio: "inherit",
  shell: false,
});

if (result.error) {
  if (result.error.code === "ENOENT") {
    console.error(
      [
        "cargo: command not found.",
        "Install Rust (rustup): https://rustup.rs",
        "  macOS / Linux: curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
        "  Windows: use rustup-init.exe from that site, or: winget install Rustlang.Rustup",
        "Then open a new terminal and run: npm run test:rust",
      ].join("\n"),
    );
    process.exit(1);
  }
  throw result.error;
}

process.exit(result.status ?? 1);
