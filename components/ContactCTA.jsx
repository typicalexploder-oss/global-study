"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8f6f2] dark:bg-gradient-to-br dark:from-[#06121F] dark:via-[#081A2E] dark:to-[#1A1028] px-5 py-20 text-[#071527] dark:text-white md:px-6 md:py-32"
    >
      {/* GLOWS */}
      <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

      <div className="absolute right-0 top-20 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-3xl md:h-[400px] md:w-[400px]" />

      <div className="absolute bottom-0 left-1/3 h-[220px] w-[220px] rounded-full bg-[#F5A623]/10 blur-3xl md:h-[350px] md:w-[350px]" />

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

      <div className="container-custom relative z-10 grid gap-12 md:gap-20 lg:grid-cols-2 lg:items-center">
        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
              Start Your Journey
            </p>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Ready to build
              <span className="block text-[#F5A623]">
                your future abroad?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#071527]/65 dark:text-white/65 sm:text-lg">
              Speak with our expert counsellors and receive personalized guidance
              for choosing the right country, course, and university for your
              academic journey.
            </p>

            {/* TRUST POINTS */}
            <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
              {[
                "Personalized counselling for every student",
                "Guidance for admissions and visa process",
                "Support from application to departure",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 md:gap-5"
                >
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#F5A623]/20 bg-[#F5A623]/10 text-[#F5A623] shadow-[0_0_40px_rgba(245,166,35,0.15)] backdrop-blur-xl transition duration-300 group-hover:scale-110 md:h-12 md:w-12">
                    ✓

                    <div className="absolute inset-0 rounded-full bg-[#F5A623]/10 blur-xl" />
                  </div>

                  <p className="text-base text-[#071527]/75 dark:text-white/75 md:text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-12 flex flex-wrap gap-4 md:mt-14 md:gap-6">
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
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] px-6 py-5 shadow-[0_10px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition duration-500 hover:border-[#F5A623]/20 hover:bg-[#fffdf8] dark:hover:bg-white/[0.06] md:px-8 md:py-6"
                >
                  <h3 className="text-3xl font-black text-[#071527] dark:text-white md:text-4xl">
                    {value}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-black/50 dark:text-white/50 sm:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.15}>
          <motion.form
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] p-6 shadow-[0_25px_100px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl md:rounded-[3rem] md:p-10"
          >
            {/* SHINE */}
            <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
              <div className="absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-white/20 dark:bg-white/10 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
            </div>

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
            </div>

            {/* TOP LIGHT */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-8 md:mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Free Consultation
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#071527] dark:text-white md:text-4xl">
                  Let’s discuss your future.
                </h3>
              </div>

              <div className="grid gap-4 md:gap-5">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                    Student Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-4 py-4 text-[#071527] dark:text-white outline-none transition placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#F5A623]/40 focus:bg-black/[0.05] dark:focus:bg-white/[0.08] md:px-5"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-4 py-4 text-[#071527] dark:text-white outline-none transition placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#F5A623]/40 focus:bg-black/[0.05] dark:focus:bg-white/[0.08] md:px-5"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-4 py-4 text-[#071527] dark:text-white outline-none transition placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#F5A623]/40 focus:bg-black/[0.05] dark:focus:bg-white/[0.08] md:px-5"
                  />
                </div>

                {/* COUNTRY */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                    Preferred Country
                  </label>

                  <select className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-4 py-4 text-[#071527] dark:text-white outline-none transition focus:border-[#F5A623]/40 focus:bg-black/[0.05] dark:focus:bg-white/[0.08] md:px-5">
                    <option className="bg-white dark:bg-[#06121F]">
                      Select Country
                    </option>

                    <option className="bg-white dark:bg-[#06121F]">
                      Romania
                    </option>

                    <option className="bg-white dark:bg-[#06121F]">
                      Germany
                    </option>

                    <option className="bg-white dark:bg-[#06121F]">
                      Singapore
                    </option>

                    <option className="bg-white dark:bg-[#06121F]">
                      Thailand
                    </option>

                    <option className="bg-white dark:bg-[#06121F]">
                      China
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us about your study goals"
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-4 py-4 text-[#071527] dark:text-white outline-none transition placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#F5A623]/40 focus:bg-black/[0.05] dark:focus:bg-white/[0.08] md:px-5"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="mt-3 w-full rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD27A] px-8 py-4 text-base font-bold text-[#06121F] shadow-[0_0_50px_rgba(245,166,35,0.25)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(245,166,35,0.35)] md:mt-4 md:text-lg"
                >
                  Book Free Consultation
                </motion.button>
              </div>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}