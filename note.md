# 目录结构

```text
/my-vue-app
├── 📂 public                # 静态资源（不经过 Webpack/Vite 处理）
│   ├── favicon.ico         # 网站图标
│   └── index.html          # HTML 入口文件
├── 📂 src                   # 项目源代码
│   ├── 📂 api               # API 请求封装
│   │   ├── auth.ts         # 鉴权相关 API
│   │   └── user.ts         # 用户相关 API
│   ├── 📂 assets            # 静态资源
│   │   ├── logo.png        # 图标、图片
│   │   └── styles
│   │       ├── base.css    # 基础样式
│   │       └── variables.css # CSS 变量
│   ├── 📂 components        # 通用组件
│   │   ├── 📂 common       # 基础组件
│   │   │   ├── Button.vue
│   │   │   └── Modal.vue
│   │   └── 📂 layout       # 布局相关组件
│   │       └── Navbar.vue
│   ├── 📂 composables       # 组合式 API (Vue 3)
│   │   └── useAuth.ts      # 自定义 Hook 逻辑
│   ├── 📂 directives        # 自定义指令
│   │   └── vFocus.ts       # 自动聚焦指令
│   ├── 📂 hooks             # 业务逻辑 hooks（可选，功能与 composables 类似）
│   │   └── useFetch.ts
│   ├── 📂 layouts           # 页面布局
│   │   ├── DefaultLayout.vue
│   │   └── AuthLayout.vue
│   ├── 📂 router            # 路由配置
│   │   ├── index.ts        # 路由主文件
│   │   └── routes.ts       # 路由定义
│   ├── 📂 store             # Pinia 状态管理
│   │   ├── index.ts        # 注册 Pinia
│   │   └── modules
│   │       ├── auth.ts     # 用户认证状态
│   │       └── user.ts     # 用户数据状态
│   ├── 📂 types             # 类型定义
│   │   ├── api.ts          # API 接口类型
│   │   └── store.ts        # 状态类型
│   ├── 📂 utils             # 工具函数
│   │   ├── auth.ts         # 鉴权工具
│   │   └── date.ts         # 日期格式化工具
│   ├── 📂 views             # 页面级组件
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   └── Profile.vue
│   ├── App.vue              # 根组件
│   ├── main.ts              # 入口文件
│   └── shims-vue.d.ts       # TypeScript 识别 .vue 文件
├── 📂 tests                 # 测试
│   ├── unit                # 单元测试
│   └── e2e                 # 端到端测试
├── 📂 dist                  # 构建后的文件（生产环境）
├── 📂 node_modules          # 依赖
├── .editorconfig            # 代码编辑器配置
├── .eslintrc.js             # ESLint 配置
├── .prettierrc              # Prettier 配置
├── .gitignore               # Git 忽略文件
├── index.html               # 入口 HTML 文件
├── package.json             # 项目依赖配置
├── pnpm-lock.yaml           # pnpm 依赖锁定文件
└── tsconfig.json            # TypeScript 配置
```
