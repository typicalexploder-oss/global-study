"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
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
                About Global Study
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Building global
                <span className="inline-block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  {" "}
                  student futures.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg md:text-xl md:leading-9">
                Global Study Abroad Consultants helps students discover world-class
                education opportunities across leading international destinations.
                From career-focused counselling to university admissions and visa
                support, we guide students at every stage of their journey abroad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center md:gap-20">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Our Mission
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Making international education accessible.
              </h2>

              <p className="mt-6 text-base leading-8 text-black/60 sm:text-lg">
                We believe every student deserves access to quality global education
                opportunities regardless of background. Our mission is to simplify
                the study abroad process with honest guidance, transparency, and
                personalized support.
              </p>

              <p className="mt-6 text-base leading-8 text-black/60 sm:text-lg">
                From choosing the right destination to preparing for life abroad,
                our team supports students and families with clarity and confidence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:p-10"
            >
              <div className="space-y-8">
                {[
                  [
                    "Global Guidance",
                    "Helping students explore trusted international pathways.",
                  ],
                  [
                    "Career-Focused Planning",
                    "Aligning education choices with long-term success.",
                  ],
                  [
                    "Student-Centered Support",
                    "Personalized counselling from application to departure.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="flex gap-5"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#B45309]">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#111111]">
                        {title}
                      </h3>

                      <p className="mt-2 leading-7 text-black/60">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Why Students Choose Us
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Trusted guidance with a global vision.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Counselling",
                text: "Personalized advice tailored to every student's academic goals.",
              },
              {
                title: "University Access",
                text: "Connections with recognized international universities.",
              },
              {
                title: "Visa Assistance",
                text: "Step-by-step support for documentation and applications.",
              },
              {
                title: "Transparent Guidance",
                text: "Clear communication for students and parents throughout the process.",
              },
              {
                title: "Career-Oriented Planning",
                text: "Helping students choose future-focused educational pathways.",
              },
              {
                title: "Pre-Departure Support",
                text: "Preparation for accommodation, travel, and student life abroad.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition duration-500"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-2xl text-[#B45309]">
                    ✦
                  </div>

                  <h3 className="text-2xl font-black text-[#111111]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-black/60">
                    {item.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["500+", "Students Guided"],
              ["95%", "Visa Success"],
              ["5+", "Study Destinations"],
              ["Top", "Global Universities"],
            ].map(([value, label], index) => (
              <Reveal
                key={label}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/5 bg-white p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-5xl font-black text-[#B45309]">
                    {value}
                  </h3>

                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-black/45">
                    {label}
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
              className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#F5A623]/15 via-white/[0.03] to-[#7C3AED]/10 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.4)] backdrop-blur-3xl md:p-16"
            >
              <div className="absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Start Your Journey
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Your international future starts here.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Speak with our team and discover the right global education
                  pathway designed around your academic and career ambitions.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/contact"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Book Free Consultation
                  </a>

                  <a
                    href="/countries/romania"
                    className="w-fit rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                  >
                    Explore Destinations
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}