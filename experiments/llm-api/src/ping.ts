/**
 * 最小连通性探测：POST chat/completions 风格（与 OpenAI 兼容的常见形态）。
 * 环境变量从 process.cwd() 向上查找 .env 已由 dotenv 可选加载；此处用手动读 env 简化依赖。
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

function loadEnvFromAncestors(): void {
  let dir = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 6; i++) {
    const envPath = resolve(dir, ".env");
    if (existsSync(envPath)) {
      const raw = readFileSync(envPath, "utf8");
      for (const line of raw.split("\n")) {
        const t = line.trim();
        if (!t || t.startsWith("#")) continue;
        const eq = t.indexOf("=");
        if (eq === -1) continue;
        const k = t.slice(0, eq).trim();
        let v = t.slice(eq + 1).trim();
        if (
          (v.startsWith('"') && v.endsWith('"')) ||
          (v.startsWith("'") && v.endsWith("'"))
        ) {
          v = v.slice(1, -1);
        }
        if (!process.env[k]) process.env[k] = v;
      }
      return;
    }
    dir = resolve(dir, "..");
  }
}

loadEnvFromAncestors();

const base = process.env.LLM_API_BASE_URL?.replace(/\/$/, "");
const key = process.env.LLM_API_KEY;
const model = process.env.LLM_MODEL ?? "gpt-4o-mini";

async function main() {
  if (!base || !key || base.includes("example.com")) {
    console.error(
      "[llm-api] 请在仓库根目录配置 .env：LLM_API_BASE_URL、LLM_API_KEY（及可选 LLM_MODEL）。\n" +
        "参考根目录 .env.example。"
    );
    process.exit(1);
  }

  const url = `${base}/chat/completions`;
  const body = {
    model,
    messages: [{ role: "user", content: "Reply with exactly: pong" }],
    max_tokens: 16,
    temperature: 0,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error("[llm-api] HTTP", res.status, text.slice(0, 500));
    process.exit(1);
  }

  let reply = text;
  try {
    const j = JSON.parse(text) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    reply = j.choices?.[0]?.message?.content?.trim() ?? text;
  } catch {
    /* raw */
  }

  console.log("[llm-api] OK, snippet:", reply.slice(0, 200));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
