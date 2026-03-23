# 算法（LeetCode）

- **主语言**：TypeScript（与工程侧统一）；网页答题时按官方支持选 JS/TS。
- **按周**：`weekNN/README.md` 为当周索引（标题里写主题，路径里不写算法名）；每道题子目录推荐 **`{题号}-{slug}`**（如 `704-binary-search/`），内含 `README.md` + `solution.ts`。
- 在 `algo/` 下：`pnpm install && pnpm run check`（或 `npm run check`）对当周 TypeScript 做类型检查；**`pnpm run test`（或 `npm run test`）** 跑 TS（Vitest）+ Python（unittest）+ Rust（`cargo test`）的公共用例；**`npm run check:all`** = 类型检查 + `cargo check` + 全套测试。
- 每题可含 `cases.ts`（公共用例）、`solution.test.ts`、`test_solution.py`，与 `solution.ts` / `solution.py` / `solution.rs` 对照。
- 周索引里可补：**题号、思路一句话、易错点**；默写模板放 `snippets/*.ts`，不必与 LeetCode 提交格式一致。
