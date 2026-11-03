export const siteConfig = {
  name: "Charlie Li",
  title: "Charlie Li — Software Engineer",
  description:
    "Software engineer in Brisbane with 4+ years of commercial experience across web, mobile, backend APIs, integrations, testing, and production support.",
  url: "https://chuangqili.com",
  locale: "en_US",
  author: {
    name: "Charlie Li",
    englishName: "Charlie",
    pinyinName: "Chuangqi Li",
    email: "charlie.chuangqi.li@gmail.com",
    role: "Software Engineer",
    location: "Brisbane, Queensland, Australia",
    status: "Open to opportunities",
  },
  social: {
    github: "https://github.com/lichuangqi",
    linkedin: "https://www.linkedin.com/in/chuangqi-li/",
    email: "mailto:charlie.chuangqi.li@gmail.com",
  },
  resume: "/resume/Chuangqi-Li-Software-Engineer-Resume.pdf",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    {
      label: "Resume",
      href: "/resume/Chuangqi-Li-Software-Engineer-Resume.pdf",
      download: true,
    },
  ],
} as const;
