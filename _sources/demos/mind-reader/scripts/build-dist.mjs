import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const distDir = join(root, "dist");

// Recreate dist from scratch so stale files never leak into deploys.
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

execSync(
  "npx javascript-obfuscator sketch.js --output dist/sketch.js --config obfuscator.config.json",
  { stdio: "inherit", cwd: root, shell: true }
);

copyFileSync(join(root, "index.html"), join(distDir, "index.html"));
copyFileSync(join(root, "style.css"), join(distDir, "style.css"));

if (existsSync(join(root, "libraries"))) {
  cpSync(join(root, "libraries"), join(distDir, "libraries"), { recursive: true });
}

console.log("Dist build complete: dist/");
