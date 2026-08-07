---
name: Atelier UI Agent Rules
description: 本项目 AI agent 的世界级工作规范：命令、测试、代码风格、Git 工作流、安全边界、验证闭环、汇报格式。所有 agent 必须遵守。
---

# AGENTS.md — Atelier UI 项目规范（世界级标准）

本规范融合 GitHub 官方 AGENTS.md 最佳实践（2500+ 仓库分析）、Anthropic Claude Code 最佳实践、OpenCode 规则文档，以及 Conventional Commits / GitHub flow / SemVer / 12-Factor 等业界标准。

**总原则：只写 agent 无法从代码自己推断出的信息；每条规则具体可验证；宁可少而精，不要长而废。**

---

## 0. 三层边界（最高优先级，所有规则以此为准）

- ✅ **Always do**（必须做）：第 1-3 节的命令与流程
- ⚠️ **Ask first**（先问用户）：删除文件、改动 schema/依赖/配置、push 到 main、修改凭据、任何后果不确定的操作
- 🚫 **Never do**（绝对禁止）：第 2 节凭据红线、泄露 secrets、无界/破坏性命令、永久删除

**规则冲突时：安全类优先于效率类；用户当面指令 > 本文件。**

---

## 1. 项目概览与技术栈

- **Atelier UI**：高级审美 Vue 3 组件库（18 风格 / 92 组件 / 一键复制展示站）
- 技术栈：**Vue 3 + TypeScript + Vite**（以 package.json 实际版本为准）
- 仓库：GitHub `Gong-FlyBird/Vue-Component-Library`（branch: main）

## 2. 命令速查（agent 最常引用，放最前）

- 安装依赖：`npm install`（锁文件 package-lock.json 必须提交，禁止改依赖不更新锁文件）
- 构建：`npm run build`
- 开发预览：`npm run dev`
- 类型检查：`npx tsc --noEmit`
- 测试：如有测试脚本则 `npm test`，没有则明说"本项目无测试脚本"，**不假装跑了**

> 规则：命令必须带完整 flags；不确定某命令时先读 package.json 确认，不猜。

## 3. 安全红线（遇到即停，不执行）

🚫 **Never do**：

1. 无界循环/无限递归（`while true`、无退出条件 `for`、无限递归遍历）
2. 生成超大文件（无限 append、`dd` 大块写盘、解压 zip bomb）
3. 无上限内存占用（一次性无截断读入超大文件、无界并发）
4. 破坏性命令：`rm -rf`、`rd /s /q`、`Remove-Item`、`del /s /q` 指向根目录/系统/用户目录
5. 无超时、无重试上限的下载/轮询

✅ **Always do**（防护动作）：

- 读大文件用 `head`/`tail`/分页，不整读
- 破坏性操作先 `--dry-run` 或预览
- 下载/解压前先确认目标大小
- 循环/重试/并行必须带明确上限和超时
- **任何操作后果不确定 → 先停下来问用户，绝不自作主张**

## 4. 严禁读取用户凭据（不可触碰的红线）

🚫 **Never do**：

- 禁止 `cmdkey /list`、读取 Windows 凭据管理器、读取环境变量中的 token/密钥
- 禁止读取 `~/.ssh` 私钥、`~/.git-credentials` 等凭据文件内容
- 禁止调用 GitHub API 修改用户账号（添加 SSH key、创建 token）
- push 需要凭据时：**提示用户手动配置或登录**，绝不自己去翻凭据

## 5. 删除先送回收站

⚠️ **Ask first**（删除前必须先确认路径清单），且：

```powershell
# 删文件
Add-Type -AssemblyName Microsoft.VisualBasic
[Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile('完整路径', 'OnlyErrorDialogs', 'SendToRecycleBin')
# 删目录
[Microsoft.VisualBasic.FileIO.FileSystem]::DeleteDirectory('完整路径', 'OnlyErrorDialogs', 'SendToRecycleBin')
```

- 禁止 `rm`、`Remove-Item`、`rd /s /q` 直接抹除
- 唯一例外：用户明确说"永久删除"

## 6. Git 工作流（GitHub flow + Conventional Commits）

- **分支**：功能开发建分支 `feature/xxx`，**禁止直推 main**；PR 走审查后合并
- **commit message**（Conventional Commits 规范）：
  ```
  feat: 新增 xxx 组件
  fix: 修复 xxx 样式问题
  docs: 更新 README
  refactor: 重构 xxx
  BREAKING CHANGE: 修改 xxx 对外 API（对应 SemVer MAJOR）
  ```
- **commit 粒度**：小而完整，一次 commit 只做一件事
- **同步**：每个任务完成、改动落地后同步一次：`git status` → `git add`（只加本次相关改动）→ `git commit` → `git push`
- **push 失败时**（网络/凭据问题）：**停止折腾，如实报告失败原因**，给出方案让用户选择。禁止试 IP、改 DNS、改 hosts、生成 SSH 密钥、改 git 配置硬推
- 用户说"先别同步"时跳过

## 7. 版本与发布（SemVer）

- 版本号 `MAJOR.MINOR.PATCH`：破坏性变更 → MAJOR；新功能 → MINOR；修复 → PATCH
- 发布前确认 CHANGELOG 更新（如项目有此文件）；breaking change 必须标注

## 8. 依赖管理

- ⚠️ **Ask first**：新增/升级/删除任何依赖前，先向用户确认
- 只装**官方、维护活跃、有明确文档**的包（参考 npm 官方页、GitHub stars、维护时间）
- 不猜包名、不试错式安装；用 `npm view <pkg>` 核验 name/maintainer/repository 归属官方
- 锁文件（package-lock.json）必须提交进 git

## 9. 代码风格与质量（本项目取舍）

- **TypeScript**：写类型，不写 `any` 逃避；严格模式开启
- **Vue 3**：用 `<script setup>` 组合式 API；组件 props/emits 声明完整类型
- **命名**：组件 PascalCase（`AtelierButton`）、文件 kebab-case（`atelier-button.vue`）、变量 camelCase
- **SOLID/DRY/KISS**：遵循，但以"本项目实际情况"为取舍，不过度抽象；重复两次先复用，三次再考虑抽象
- 不引入没必要的抽象层；优先用 Vue 生态标准方案（官方文档推荐）
- **性能**：组件库关注打包体积与按需引入；改动影响体积时说明

## 10. 配置与环境（12-Factor 原则）

- 禁止硬编码环境相关配置（API key、路径等）；走 env 或配置文件
- dev/prod 行为保持一致（同一套配置语义）
- **secrets 绝不进代码库**：`.env` 不入 git（.gitignore 已含）

## 11. 测试策略

- 改动组件后：类型检查 `npx tsc --noEmit` + 构建 `npm run build` 必须通过
- 有测试框架则写/改对应单测；没有则至少验证构建与类型
- **验证闭环（Anthropic 核心实践）**：每次改动后必须运行验证命令并展示输出，不能只说"看起来没问题"

## 12. 文档要求

- 新增/修改组件：同步更新 README 或展示站说明（如果存在对应文档）
- 注释：写"为什么"，不写"是什么"（代码本身能表达的部分不注释）
- 对外 API 变更：必须更新文档并标注 breaking change
- **用户长期偏好：功能/界面变更后，README 中相关描述必须同步更新，并随代码一起提交推送（每次任务收尾检查 README 是否需要同步）**

## 13. 任务汇报格式（每个任务结束）

✅ **Always do**：逐项列出本次动过的文件：

- 格式：**完整路径 + 变更类型（新建/修改/移动/重命名/删除）+ 一句话说明**
- 禁止：只报目录、用"相关文件"敷衍、漏报、掺无关文件、编造路径
- 没动文件就明说"本次未改动任何文件"

## 14. 沟通与事实准确（不瞎意淫）

- 不确定的事明说"不确定/不知道"，禁止猜测、编造、"可能大概"糊弄
- 所有结论必须有依据：官方文档、代码、实测结果
- 安装/引用任何东西前，先查官方文档/官方仓库，核验来源（呼应第 8 节）

## 15. 常见坑（本项目 gotchas）

- 展示站/组件演示在 `src` 下，别把演示代码误当业务代码删除
- 依赖锁文件变更要随代码一起提交，不要遗漏
- （发现新的坑随时补充到本节）

## 16. 引用与拆分（保持本文件精简）

- 本文件目标 **< 200 行**；细则可拆分子文件（如 `AGENTS-components.md`），用 `@路径` 引用并显式指示 agent 读取
- 每行规则都要"可辩护"：删掉它会造成可观察的错误，否则就删掉它

---

*本规范与用户面对面沟通同优先级；冲突时安全类（第 3-5 节）优先。*
