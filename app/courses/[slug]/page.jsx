"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const courses = {
  mbbs: {
    title: "MBBS",
    category: "Medical Studies",
    duration: "5 - 6 Years",
    tuition: "$4,000 - $12,000 / year",
    salary: "$60,000 - $250,000+",
    intake: "September & February",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1800&auto=format&fit=crop",
    overview:
      "MBBS programs prepare students for careers in medicine, surgery, healthcare, and clinical sciences through practical training and academic excellence.",
    eligibility:
      "High school completion with Biology, Chemistry, and Physics. English proficiency may be required.",
    scholarships:
      "Merit scholarships, university grants, healthcare scholarships, and government-funded opportunities.",
    careers:
      "Doctor, Surgeon, Medical Researcher, Hospital Specialist, Public Health Expert, and Healthcare Consultant.",
    curriculum: [
      "Human Anatomy",
      "Physiology",
      "Pathology",
      "Surgery",
      "Clinical Training",
      "Medical Ethics",
    ],
    universities: [
      "Carol Davila University",
      "Tbilisi State Medical University",
      "University of Debrecen",
    ],
    faqs: [
      {
        q: "Is MBBS abroad recognized internationally?",
        a: "Many universities offer globally recognized medical degrees approved by international medical councils.",
      },
      {
        q: "Can students practice in other countries after graduation?",
        a: "Graduates may need to clear licensing exams depending on the country they wish to practice in.",
      },
    ],
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    category: "Technology & Innovation",
    duration: "3 - 4 Years",
    tuition: "$6,000 - $20,000 / year",
    salary: "$80,000 - $300,000+",
    intake: "January & August",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Artificial Intelligence programs focus on machine learning, automation, neural networks, robotics, and future technologies.",
    eligibility:
      "Strong mathematics and computer science background with English proficiency.",
    scholarships:
      "STEM scholarships, innovation grants, and research funding opportunities.",
    careers:
      "AI Engineer, Machine Learning Specialist, Data Scientist, Robotics Engineer, and AI Researcher.",
    curriculum: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Data Science",
      "Robotics",
      "AI Ethics",
    ],
    universities: [
      "Technical University of Munich",
      "National University of Singapore",
      "MIT",
    ],
    faqs: [
      {
        q: "Is AI a good career choice?",
        a: "AI is one of the fastest-growing and highest-paying industries globally.",
      },
      {
        q: "Do AI students need coding experience?",
        a: "Basic programming knowledge is highly recommended before starting.",
      },
    ],
  },
};

export default function CoursePage({ params }) {
  const resolvedParams = use(params);
  const course = courses[resolvedParams.slug];

  if (!course) {
    notFound();
  }

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
        <div className="absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

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
      <section className="relative px-5 pb-16 pt-40 md:px-6 md:pb-24 md:pt-44">
        <div className="container-custom">
          <div className="mb-14">
            <Link
              href="/courses"
              className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#07182B] backdrop-blur-xl transition hover:bg-[#07182B] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
            >
              ← Back to Courses
            </Link>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                  {course.category}
                </p>

                <h1 className="max-w-5xl break-words text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                  {course.title}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65 dark:text-white/65">
                  {course.overview}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {course.curriculum.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#07182B] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[3rem] border border-black/10 shadow-[0_30px_120px_rgba(0,0,0,0.12)] dark:border-white/10 dark:shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-[500px] w-full object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Duration", course.duration],
              ["Tuition Fees", course.tuition],
              ["Future Salary", course.salary],
              ["Intakes", course.intake],
            ].map(([title, value]) => (
              <Reveal key={title}>
                <div className="rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    {title}
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight">
                    {value}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          {/* DETAILS */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[3rem] border border-black/10 bg-white/85 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Eligibility
                </p>

                <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                  {course.eligibility}
                </p>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Scholarships
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                    {course.scholarships}
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Career Opportunities
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                    {course.careers}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[3rem] border border-black/10 bg-white/85 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Top Universities
                </p>

                <div className="mt-8 space-y-5">
                  {course.universities.map((uni) => (
                    <div
                      key={uni}
                      className="rounded-2xl border border-black/10 bg-[#F7F9FC] p-5 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <h3 className="text-xl font-bold">{uni}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}