// ============================================================
// 个人信息 —— 内容来自《简历1》（马苏）
// 如后续有更新，直接在此文件修改
// ============================================================

const baseUrl = import.meta.env.BASE_URL

// 把 public/images 下的绝对路径转成跟随站点部署目录的相对地址
export const asset = (path) => `${baseUrl}${path.replace(/^\//, '')}`

export const profile = {
  // 署名
  nameZh: '马苏', // TODO: 如需日文假名署名请补充
  nameJa: 'MA SU',
  nameEn: 'MA SU',
  brandJa: 'ことばと余白',
  brandZh: '言葉与余白',

  // 身份
  role: '日语语言文化学院 · 日语专业',
  roleJa: '日本語専攻の大学生',
  hometown: '河北 · 张家口',
  basicInfo: '男 · 2007年7月 · 满族 · 共青团员 · 籍贯 河北张家口',
  university: '广东外语外贸大学',
  department: '日语语言文化学院 · 日语2602',
  birthday: '2007年7月',
  phone: '15324230726',
  phoneDisplay: '153 2423 0726',
  wechat: 'RealMarsRightHere',
  email: '3271300853@qq.com',
  // 个人照片：把图片放进 public/images/ 后，填写 /images/你的文件名.jpg
  photo: '/images/portrait.jpg',

  // 自我介绍（Hero 与 About 共用）
  greeting:
    '我是马苏，来自河北张家口。现在是广东外语外贸大学日语语言文化学院的学生，日语专业在读；喜欢在表达、组织与安静的思考之间来回练习。',
  about:
    '从河北张家口到广州，我一直保持着两件事：向外表达，向内学习。\n\n高中期间，我创办了张家口市第一中学第 23 届模拟联合国社团并担任最高负责人，累计参加七次模联会议，也在三年班级体育委员的经历里学会如何把一群人组织好。\n\n进入大学后，我在日语语言文化学院开始系统学习一门新的语言，也把过去积累的英语表达、AI 工具与自学方法一起带进了新的生活。',

  // 常用联系方式
  hobbies: ['FPS 游戏', '人工智能', '说唱音乐', '健身']
}

// 联系渠道（About 联系方式 / 页面底部共用）
export const contacts = [
  {
    label: 'EMAIL',
    handle: '3271300853@qq.com',
    url: 'mailto:3271300853@qq.com'
  },
  {
    label: 'WECHAT / QQ',
    handle: 'RealMarsRightHere',
    url: '#'
  },
  {
    label: 'MOBILE',
    handle: '153 2423 0726',
    url: 'tel:15324230726'
  }
]

// About 中的项目数据（来自简历）
export const stats = [
  {
    value: '7',
    unit: '回',
    label: '模联参会',
    note: '模拟联合国参会经历'
  },
  {
    value: '23',
    unit: '届',
    label: '模联社团',
    note: '高中时创办并任最高负责人'
  },
  {
    value: '1',
    unit: '项',
    label: '全国一等奖',
    note: '第十六届「阅读之星」高中英文组'
  },
  {
    value: '3',
    unit: '年',
    label: '体育委员',
    note: '张家口市第一中学期间'
  }
]

// 教育经历（来自简历）
export const education = [
  {
    period: '2020 — 2023',
    school: '张家口市第一中学',
    role: '班级体育委员（三年）',
    items: [
      '创办校第 23 届模拟联合国社团并担任最高负责人',
      '获第十六届“阅读之星”全国青少年阅读风采展示活动高中英文组全国一等奖'
    ]
  },
  {
    period: '2026 — 在读',
    school: '广东外语外贸大学',
    role: '日语语言文化学院 · 日语2602',
    items: ['系统学习日语专业课程', '继续使用 AI 工具整理学习与阅读']
  }
]

// 精选经历（内容来自简历，按网站“作品”模块呈现）
export const projects = [
  {
    no: '01',
    category: '組織・リーダーシップ',
    categoryZh: '组织与领导',
    title: '模擬国連をつくる',
    titleZh: '创办一场模拟联合国',
    year: '2020 — 2023',
    role: '创始人 · 社团最高负责人',
    image: '/images/project1.jpg',
    ratio: '3 / 2',
    ratioClass: 'ratio-32',
    description:
      '在张家口市第一中学创办第 23 届模拟联合国社团并担任最高负责人，累计参加七次会议，多次参与活动组织。',
    visual: 'ph-a'
  },
  {
    no: '02',
    category: '英語・プレゼンテーション',
    categoryZh: '英语展示',
    title: '読む力、伝える声',
    titleZh: '阅读与表达的现场',
    year: '2023',
    role: '高中英文组 · 全国一等奖',
    image: '/images/project2.jpg',
    ratio: '3 / 4',
    ratioClass: 'ratio-34',
    description:
      '获第十六届“阅读之星”全国青少年阅读风采展示活动高中英文组全国一等奖，热爱英语口语与公开表达。',
    visual: 'ph-b'
  },
  {
    no: '03',
    category: '日本語・これから',
    categoryZh: '日语进行时',
    title: '新しい言葉の一年',
    titleZh: '一门新语言的第一年',
    year: '2026 —',
    role: '广东外语外贸大学 · 日语2602',
    image: '/images/project3.jpg',
    ratio: '3 / 2',
    ratioClass: 'ratio-32',
    description:
      '进入日语语言文化学院开始系统学习日语，同时保留对人工智能、说唱与健身的热爱，慢慢积累，认真生活。',
    visual: 'ph-c'
  }
]

// 能力卡片（内容来自简历“技能与特长”）
export const skills = [
  {
    ja: 'そしき',
    title: '组织与表达',
    desc: '习惯把一群人组织好，也习惯把想法讲清楚；从社团创办到会议现场，都愿意站在前面。',
    points: ['模联参会 7 次', '活动组织', '社团最高负责人']
  },
  {
    ja: 'えいご',
    title: '英语与展示',
    desc: '英语口语流利，喜欢阅读与公开发言，擅长用展示把自己的理解传达给别人。',
    points: ['英语口语', '阅读展示', '全国一等奖']
  },
  {
    ja: 'つーる',
    title: '工具与自学',
    desc: '熟练使用 AI 工具与 Office/WPS 三件套，自学能力强，热爱阅读与深度思考。',
    points: ['AI 工具', 'Office / WPS', '自主学习']
  },
  {
    ja: 'ことば',
    title: '语言与坚持',
    desc: '进入大学后开始系统学习日语；也把对 FPS、人工智能与说唱的热爱，变成持续行动的燃料。',
    points: ['日语专业在读', '语言学习', '坚持健身']
  }
]

export const navItems = [
  { id: 'about', ja: '経歴', zh: '经历', en: 'ABOUT' },
  { id: 'projects', ja: '作品', zh: '作品', en: 'WORKS' },
  { id: 'skills', ja: '力', zh: '能力', en: 'STRENGTHS' },
  { id: 'contact', ja: '連絡', zh: '联系', en: 'CONTACT' }
]
