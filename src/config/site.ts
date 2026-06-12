export const siteConfig = {
  name: "Charlie Li",
  title: "Charlie Li — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer portfolio. Experience and contact information for recruiters and collaborators.",
  url: "https://chuangqili.com",
  locale: "en_US",
  author: {
    name: "Charlie Li",
    englishName: "Charlie",
    pinyinName: "Chuangqi Li",
    email: "charlie.chuangqi.li@gmail.com",
    role: "Full-Stack Software Engineer",
    location: "Brisbane, Queensland, Australia",
    status: "Open to opportunities",
  },
  social: {
    github: "https://github.com/lichuangqi",
    linkedin: "https://www.linkedin.com/in/chuangqi-li/",
    email: "mailto:charlie.chuangqi.li@gmail.com",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
