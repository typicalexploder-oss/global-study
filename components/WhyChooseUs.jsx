"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: "🌍",
    title: "Country Guidance",
    text: "We help students and parents understand which country matches their budget, goals, and academic background.",
  },
  {
    icon: "🎓",
    title: "University Selection",
    text: "Shortlist universities based on eligibility, course preference, fees, and long-term career plans.",
  },
  {
    icon: "📝",
    title: "Application Support",
    text: "Get support with documents, applications, admission procedures, and communication with institutions.",
  },
  {
    icon: "✈️",
    title: "Visa Assistance",
    text: "Receive guidance on visa documentation, process timelines, and interview preparation where required.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent-Friendly Counselling",
    text: "We make the process clear for families by explaining costs, safety, living conditions, and student support.",
  },
  {
    icon: "🏠",
    title: "Pre-Departure Support",
    text: "Students receive basic guidance before travel, including accommodation, packing, and arrival preparation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f6f2] dark:bg-gradient-to-b dark:from-[#140D2E] dark:via-[#081B34] dark:to-[#071527] px-6 py-32 text-[#111111] dark:text-white"
    >
      {/* GLOWS */}
      <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* HEADING */}
        <Reveal>
          <div className="mb-20 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">
              Guidance that makes
              <span className="block text-[#F5A623]">
                studying abroad simpler.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65 dark:text-white/65">
              From the first counselling session to admission support, we help
              students and families make confident study abroad decisions with
              professional guidance every step of the way.
            </p>

            {/* STATS */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                ["500+", "Students Guided"],
                ["95%", "Visa Success"],
                ["Top", "Universities"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group rounded-[2rem] border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] px-8 py-6 shadow-[0_10px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:border-[#F5A623]/20 hover:bg-white dark:hover:bg-white/[0.07]"
                >
                  <h3 className="text-4xl font-black text-[#111111] dark:text-white">
                    {value}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-black/50 dark:text-white/50">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* DIVIDER */}
        <div className="mb-20 h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

        {/* FEATURE CARDS */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal
              delay={index * 0.08}
              key={feature.title}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] p-8 shadow-[0_15px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition duration-500 hover:border-[#F5A623]/20 hover:bg-[#fffdf8] dark:hover:bg-white/[0.07]"
              >
                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                  <div className="absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-white/10 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
                </div>

                {/* TOP GLOW */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* ICON */}
                  <div className="mb-7 flex h-18 w-18 items-center justify-center rounded-[1.7rem] border border-[#F5A623]/20 bg-[#F5A623]/10 text-4xl shadow-[0_0_60px_rgba(245,166,35,0.15)] dark:shadow-[0_0_60px_rgba(245,166,35,0.2)] backdrop-blur-xl">
                    {feature.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-black tracking-[-0.03em] text-[#111111] dark:text-white">
                    {feature.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-5 leading-8 text-black/65 dark:text-white/65">
                    {feature.text}
                  </p>

                  {/* ARROW */}
                  <div className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A623] opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn More
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}