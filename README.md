<div align="center">

# Atelier UI — 高级审美组件档案馆

**18 种世界级设计美学 · 92 个可直接复制的 Vue 3 组件**

从 Apple 液态玻璃到 Hermès 皮革，从赛博霓虹到日式侘寂 —— 实时预览，点击复制，即刻入驻你的项目。

![Vue 3](https://img.shields.io/badge/Vue-3.5-42b883?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square)
![组件](https://img.shields.io/badge/组件-92-d8441d?style=flat-square)

</div>

---

## 特性

- **92 个组件 · 18 种美学风格** — 每种风格都是一套完整的 UI 语言（按钮、卡片、输入、开关、加载器…）
- **代码弹窗** — 「查看代码」一键弹出悬浮窗，可拖动、支持 8 向自由调整大小；源码按 Template / Script / Style 分块高亮，复制单段、复制全部、下载 `.vue` 文件一站式完成
- **实时预览** — 组件在专属设计环境下预览，支持桌面 / 平板 / 手机三种视口切换
- **纯 CSS / SVG 手写** — 无外部资源、无图片、无字体依赖，复制即用，离线可用
- **明暗双主题** — 展示站画廊式界面，一键切换并记忆偏好
- **高效浏览** — 目录式导航、`Ctrl+K` 全局搜索、类型标签筛选、收藏夹、随机逛逛
- **性能优化** — 组件按组动态加载（代码分割），首页极速打开
- **可分享链接** — hash 路由（`#/component/glass-button`），收藏夹持久化到本地

## 美学目录

| # | 风格 | 英文 | 灵感来源 | 组件数 |
|---|------|------|----------|--------|
| 01 | 液态玻璃 | Liquid Glass | Apple iOS 26 | 6 |
| 02 | 爱马仕 | Maison Hermès | 马鞍皮革 · 金色缝线 | 6 |
| 03 | 赛博霓虹 | Neon Cyber | NVIDIA 科技风 | 6 |
| 04 | 日式侘寂 | Wabi-Sabi | MUJI 极简 | 6 |
| 05 | 粗野主义 | Neo-Brutalism | 硬边 · 偏移硬阴影 | 5 |
| 06 | 新拟态 | Neumorphism | 柔软双阴影 | 5 |
| 07 | 包豪斯 | Bauhaus | 几何构成 · 红黄蓝 | 5 |
| 08 | 复古终端 | CRT Terminal | 磷光绿 · 扫描线 | 5 |
| 09 | 蒸汽波 | Vaporwave | 80s 复古未来 | 5 |
| 10 | 极简科技 | Linear Style | Linear / Stripe | 5 |
| 11 | 复古咖啡 | Vintage Coffee | 牛皮纸 · 手工标签 | 5 |
| 12 | 装饰艺术 | Art Deco | 午夜蓝金 · 阳光射线 | 5 |
| 13 | 吉卜力自然 | Ghibli Pastoral | 草甸晴空 · 手作温度 | 5 |
| 14 | 金属镀铬 | Chrome | 拉丝金属 · 立体倒角 | 5 |
| 15 | 流动渐变 | Aurora Gradient | 极光流动 | 5 |
| 16 | Bento 网格 | Bento Grid | Apple 小组件面板 | 3 |
| 17 | 文档工作流 | Notion Style | Notion 文档编辑 | 5 |
| 18 | 千禧 Y2K | Y2K Glitter | 糖果亮片 · 镀铬文字 | 5 |

## 快速开始

```bash
# 1. 克隆
git clone https://github.com/Gong-FlyBird/Vue-Component-Library.git
cd Vue-Component-Library

# 2. 安装依赖
npm install

# 3. 启动展示站
npm run dev
```

生产构建：

```bash
npm run build   # vue-tsc 类型检查 + vite 打包
```

## 使用组件

打开任一组件详情页 → 点击「复制源码」或下载 `.vue` 文件，直接粘贴进你的 Vue 3 项目即可：

```vue
<!-- 示例：粘贴后直接使用 -->
<template>
  <GlassButton label="继续" variant="primary" />
</template>
```

- 组件**零外部依赖**（纯 CSS / SVG / TS 实现），不引入任何额外包
- 部分组件使用了 `lucide-vue-next` 图标（已预装，也可替换为任意图标）
- 交互组件（开关、滑杆、进度、打字动画）均自带本地状态，开箱即用

## 技术栈

| 层 | 技术 |
|----|------|
| 框架 | Vue 3（`<script setup>` 组合式 API） |
| 语言 | TypeScript（严格模式） |
| 构建 | Vite 8 |
| 语法高亮 | highlight.js |
| 图标 | lucide-vue-next |
| 路由 | 自研 hash 路由（零依赖） |

## 目录结构

```
src/
├── lib/                    # 组件库本体（18 组 × 5-6 组件）
│   ├── glass/              #   每组：组件 .vue + index.ts（元数据 + 源码）
│   ├── hermes/
│   ├── neon/               #   …共 18 组 92 个组件
│   └── index.ts            # 聚合导出：groups / allComponents / 标签
├── showcase/               # 展示站（画廊式界面）
│   ├── AppShell.vue        #   布局壳（顶栏 + 目录 + 页过渡）
│   ├── HomeView.vue        #   画廊首页（精览 + 目录索引）
│   ├── ComponentDetail.vue #   展品详情（预览画框 + 代码面板）
│   ├── PreviewStage.vue    #   预览画框（视口切换）
│   ├── CodePanel.vue       #   代码高亮面板（分块复制 / 下载）
│   └── composables/        #   主题 / 收藏 / Toast / 剪贴板
└── style.css               # 设计令牌（纸白 / 墨黑 / 朱红，衬线 + 等宽混排）
```

## 设计理念

展示站采用**画廊式编辑风**：纸白底 + 墨黑 + 单一朱红强调色，衬线巨标题与等宽功能字混排，直角微圆角、发丝线边框、目录式索引 —— 克制、安静，让 92 个组件成为真正的主角。

## 贡献

欢迎提交 PR 新增美学风格或改进现有组件：

1. 在 `src/lib/` 下新建风格组（参考现有组的结构：组件 + `index.ts` 元数据）
2. 组件保持**零外部依赖**、自带交互状态、60–200 行
3. 提交前确保 `npm run build` 通过

## 常见问题

**Q：复制到我的项目里样式不生效？**
组件使用 `scoped` 样式，复制整个文件即可，无需额外全局样式。字体使用系统字体栈，不依赖网络字体。

**Q：可以商用吗？**
组件代码全部手写原创，可自由用于个人和商业项目。
