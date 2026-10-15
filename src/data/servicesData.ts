import type {
  ServiceCard,
  ServiceHeroContent,
  ServicesFooterGroup,
  ServicesNavItem,
  WhyFeature,
} from "../types/services";

export const servicesNavItems: ServicesNavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "About", href: "/about" },
];

export const serviceHeroContent: ServiceHeroContent = {
  badge: "Enterprise Solutions",
  title: "Our",
  highlightedTitle: "Core Services",
  description:
    "Powering your digital future with AI-driven enterprise solutions and strategic engineering. We help industry leaders modernize, scale, and innovate at the speed of thought.",
  primaryAction: "View Case Studies",
  secondaryAction: "Schedule Consultation",
};

export const serviceCards: ServiceCard[] = [
  {
    icon: "psychology",
    title: "AI & Machine Learning",
    description:
      "Custom neural networks and predictive modeling for business intelligence. We build autonomous agents and LLM-powered workflows tailored to your data.",
    href: "/services",
  },
  {
    icon: "hub",
    title: "Strategic Consulting",
    description:
      "Strategic roadmap planning for modernizing legacy business processes. We align your tech stack with long-term growth objectives and market shifts.",
    href: "/services",
  },
  {
    icon: "developer_board",
    title: "Platform Engineering",
    description:
      "Scalable architecture design for high-performance enterprise applications. Microservices, event-driven systems, and robust API ecosystems.",
    href: "/services",
  },
  {
    icon: "cloud_sync",
    title: "Cloud Migration",
    description:
      "Seamless transition of infrastructure to secure, scalable cloud environments. Multicloud strategies and serverless optimization.",
    href: "/services",
  },
  {
    icon: "query_stats",
    title: "Data & Analytics",
    description:
      "Advanced data processing and visualization for actionable insights. Real-time dashboards and automated reporting for decision makers.",
    href: "/services",
  },
  {
    icon: "robot_2",
    title: "Intelligent Automation",
    description:
      "Streamlining operations with intelligent RPA and workflow orchestration. Reduce manual overhead and eliminate operational bottlenecks.",
    href: "/services",
  },
];

export const whyFeatures: WhyFeature[] = [
  {
    icon: "shield",
    title: "Security First",
    description: "Built-in compliance and encryption for sensitive enterprise data.",
  },
  {
    icon: "open_in_full",
    title: "Scalable Design",
    description: "Systems designed to grow seamlessly with your global operations.",
  },
  {
    icon: "memory",
    title: "AI-Native",
    description: "Intelligence integrated into the core of every solution we build.",
  },
];

export const whyImage = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWZJLITJFl6mJoK3OdB4OgfXzFzudv2pPKmdEIjBNvGly6r_864FaXMXr8CLvLf6uuBBwOSC1ec_P_nsRshkMzPj5w93DSak32SQNqznKuYhWS1c1TA8PQN1pgG7Zmb7llCrwWPhhH7ATanGKes_XXDG9W_bV1F6jSPNL4aN2QlNLRHcqKuGx1qNFiScF9NfEtxmIREqeO2jDT-3kb3scPkXu0qLSGwG3733bpPoFqrqfNthl6Rx_75PFDHZkIr_BlvHWWr3BoNYeG",
  alt: "Abstract view of modern high-tech enterprise server hardware",
};

export const servicesFooterGroups: ServicesFooterGroup[] = [
  {
    title: "Products",
    links: [
      { label: "AI & ML", href: "/services" },
      { label: "Platform Engineering", href: "/services" },
      { label: "Cloud Strategy", href: "/services" },
      { label: "Automation", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Case Studies", href: "/casestudies" },
        ],
  },
];
