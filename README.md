# 言葉と余白 — 个人介绍网站

为日语专业在校大学生（马苏）设计的个人介绍网站，个人资料来自《简历1》。正式域名：EverythingAboutMars.cn。

## 设计取向

- 大面积留白、低信息密度、非对称排版
- 米白底 `#FCFBF7`、墨黑文字 `#26251F`、单一点缀蓝 `#3C3489`
- 标题衬线（明朝体气质），正文无衬线、加大字距
- 0.5px 细线、极小圆角、无阴影无渐变、克制的慢过渡

参考氛围：无印良品官网 / 日本设计中心（NDC）/ 原研哉式克制美学。

## 运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 上线部署

构建产物在 `dist/`，为纯静态站点，可直接上传到任意静态托管：

- 阿里云 OSS：新建 Bucket → 开启“静态网站托管” → 上传 `dist/` 全部文件
- 大陆地区使用阿里云 CDN / OSS 自定义域名前需先完成 ICP 备案
- 在阿里云云解析 DNS 控制台添加域名解析到托管服务（OSS 自定义域名一般用 CNAME 指向 CDN 域名）

## 内容替换

- 所有个人信息、经历、项目、能力都集中在 `src/data/profile.js`（当前内容来自《简历1》）
- 整站背景：React Bits 的 Silk 动态布纹效果（WebGL），参数在 `src/App.jsx` 的 `.site-bg` 中调整
- 滚动浮现：基于 React Bits ScrollReveal（GSAP ScrollTrigger），页面中带 `data-reveal` 的内容会随滚动浮现；
  动画统一由 `src/components/Effects/ScrollReveal.jsx` 管理，单个元素可用 `data-reveal-delay` 微调
- 原 `public/video/hero.mp4` 已不再使用，如需恢复视频背景可改回 `<video>` 写法
- 人物照片与项目照片：文件位于 `public/images/`，对应关系见各组件中的 `<img>`

新增依赖：`three` + `@react-three/fiber`（v8，兼容 React 18）+ `gsap`。
