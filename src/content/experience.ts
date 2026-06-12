export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export const experienceContent: ExperienceItem[] = [
  {
    id: "exp-entwined",
    company: "Entwined",
    role: "Mid-level Software Engineer",
    period: "Jan 2024 — Present",
    location: "Brisbane, Australia (Hybrid)",
    summary:
      "Build and maintain a retail digital signage platform — CMS integrations and interactive kiosk solutions for enterprise clients — across Go data-lake services, NestJS GraphQL microservices, and Nuxt frontends deployed on GCP.",
    achievements: [
      "Contributed to migrating the data lake from C# through TypeScript to Go; owned the TeamViewer service end-to-end — development, testing, and production rollout — enabling Remote PC access for field engineers.",
      "Led frontend work through the platform upgrade from v6 to v8, including the Brisbane Airport PWA, on-site field-service mobile app, and CMS management web application.",
      "Built and maintained NestJS backend services and third-party integrations with Navori, Appspace, SimPRO, and other external platforms.",
    ],
    technologies: [
      "Go",
      "NestJS",
      "Nuxt",
      "TypeScript",
      "GraphQL",
      "MongoDB",
      "GCP",
      "Docker",
      "Jenkins",
    ],
  },
  {
    id: "exp-property-credit",
    company: "Property Credit",
    role: "Software Engineer II",
    period: "Jun 2023 — Nov 2023",
    location: "Gold Coast, Australia (On-site · Contract)",
    summary:
      "Developed a real estate financial services platform for loans, banking, and property transactions — building full-stack features with Next.js, tRPC, Supabase, and Salesforce integrations.",
    achievements: [
      "Built and tested Next.js/React features with tRPC APIs backed by Supabase and PostgreSQL, integrated with Salesforce for core business workflows.",
      "Implemented Stripe payment flows and replaced manual address entry with Google Places Autocomplete to streamline the user experience.",
      "Improved the CI/CD pipeline with automated testing to increase release reliability and reduce regression effort.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Supabase",
      "PostgreSQL",
      "Salesforce",
      "Stripe",
    ],
  },
  {
    id: "exp-vizen-tech",
    company: "Vizen Tech",
    role: "Software Engineer II",
    period: "Oct 2021 — Nov 2022",
    location: "Beijing, China (On-site)",
    summary:
      "Built a smart city web platform with an immersive 3D panoramic viewing experience — spanning Vue/WebGL frontends, Java Spring Boot backend services, and a WeChat mini program for mobile access.",
    achievements: [
      "Developed a smart city web application with Vue 2 and WebGL, building an immersive 3D panoramic engine for spatial data visualization.",
      "Designed and implemented backend services with Java Spring Boot to support platform APIs and business logic.",
      "Built a WeChat mini program with Uni-app for browsing and analyzing drone-captured panoramic imagery on mobile.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Vue",
      "React",
      "Node.js",
      "WebGL",
      "Uni-app",
    ],
  },
  {
    id: "exp-medex-tech",
    company: "Medex Tech",
    role: "Junior Software Engineer",
    period: "Oct 2020 — Oct 2021",
    location: "Beijing, China (On-site)",
    summary:
      "Deployed a comprehensive medical management system across five major healthcare centers — building responsive web applications with React, Vue 2, and Java Spring Boot.",
    achievements: [
      "Delivered and deployed a full medical system serving five major healthcare centers end-to-end.",
      "Built frontend features with React, Vue 2, and Material UI, backed by Java Spring Boot APIs.",
      "Ensured full responsiveness and cross-platform usability across desktop, tablet, and mobile devices.",
    ],
    technologies: ["Java", "Spring Boot", "Vue", "React", "C#", ".NET", "Material UI"],
  },
];
