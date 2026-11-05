import React from 'react';

export interface ProjectModalData {
  title: string;
  category: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

export interface ProjectItem extends ProjectModalData {
  id: number;
  colSpan: string;
  badge: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface ToolItem {
  name: string;
  icon?: string;
  svg?: React.ReactNode;
}
