# 集团代码大赛 · 统一训练仓

面向 [第四届备战计划](../集团代码大赛/第四届备战计划.md) 的**单仓库**练习：算法笔记、大模型 API 实验、后续 MCP / 全栈（第 11 周起逐步填满）。

## 目录约定

| 路径 | 用途 |
|------|------|
| `algo/` | 模板默写、错题复盘（`.md` / 本地 `.ts` 片段；正式提交仍在 LeetCode） |
| `experiments/llm-api/` | 第 4 周起：调通类 Chat Completions API（爱码等） |
| `mcp-server/` | 第 7–11 周：MCP Server（赛前对齐赛题入口命名） |
| `mcp-client/` | MCP Client、批处理 CSV |
| `agent/` | NL → 结构化字段 → 调 MCP |
| `apps/web/` | 第 13 周起：前端 |
| `apps/api/` | 第 13 周起：后端 REST |

需要 **pnpm/npm workspaces** 时再在根目录加 `package.json`；当前仅从 `experiments/llm-api` 起步即可。

## 快速开始（API 实验）

```bash
cd experiments/llm-api
cp ../../.env.example ../../.env   # 或复制为本目录 .env，见该包 README
npm install
npm run ping
```

## Git

本目录已 `git init`，可直接 `git remote add origin <url>` 推到你自己的远程仓。

**勿提交** `.env`、密钥与内网文档中的真实 API Key。
