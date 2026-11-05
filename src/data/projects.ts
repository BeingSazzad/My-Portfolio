import { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Influverse — Creator & Influencer Marketplace',
    category: 'Full-Stack Web App · Marketplace & Escrow',
    badge: 'FLAGSHIP PRODUCT',
    description:
      'Two-sided creator marketplace connecting global brands with verified social creators and UGC talent. Designed and built the entire design system, brand discovery portal, escrow payment workflows, and dual-perspective workspace with Next.js and Tailwind CSS.',
    image: '/assets/images/project-influverse.png',
    colSpan: 'col-span-1 md:col-span-12',
    tags: ['Next.js', 'Tailwind CSS', 'Marketplace UX', 'Design System', 'Escrow Billing', 'Dual Workspace'],
  },
  {
    id: 2,
    title: 'LandlordHQ — Property & Tenant Management',
    category: 'Mobile & Web System · Real Estate & PropTech',
    badge: 'GITHUB & VERCEL',
    description:
      'Complete property management ecosystem connecting landlords, tenants, and maintenance contractors. Features automated rent ledgers, instant work-order dispatching, and mobile-first tenant onboarding flows.',
    image: '/assets/images/project-landlord.png',
    colSpan: 'col-span-1 md:col-span-6',
    githubUrl: 'https://github.com/BeingSazzad/Landlord-Dashbaord',
    tags: ['PropTech', 'Mobile UX', 'Contractor Portal', 'Rent Tracking', 'Vercel Deployment'],
  },
  {
    id: 3,
    title: 'Shxsh — Community Kindness Social App',
    category: 'Mobile Product · Google Play · UI/UX Design',
    badge: 'LIVE ON GOOGLE PLAY',
    description:
      'Positive social networking platform engineered to foster community kindness and uplifting messaging. Crafted the complete mobile UI/UX experience: engagement feeds, user streaks, direct messaging, and frictionless onboarding.',
    image: '/assets/images/project-01.jpg',
    colSpan: 'col-span-1 md:col-span-6',
    tags: ['Android UI/UX', 'Google Play', 'Community Feed', 'Gamification Streaks', 'Design Tokens'],
  },
  {
    id: 4,
    title: 'MamaCare — Diaspora Caregiver Network',
    category: 'Mobile Product · Healthcare & Childcare',
    badge: 'ACTIVE PRODUCT',
    description:
      'Childcare platform connecting African diaspora families with vetted, trusted caregivers. Designed multi-step caregiver identity verification, calendar booking flows, and instant safety support channels.',
    image: '/assets/images/project-02.jpg',
    colSpan: 'col-span-1 md:col-span-6',
    tags: ['Caregiver Matching', 'Verification UX', 'Calendar Booking', 'Trust Architecture', 'Figma'],
  },
  {
    id: 5,
    title: 'Investors Hub — Property Network',
    category: 'Web Platform · Fintech & Real Estate',
    badge: 'LIVE & MONETIZED',
    description:
      'Exclusive off-market property investor network built for South Africa (investors-hub.co.za). Architected anonymous investor chat rooms, verified tier access, interactive listing feeds, and subscription billing flows.',
    image: '/assets/images/project-03.jpg',
    colSpan: 'col-span-1 md:col-span-6',
    tags: ['Fintech UX', 'Subscription Billing', 'Real Estate', 'Tiered Access', 'South Africa'],
  },
  {
    id: 6,
    title: 'EduFuture IT — EdTech & IT Training Platform',
    category: 'Web Platform · Education & Training',
    badge: 'LIVE PLATFORM',
    description:
      'Leading Bangladeshi IT training and skill-development platform (edufutureit.com). Delivered full UI/UX design featuring intuitive course discovery, trainer onboarding portals, student success showcases, and seminar scheduling systems.',
    image: '/assets/images/project-04.jpg',
    colSpan: 'col-span-1 md:col-span-12',
    tags: ['EdTech', 'LMS Architecture', 'Course Discovery', 'Conversion Funnel', 'Figma Systems'],
  },
];
