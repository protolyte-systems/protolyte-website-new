import type { CaseStudy, FooterLinkGroup, HeroContent, NavItem, Offering, StatItem } from "../types/home";

export const navItems: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "About", href: "/about" },
];

export const heroContent: HeroContent = {
  badge: "Now Live: Protolyte AI V2.0",
  title: "AI-Powered Digital Transformation for",
  highlightedTitle: "Modern Businesses",
  description: "Empowering businesses with AI solutions, cloud platforms and automation designed around real operational needs.",
  primaryAction: "Explore Martlyte",
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU8F7N_O7f7As-eRqsR9BLAIKtCqpzsvRmxmyReNvF3boAWFvKhs78JUdoerIOq6i-bxFTd4F8xzeMDapai3Zp70ZTQnKo54kV4Q9VxwMJytXSQS8qjgOuy7IBHEGDkfoD1xnGGhy0FU0Ja-1QCbxg56bh72cZYts2CJzRfETVWwCx3ZWTvvPDI83f9luAUJfA_ojxvlfRh93FQ_ZE6EVd4ymcB5yxr-_u0nJiXd9DrzSL8KkxTGvarUqC_qFrwA7-qdWW4zoEC6XR",
  imageAlt: "Abstract neural network visualization with neon blue light nodes",
};

export const trustedBrands: string[] = ["Coming Soon"];

export const offerings: Offering[] = [
  { icon: "psychology", title: "AI Transformation", description: "Machine-learning systems tailored to your business logic, data and customer needs.", href: "/services" },
  { icon: "rocket_launch", title: "Platform Modernization", description: "Modern, cloud-ready foundations for legacy applications and evolving product teams.", href: "/services" },
  { icon: "cloud_sync", title: "Cloud & Data", description: "Reliable infrastructure and practical data foundations for clearer decisions.", href: "/services" },
  { icon: "precision_manufacturing", title: "Automation", description: "Streamlined workflows that reduce repetitive effort and support scalable operations.", href: "/services" },
];

export const clientStats: StatItem[] = [
  { value: "End-to-end", label: "Product engineering" },
  { value: "Cloud-ready", label: "Platform foundations" },
  { value: "Secure by design", label: "Delivery approach" },
  { value: "Built to scale", label: "Long-term partnership" },
];

export const clientValuePoints: string[] = ["Strategic alignment with business goals", "Security and compliance by design", "Scalable architecture for long-term growth"];

export const caseStudies: CaseStudy[] = [
  { category: "SALES MODERNIZATION", title: "Retail Store Automation Scaling", description: "How a retail operation can bring customer ordering, product data and store workflows into a clearer digital experience.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEXuMuMWIa_uAhueMSS2PM801YgxvtJ1BgHPExbsP_E8-Tadp8isvS0_QN9l6F5bvHplMc0xLQ9ghd-xrooGeYMApW48j8zDPDN97fSKvqXM5ziLDXIccTVr2c6BhZll0LKiF4kHu7EOCvb0JWwwXN9S7k45LCEpeFdVNpmX621eBSdEfVj-wePcZjIiJvmANgHfcFfJJgwfyYqmbsAGz2M2Ir4cKFleQ9smVrbk_QQKJFZM2vXilzzHf8b5x_s8unlzVYc24Fpf3Y", imageAlt: "Modern retail operations workspace" },
  { category: "SUPPLY CHAIN AI", title: "Logistics Prediction Engine", description: "A practical approach to improving logistics visibility with data-driven operational insights.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHk75L0snQTvc4lP6tFnDCEJDHjp3Hrtg1_zyGk2DaA7r-IV2WmMHYF8SBGLM6NLVdNade1BIXULW1uTiY0FF5wkDyyxbH1tCo7SrC4m36yldkj8achsc91QMjf72mYRGVCb6x0OVgZzXO4PsS_wJY6ZfhgGwbzysh5WrFdVNpmX621eBSdEfVj-wePcZjIiJvmANgHfcFfJJgwfyYqmbsAGz2M2Ir4cKFleQ9smVrbk_QQKJFZM2vXilzzHf8b5x_s8unlzVYc24Fpf3Y", imageAlt: "Futuristic data center with blue glowing racks" },
];

export const footerGroups: FooterLinkGroup[] = [
  { title: "Products", links: [
    { label: "Martlyte", href: "/products/martlyte" },
      { label: "Offline POS", href: "/products/offline-pos" },
      { label: "Metalyte", href: "/products/metalyte" },
    { label: "AI Transformation", href: "/services" },
    { label: "Data Engineering", href: "/services" },
    { label: "Platform Modernization", href: "/services" },
    { label: "Digital Strategy", href: "/services" },
  ] },
  { title: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Case Studies", href: "/casestudies" },
    { label: "Explore Martlyte", href: "/products/martlyte" },
  ] },
];