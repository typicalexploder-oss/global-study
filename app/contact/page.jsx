"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const contactCards = [
  {
    title: "Email Us",
    text: "Connect with our team for guidance and student support.",
    value: "info@globalstudy.com",
    icon: "✉️",
  },
  {
    title: "Call Us",
    text: "Speak directly with our international education advisors.",
    value: "+91 98765 43210",
    icon: "📞",
  },
  {
    title: "Visit Office",
    text: "Meet our counsellors and discuss your future plans.",
    value: "Kochi, Kerala, India",
    icon: "📍",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* GLOWS */}
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
                Contact Us
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Let’s plan your
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  global education journey.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg md:text-xl md:leading-9">
                Connect with our international education experts and receive
                personalized guidance for courses, universities, scholarships,
                visas, and student life abroad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-3xl">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-black text-[#111111]">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-8 text-black/60">
                    {card.text}
                  </p>

                  <p className="mt-6 text-lg font-semibold text-[#B45309]">
                    {card.value}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-start md:gap-20">
          {/* LEFT */}
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Start Your Journey
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Speak with our global education experts.
              </h2>

              <p className="mt-8 text-base leading-8 text-black/60 sm:text-lg">
                Whether you're exploring study destinations, choosing a course,
                or preparing your application, our team is here to guide you at
                every step.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "Personalized counselling sessions",
                  "Course & university recommendations",
                  "Scholarship & visa guidance",
                  "Application assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#B45309]">
                      ✓
                    </div>

                    <p className="text-lg text-black/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:p-10"
            >
              <form className="space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-black/10 bg-[#F8F6F2] px-5 py-4 text-[#111111] outline-none transition focus:border-[#F5A623]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-black/10 bg-[#F8F6F2] px-5 py-4 text-[#111111] outline-none transition focus:border-[#F5A623]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                    Preferred Destination
                  </label>

                  <select className="w-full rounded-2xl border border-black/10 bg-[#F8F6F2] px-5 py-4 text-[#111111] outline-none transition focus:border-[#F5A623]">
                    <option>Choose destination</option>
                    <option>Germany</option>
                    <option>Romania</option>
                    <option>Singapore</option>
                    <option>Thailand</option>
                    <option>China</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-2xl border border-black/10 bg-[#F8F6F2] px-5 py-4 text-[#111111] outline-none transition focus:border-[#F5A623]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Global Reach
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Supporting students across international destinations.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {["Germany", "Romania", "Singapore", "Thailand", "China"].map(
              (country, index) => (
                <Reveal
                  key={country}
                  delay={index * 0.08}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                  >
                    <h3 className="text-2xl font-black text-[#111111]">
                      {country}
                    </h3>

                    <p className="mt-4 text-black/60">
                      Universities, scholarships, and student support services.
                    </p>
                  </motion.div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Quick Answers
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Frequently asked questions.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                q: "Do you help with visa applications?",
                a: "Yes, we provide complete visa guidance including documentation and interview preparation.",
              },
              {
                q: "Can I get scholarship assistance?",
                a: "Absolutely. We help students explore available scholarships and financial aid opportunities.",
              },
              {
                q: "Do you support accommodation arrangements?",
                a: "Yes, we guide students with accommodation and pre-departure preparation.",
              },
            ].map((faq, index) => (
              <Reveal
                key={faq.q}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-2xl font-black text-[#111111]">
                    {faq.q}
                  </h3>

                  <p className="mt-4 leading-8 text-black/60">
                    {faq.a}
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
                  Ready to Begin?
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Your future abroad starts with one conversation.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Speak with our expert advisors and take the first step toward
                  your international education journey.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/services"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Explore Services
                  </a>

                  <a
                    href="/universities"
                    className="w-fit rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                  >
                    View Universities
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