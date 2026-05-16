"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function ApplyPage() {
  return (
    <main className="relative overflow-hidden bg-[#070707] text-white">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/20 blur-3xl" />

      <div className="absolute right-[-100px] top-40 h-[380px] w-[380px] rounded-full bg-[#F5A623]/20 blur-3xl" />

      <div className="absolute bottom-[-120px] left-1/3 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-5 pb-14 pt-36 md:px-6 md:pb-20 md:pt-44">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                Student Application Portal
              </p>

              <h1 className="text-4xl font-black leading-[0.92] tracking-[-0.06em] sm:text-5xl md:text-7xl lg:text-8xl">
                Apply for your
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#FFF3C4] bg-clip-text text-transparent">
                  dream international future.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg md:text-xl md:leading-9">
                Connect with our global education advisors and receive
                personalized guidance for admissions, scholarships, visas,
                universities, and career opportunities abroad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative px-5 pb-28 md:px-6 md:pb-36">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* FORM */}
            <Reveal>
              <motion.div
                whileHover={{ y: -3 }}
                className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl md:p-12"
              >
                {/* INNER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className="text-3xl font-black md:text-4xl">
                      Application Form
                    </h2>

                    <p className="mt-4 text-white/55">
                      Fill out your details and our expert advisors will contact
                      you shortly.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* NAME */}
                    <div className="md:col-span-2">
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-[#F5A623] focus:bg-white/[0.07]"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-[#F5A623] focus:bg-white/[0.07]"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-[#F5A623] focus:bg-white/[0.07]"
                      />
                    </div>

                    {/* COUNTRY */}
                    <div>
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Preferred Country
                      </label>

                      <select className="w-full rounded-2xl border border-white/10 bg-[#111111] px-6 py-4 text-white outline-none transition duration-300 focus:border-[#F5A623]">
                        <option>India</option>
                        <option>Romania</option>
                        <option>Germany</option>
                        <option>Singapore</option>
                      </select>
                    </div>

                    {/* COURSE */}
                    <div>
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Preferred Course
                      </label>

                      <select className="w-full rounded-2xl border border-white/10 bg-[#111111] px-6 py-4 text-white outline-none transition duration-300 focus:border-[#F5A623]">
                        <option>MBBS</option>
                        <option>Artificial Intelligence</option>
                        <option>Business Management</option>
                      </select>
                    </div>

                    {/* BUDGET */}
                    <div className="md:col-span-2">
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Budget Range
                      </label>

                      <select className="w-full rounded-2xl border border-white/10 bg-[#111111] px-6 py-4 text-white outline-none transition duration-300 focus:border-[#F5A623]">
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $20,000</option>
                        <option>$20,000+</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div className="md:col-span-2">
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        Additional Information
                      </label>

                      <textarea
                        rows="5"
                        placeholder="Tell us about your goals, preferred universities, academic background, or any questions..."
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-[#F5A623] focus:bg-white/[0.07]"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <a
  href="/success"
  className="inline-block mt-10 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD27A] px-10 py-4 font-bold text-[#111111] shadow-[0_10px_40px_rgba(245,166,35,0.35)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_15px_60px_rgba(245,166,35,0.45)]"
>
  Submit Application →
</a>
                </div>
              </motion.div>
            </Reveal>

            {/* RIGHT SIDE */}
            <Reveal delay={0.08}>
              <div className="space-y-6">
                {[
                  {
                    icon: "🎓",
                    title: "Personalized Guidance",
                    text: "Get expert counselling tailored to your academic goals, future career plans, and preferred destinations.",
                  },
                  {
                    icon: "🌍",
                    title: "Global Universities",
                    text: "Access internationally recognized institutions with scholarships, internships, and global exposure.",
                  },
                  {
                    icon: "✈️",
                    title: "Visa & Admission Support",
                    text: "Receive complete support for admissions, visa processing, documentation, and onboarding.",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

                    <div className="relative z-10">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-3xl">
                        {card.icon}
                      </div>

                      <h3 className="text-3xl font-black">
                        {card.title}
                      </h3>

                      <p className="mt-5 leading-8 text-white/60">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}