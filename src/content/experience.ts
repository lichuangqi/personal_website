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
    role: "Software Engineer",
    period: "Jan 2024 — Jul 2026",
    location: "Brisbane, Australia",
    summary:
      "Modernised and extended a multi-tenant digital signage platform across Nuxt frontends, Go integrations, GraphQL services, and production support workflows.",
    achievements: [
      "Modernised a legacy React frontend into a Nuxt 4 monorepo, consolidating seven layers for 30+ tenants.",
      "Led the shared Nuxt component-library refactor and Nuxt UI upgrade across device, site, user, administration, and support workflows.",
      "Contributed to the first product AI integration by building Go MCP tools for device and site workflows with the official Model Context Protocol SDK.",
      "Contributed to the migration from NestJS services to Bun and Elysia, extending GraphQL Yoga/Nexus resolvers and MongoDB queries for tenant-aware device and site data.",
      "Built and launched Go/Gin integrations for Vnnox and TeamViewer, including paginated ingestion, data cleansing, asset matching, and NATS status events.",
    ],
    technologies: [
      "Go",
      "Nuxt 4",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "Bun",
      "Elysia",
      "MongoDB",
      "NATS",
      "MCP",
    ],
  },
  {
    id: "exp-property-credit",
    company: "Property Credit",
    role: "Software Developer (Industry Placement)",
    period: "Jul 2023 — Oct 2023",
    location: "Gold Coast, Australia",
    summary:
      "Delivered customer-facing property-finance workflows across a Next.js frontend, type-safe APIs, PostgreSQL data, payments, and AWS infrastructure.",
    achievements: [
      "Rebuilt 10+ customer-facing pages with React, Next.js, TypeScript, and Zustand, including Google Places Autocomplete and a multi-step application flow.",
      "Developed property-finance workflows with tRPC, Prisma, and PostgreSQL and implemented the platform's first Stripe integration for card payments, Apple Pay, and Google Pay.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "AWS",
    ],
  },
  {
    id: "exp-vizen-tech",
    company: "Vizen Tech",
    role: "Software Engineer",
    period: "Oct 2021 — Oct 2022",
    location: "Beijing, China (On-site)",
    summary:
      "Delivered a smart-city geospatial platform and mobile field-collection application backed by real-time data-processing services.",
    achievements: [
      "Delivered a geospatial monitoring platform for 10+ buildings in Beijing, integrating React interfaces with a proprietary WebGL 3D engine and deploying to Alibaba Cloud.",
      "Built a React Native field application for drone-derived data with map positioning, annotation, upload, offline workflows, and result visualisation.",
      "Developed Spring Boot and MySQL services with RabbitMQ processing pipelines for real-time web and mobile updates.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "React Native",
      "WebGL",
      "MySQL",
      "RabbitMQ",
      "Alibaba Cloud",
    ],
  },
  {
    id: "exp-medex-tech",
    company: "Medex Tech",
    role: "Software Engineer",
    period: "Sep 2020 — Oct 2021",
    location: "Beijing, China (On-site)",
    summary:
      "Built clinical workflows, operational dashboards, and ambulance features integrated with hospital and emergency systems.",
    achievements: [
      "Built React, Next.js, and Redux clinical workflows integrated with Spring Boot and Oracle services across nearly 100 hospitals.",
      "Developed React and ECharts dashboards presenting real-time registration, queue, and clinical activity data across approximately 10 hospitals.",
      "Delivered React Native ambulance features integrating live location, ECG, and hospital systems through C# service interfaces.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "React Native",
      "Java",
      "Spring Boot",
      "Oracle",
      "ECharts",
      "C#",
    ],
  },
];
