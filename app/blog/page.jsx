"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const featuredBlogs = [
  {
    title: "Complete Student Visa Guide for 2026",
    slug: "student-visa-guide",
    category: "Visa Guide",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Top Countries for International Students",
    slug: "top-countries-international-students",
    category: "Study Abroad",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Scholarships Every Student Should Know",
    slug: "scholarships-students-should-know",
    category: "Scholarships",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Best MBBS Universities in Romania",
    slug: "mbbs-romania",
    category: "Medical Education",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How to Get Scholarships in Germany",
    slug: "scholarships-germany",
    category: "Scholarships",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Student Accommodation Guide Abroad",
    slug: "student-accommodation-guide",
    category: "Student Life",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

const latestNews = [
  {
    title: "Germany expands post-study work opportunities for international students",
    tag: "Latest News",
  },
  {
    title: "Singapore universities announce new AI-focused programs",
    tag: "Education Update",
  },
  {
    title: "Romania introduces simplified student visa processing",
    tag: "Visa News",
  },
  {
    title: "New scholarship opportunities launched for 2026 intakes",
    tag: "Scholarships",
  },
];

const categories = [
  "Student Visas",
  "Scholarships",
  "University Rankings",
  "Student Life",
  "Admissions",
  "Accommodation",
  "Career Opportunities",
  "Study Tips",
];

const guides = [
  {
    title: "How to Prepare a Strong SOP",
    text: "Learn how to craft a compelling Statement of Purpose for international university applications.",
  },
  {
    title: "Budget Planning for Studying Abroad",
    text: "Understand tuition, accommodation, and living costs before choosing your destination.",
  },
  {
    title: "How Scholarships Work Internationally",
    text: "Explore merit-based, need-based, and university-funded scholarship opportunities.",
  },
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-36 md:px-6 md:pb-24 md:pt-40">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                Global Study Insights
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                News, insights &
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  study abroad guidance.
                </span>
              </h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED BLOGS */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredBlogs.map((blog, index) => (
              <Reveal
                key={blog.title}
                delay={index * 0.08}
              >
                <Link href={`/blog/${blog.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] cursor-pointer"
                  >
                    <div className="relative h-[260px] overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      <div className="absolute bottom-6 left-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                          {blog.category}
                        </p>

                        <h3 className="mt-2 text-3xl font-black leading-tight text-white">
                          {blog.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B45309]">
                        {blog.date}
                      </p>

                      <p className="mt-5 leading-8 text-black/60">
                        Explore detailed insights, admission strategies, and
                        international education opportunities.
                      </p>

                      <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-[#B45309]">
                        Read Article →
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}