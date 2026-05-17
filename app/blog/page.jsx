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
    title:
      "Germany expands post-study work opportunities for international students",
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
    <main className="relative overflow-hidden bg-[#F7F9FC] text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white">
      {/* LIGHT GLOWS */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-[#F5A623]/18 blur-[120px]" />

        <div className="absolute right-[-10%] top-40 h-[420px] w-[420px] rounded-full bg-cyan-400/14 blur-[130px]" />

        <div className="absolute bottom-[-10%] left-1/3 h-[340px] w-[340px] rounded-full bg-purple-400/12 blur-[120px]" />
      </div>

      {/* DARK GLOWS */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

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

              <p className="mt-8 max-w-3xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg md:text-xl md:leading-9">
                Explore expert articles, admission strategies, scholarship
                opportunities, visa updates, and international student guidance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED BLOGS */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Featured Articles
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Explore the latest study abroad insights.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredBlogs.map((blog, index) => (
              <Reveal
                key={blog.title}
                delay={index * 0.08}
              >
                <Link href={`/blog/${blog.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/85 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 cursor-pointer dark:border-white/10 dark:bg-white/[0.04]"
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

                      <p className="mt-5 leading-8 text-black/60 dark:text-white/60">
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

      {/* LATEST NEWS */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 transition-colors duration-500 dark:bg-[#06121F] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Latest Updates
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                Global education news & updates.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {latestNews.map((news, index) => (
              <Reveal
                key={news.title}
                delay={index * 0.06}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    {news.tag}
                  </p>

                  <h3 className="mt-5 text-2xl font-black leading-tight text-[#07182B] dark:text-white">
                    {news.title}
                  </h3>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 transition-colors duration-500 dark:bg-[#06121F] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Explore Topics
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                Browse articles by category.
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <Reveal
                key={category}
                delay={index * 0.04}
              >
                <motion.button
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-black/10 bg-white/85 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B45309] shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {category}
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 transition-colors duration-500 dark:bg-[#06121F] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Student Guides
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                Essential preparation resources.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <Reveal
                key={guide.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <h3 className="text-3xl font-black text-[#07182B] dark:text-white">
                    {guide.title}
                  </h3>

                  <p className="mt-6 leading-8 text-black/60 dark:text-white/60">
                    {guide.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}