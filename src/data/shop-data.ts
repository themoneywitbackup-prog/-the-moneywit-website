import type { ImageMetadata } from 'astro'

import financialPlanningTool from '@/modules/digital-hub/assets/financial-planning-tool.jpg'
import firstTimeMom from '@/modules/digital-hub/assets/first-time-mom.jpg'
import beatTheOdds from '@/modules/digital-hub/assets/beat-the-odds.jpg'
import whereAndHowToInvest from '@/modules/digital-hub/assets/where-and-how-to-invest.jpg'
import personalFinanceLab from '@/modules/digital-hub/assets/personal-finance-lab.jpg'
import privateFinanceSession from '@/modules/digital-hub/assets/private-finance-session.jpg'

export type Path = "invest" | "finances";
export type Category = "Tools" | "Products" | "Courses" | "Bespoke Sessions";
export type ProductAssignment = { path: Path; category: Category };

export type Product = {
  id: string;
  name: string;
  assignments: ProductAssignment[];
  short: string;
  description: string;
  price: string;
  priceNumeric: number | null;
  image: ImageMetadata;
  href: string;
  cta: string;
  featured?: boolean;
};

export type Bundle = {
  id: string;
  name: string;
  description: string;
  includes: string[];
  price: string;
  href: string;
  cta: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  context?: string;
};

export const CATEGORY_ORDER: Category[] = [
  "Tools",
  "Products",
  "Courses",
  "Bespoke Sessions",
];

export const PATHS: Record<Path, {
  title: string;
  kicker: string;
  tagline: string;
  blurb: string;
  slug: string;
  other: Path;
}> = {
  finances: {
    slug: "finances",
    title: "I Want to Put My Finances in Order",
    kicker: "Organize Your Finances",
    tagline: "Take control of your money, one intentional step at a time.",
    blurb: "Diagnose your money, build the right habits, and use the tools the Money Wit team uses every day.",
    other: "invest",
  },
  invest: {
    slug: "invest",
    title: "I Want to Build My Wealth",
    kicker: "Invest",
    tagline: "Turn income into lasting wealth.",
    blurb: "Frameworks, courses, tools and private sessions to help you invest with intention — locally and globally.",
    other: "finances",
  },
};

export const products: Product[] = [
  {
    id: "financial-planning-tool",
    name: "Financial Planning Tool (2026)",
    assignments: [
      { path: "invest", category: "Tools" },
      { path: "finances", category: "Tools" },
    ],
    short: "The plug-and-play planner the Money Wit team uses — built by a CFA, not a spreadsheet expert.",
    description: "Map income, obligations, goals, debt and net worth in one working tool. Built for how real life works in Nigeria — no random templates, no vague advice.",
    price: "NGN 6,999",
    priceNumeric: 6999,
    image: financialPlanningTool,
    href: "https://shop.themoneywit.africa/products/fpt-2026/2782803000013673982",
    cta: "Get the Tool",
    featured: true,
  },
  {
    id: "first-time-mom",
    name: "First Time Mums Shopping List",
    assignments: [
      { path: "invest", category: "Tools" },
      { path: "finances", category: "Tools" },
    ],
    short: "A curated, priced-out checklist for first-time mums who want to spend wisely on baby essentials.",
    description: "A ready-to-use shopping companion for first-time mums — locally and for imports. Skip the overwhelm and buy only what actually matters.",
    price: "NGN 6,500",
    priceNumeric: 6500,
    image: firstTimeMom,
    href: "https://shop.themoneywit.africa/products/first-time-mom-shopping-list/2782803000013673746",
    cta: "Buy Now",
  },
  {
    id: "beat-the-odds",
    name: "Beat the Odds",
    assignments: [{ path: "invest", category: "Products" }],
    short: "A personal finance & investment workshop for professionals ready to secure their money and build wealth in uncertain times.",
    description: "Get the clarity, tools and resources to put your finances in order, secure them from inflation and build sustainable wealth. Led by Oler Oladele, CFA.",
    price: "NGN 300,000",
    priceNumeric: 300000,
    image: beatTheOdds,
    href: "https://oleroladele.com/beat-the-odds/",
    cta: "Join the Workshop",
    featured: true,
  },
  {
    id: "where-and-how-to-invest",
    name: "Where and How To Invest",
    assignments: [{ path: "invest", category: "Courses" }],
    short: "A clear framework for choosing the right instruments for your goals, timeline and risk — across local and global markets.",
    description: "A structured course that removes the guesswork from investing. Learn how to pick instruments that match your goals, allocate across local and global markets.",
    price: "NGN 20,000",
    priceNumeric: 20000,
    image: whereAndHowToInvest,
    href: "https://shop.themoneywit.africa/products/where-and-how-to-invest/2782803000013673808",
    cta: "Buy Course",
    featured: true,
  },
  {
    id: "personal-finance-lab",
    name: "Personal Finance Lab",
    assignments: [{ path: "finances", category: "Courses" }],
    short: "A two-hour diagnostic for working professionals who want to see the truth about their money and finally act on it.",
    description: "Diagnose your finances, bridge the leaks, secure the base, and start compounding. Built for working professionals who want a clear picture and a real plan.",
    price: "NGN 150,000",
    priceNumeric: 150000,
    image: personalFinanceLab,
    href: "https://shop.themoneywit.africa/products/personal-finance-lab/2782803000016525023",
    cta: "Enter the Lab",
    featured: true,
  },
  {
    id: "finance-session",
    name: "Private Finance Session",
    assignments: [
      { path: "invest", category: "Bespoke Sessions" },
      { path: "finances", category: "Bespoke Sessions" },
    ],
    short: "A one-on-one working session on your cashflow, debt, investments and goals with the Money Wit team.",
    description: "Sit down with the Money Wit team on your real numbers. Build a plan that fits your income, obligations and goals — not a generic template.",
    price: "Book to see rates",
    priceNumeric: null,
    image: privateFinanceSession,
    href: "https://themoneywit.africa/contact",
    cta: "Book a Session",
  },
];

export const bundles: Bundle[] = [
  {
    id: "planning-investing",
    name: "Financial Planning + Investing Bundle",
    description: "Plan your money and learn where to put it to work — in one bundle.",
    includes: ["Financial Planning Tool", "Where and How to Invest"],
    price: "NGN 23,000",
    href: "#",
    cta: "Get the Bundle",
  },
  {
    id: "complete-starter",
    name: "Complete Financial Starter Bundle",
    description: "Everything you need to get organised, spend wisely and start investing.",
    includes: ["Financial Planning Tool", "First Time Mums Shopping List", "Where and How to Invest"],
    price: "NGN 23,000",
    href: "#",
    cta: "Get the Bundle",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Like my brain is over calculating some restructuring I need to do. And this is what I have always wanted. I especially loved the financial current state assessment. I started digging for my payslips from 8/10 years ago. So I was so eager to know what good looked like from a ratio standpoint. Came into the session with new realizations!",
    name: "Omorefe",
    context: "Beat the Odds workshop",
  },
  {
    quote: "Simple and practical explanations of concepts that seemed complex. Oler also had an exceptional grasp of exactly what was needed to make informed decisions independently. The workshop was perfect in showing me what to do without telling me what to do. It was exactly what I needed to match the right investments to my goals.",
    name: "Akwugo",
    context: "Beat the Odds workshop",
  },
];

export function productsByPath(path: Path) {
  return products.filter((p) => p.assignments.some((a) => a.path === path));
}

export function categoryForPath(p: Product, path: Path): Category | undefined {
  return p.assignments.find((a) => a.path === path)?.category;
}

export function groupByCategory(list: Product[], path: Path) {
  const map = new Map<Category, Product[]>();
  for (const p of list) {
    const cat = categoryForPath(p, path);
    if (!cat) continue;
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(p);
  }
  return CATEGORY_ORDER.filter((c) => map.has(c)).map(
    (c) => [c, map.get(c)!] as const
  );
}

export function findProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
