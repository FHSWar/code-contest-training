# LLM API 实验（第 4 周）

1. 在**仓库根目录**或本目录放置 `.env`（从根目录 `.env.example` 复制）。
2. 安装依赖并探测连通性：

```bash
npm install
npm run ping
```

未配置有效 `LLM_API_BASE_URL` / `LLM_API_KEY` 时，脚本会打印说明并 **exit 1**，属预期行为。

正式 URL 与模型名以 `集团代码大赛/` 下当年接口文档为准。
