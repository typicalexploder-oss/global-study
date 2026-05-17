"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const courses = [
  {
    title: "MBBS",
    slug: "mbbs",
    text: "Globally recognized medical education opportunities with affordable tuition and international exposure.",
    icon: "🩺",
  },
  {
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    text: "Explore emerging technologies shaping the future of innovation, automation, and analytics.",
    icon: "🤖",
  },
  {
    title: "Business Management",
    slug: "business-management",
    text: "Develop leadership, entrepreneurship, and global business expertise.",
    icon: "📈",
  },

  {
    slug: "online-mba",
    title: "Online MBA",
    country: "India",
    duration: "2 Years",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },

  {
    slug: "online-bca",
    title: "Online BCA",
    country: "India",
    duration: "3 Years",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
];

const destinations = ["Romania", "Germany", "Singapore"];

export default function CoursesPage() {
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

        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#F5A623]/10 blur-3xl" />
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
      <section className="relative overflow-hidden px-5 pb-16 pt-36 md:px-6 md:pb-24 md:pt-40">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                Courses & Programs
              </p>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl lg:text-8xl">
                Explore future-ready
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  global education pathways.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg md:text-xl md:leading-9">
                Discover internationally recognized programs across leading
                study destinations with strong academic foundations, career
                opportunities, and global exposure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Popular Courses
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Academic programs designed for global careers.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Reveal
                key={course.title}
                delay={index * 0.05}
              >
                <Link href={`/courses/${course.slug}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group cursor-pointer rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-3xl transition duration-500 group-hover:scale-110">
                      {course.icon || "🎓"}
                    </div>

                    <h3 className="text-2xl font-black text-[#07182B] dark:text-white">
                      {course.title}
                    </h3>

                    <p className="mt-5 leading-8 text-black/60 dark:text-white/60">
                      {course.text ||
                        "Explore internationally recognized academic programs with strong career opportunities and future-focused learning."}
                    </p>

                    <div className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[#B45309]">
                      Explore →
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom grid gap-10 md:gap-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Global Opportunities
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Study in leading international destinations.
              </h2>

              <p className="mt-8 text-base leading-8 text-black/60 dark:text-white/60 sm:text-lg">
                Our partner destinations provide internationally recognized
                education, strong career pathways, and modern student
                experiences for ambitious learners worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {destinations.map((destination, index) => (
              <Reveal
                key={destination}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-black/10 bg-white/85 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <h3 className="text-3xl font-black text-[#07182B] dark:text-white">
                    {destination}
                  </h3>

                  <p className="mt-4 text-black/60 dark:text-white/60">
                    Explore top universities and globally recognized academic
                    programs.
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 pt-10 md:px-6 md:pb-32">
        <div className="container-custom">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-gradient-to-br from-[#F5A623]/10 via-white/80 to-cyan-100/70 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl transition-all duration-500 dark:border-white/10 dark:from-[#F5A623]/15 dark:via-white/[0.03] dark:to-[#7C3AED]/10 dark:shadow-[0_25px_100px_rgba(0,0,0,0.4)] md:p-16"
            >
              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Start Exploring
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                  Discover the right course for your future.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg">
                  Connect with our expert counsellors and explore
                  internationally recognized academic programs tailored to your
                  goals.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Book Free Consultation
                  </Link>

                  <Link
                    href="/countries/romania"
                    className="w-fit rounded-full border border-black/10 bg-white/70 px-8 py-4 font-semibold text-[#07182B] transition hover:bg-[#07182B] hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
                  >
                    Explore Destinations
                  </Link>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}