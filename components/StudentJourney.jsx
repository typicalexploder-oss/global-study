"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Free Counselling",
    text: "We begin with a personalized consultation to understand your academic goals, career plans, and budget expectations.",
  },
  {
    number: "02",
    title: "Country & Course Selection",
    text: "Students receive expert guidance to identify the best countries, universities, and programs for their future.",
  },
  {
    number: "03",
    title: "University Shortlisting",
    text: "We shortlist universities based on eligibility, affordability, global ranking, and long-term opportunities.",
  },
  {
    number: "04",
    title: "Application Processing",
    text: "Our team assists with documentation, applications, statement reviews, and communication with universities.",
  },
  {
    number: "05",
    title: "Admission Letter",
    text: "Receive admission offers and guidance on choosing the best university option confidently.",
  },
  {
    number: "06",
    title: "Visa Guidance",
    text: "Students receive complete visa process support including document preparation and interview guidance.",
  },
  {
    number: "07",
    title: "Travel & Pre-Departure",
    text: "We help students prepare for departure with accommodation guidance, travel planning, and arrival support.",
  },
];

export default function StudentJourney() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF4FF] px-6 py-32 text-[#071527]"
    >
      {/* GLOWS */}
      <div className="absolute left-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, black 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* HEADING */}
        <Reveal>
          <div className="mb-24 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">
              Student Journey
            </p>

            <h2 className="text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">
              A seamless journey
              <span className="block text-[#F5A623]">
                from counselling to campus.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#071527]/65">
              Every student journey is guided with professional support, clarity,
              and structured planning from the first counselling session to
              successful university admission abroad.
            </p>
          </div>
        </Reveal>

        {/* TIMELINE */}
        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#F5A623]/50 via-[#071527]/10 to-transparent lg:block" />

          {/* TIMELINE STEPS */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Reveal
                delay={index * 0.08}
                key={step.number}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-start ${
                    index % 2 === 1 ? "lg:translate-x-12" : ""
                  }`}
                >
                  {/* NUMBER */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#F5A623]/30 bg-white/70 text-2xl font-black text-[#F5A623] shadow-[0_0_50px_rgba(245,166,35,0.15)] backdrop-blur-2xl">
                    {step.number}

                    {/* INNER GLOW */}
                    <div className="absolute inset-0 rounded-full bg-[#F5A623]/10 blur-xl" />
                  </div>

                  {/* CONTENT CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-[2.7rem] border border-black/10 bg-white/70 p-10 shadow-[0_15px_70px_rgba(0,0,0,0.08)] backdrop-blur-3xl transition duration-500 hover:border-[#F5A623]/20 hover:shadow-[0_20px_100px_rgba(245,166,35,0.15)] lg:max-w-3xl"
                  >
                    {/* SHINE EFFECT */}
                    <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                      <div className="absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-white/40 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
                    </div>

                    {/* TOP LIGHT */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
                        Step {step.number}
                      </p>

                      <h3 className="mt-4 text-4xl font-black tracking-[-0.03em] text-[#071527]">
                        {step.title}
                      </h3>

                      <p className="mt-6 leading-8 text-[#071527]/65">
                        {step.text}
                      </p>

                      {/* ARROW */}
                      <div className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A623] opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        Continue Journey
                        <span>→</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}