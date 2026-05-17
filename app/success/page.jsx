"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function SuccessPage() {
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
        <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/20 blur-3xl" />

        <div className="absolute right-[-120px] top-40 h-[420px] w-[420px] rounded-full bg-[#F5A623]/20 blur-3xl" />
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

      {/* MAIN */}
      <section className="relative flex min-h-screen items-center justify-center px-5 py-32 md:px-6">
        <div className="container-custom relative z-10 max-w-6xl">
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-white/85 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.12)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/[0.05] dark:shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:p-16"
            >
              {/* INNER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />

              <div className="relative z-10 text-center">
                {/* SUCCESS ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#F5A623] to-[#FFD27A] text-5xl text-[#111111] shadow-[0_15px_60px_rgba(245,166,35,0.35)]"
                >
                  ✓
                </motion.div>

                {/* TEXT */}
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                  Application Submitted
                </p>

                <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#07182B] dark:text-white sm:text-5xl md:text-7xl">
                  Your application has
                  <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#FFF3C4] bg-clip-text text-transparent">
                    been successfully received.
                  </span>
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-black/60 dark:text-white/60 sm:text-lg md:text-xl md:leading-9">
                  Our international education advisors will review your details
                  and contact you shortly regarding admissions, scholarships,
                  visa guidance, and university opportunities.
                </p>

                {/* TIMELINE */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                  {[
                    {
                      step: "01",
                      title: "Application Review",
                      text: "Our experts carefully review your academic goals and profile.",
                    },
                    {
                      step: "02",
                      title: "Advisor Consultation",
                      text: "A counsellor will contact you to discuss universities and courses.",
                    },
                    {
                      step: "03",
                      title: "Admission Guidance",
                      text: "Receive complete support for admissions, visas, and scholarships.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.12 }}
                      whileHover={{ y: -4 }}
                      className="rounded-[2rem] border border-black/10 bg-white/85 p-8 text-left shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-lg font-black text-[#F5A623]">
                        {item.step}
                      </div>

                      <h3 className="text-2xl font-black text-[#07182B] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-8 text-black/60 dark:text-white/60">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
                  <Link
                    href="/"
                    className="rounded-full border border-black/10 bg-white/70 px-8 py-4 font-semibold text-[#07182B] transition duration-300 hover:bg-[#07182B] hover:text-white dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
                  >
                    Return Home
                  </Link>

                  <Link
                    href="/courses"
                    className="rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD27A] px-8 py-4 font-bold text-[#111111] shadow-[0_10px_40px_rgba(245,166,35,0.35)] transition duration-300 hover:scale-[1.02]"
                  >
                    Explore More Courses
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