"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 dark:border-white/10 bg-[#f8f6f2] dark:bg-[#040B14] px-5 py-20 text-[#071527] dark:text-white md:px-6 md:py-24">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-3xl md:h-[300px] md:w-[300px]" />

      <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#F5A623]/10 blur-3xl md:h-[300px] md:w-[300px]" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* TOP */}
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-lg font-black backdrop-blur-xl md:h-14 md:w-14 md:text-xl">
                GS
              </div>

              <div>
                <h2 className="text-lg font-black uppercase tracking-[0.25em] md:text-xl md:tracking-[0.3em]">
                  Global Study
                </h2>

                <p className="mt-1 text-sm text-black/40 dark:text-white/40">
                  Abroad Consultants
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-8 text-black/60 dark:text-white/60 md:mt-8 md:text-base">
              Helping students explore global education opportunities with
              professional guidance, university admissions support, and trusted
              counselling for a successful future abroad.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex gap-4">
              {["FB", "IG", "LN"].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ y: -4 }}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-sm font-bold text-black/60 dark:text-white/60 transition duration-300 hover:border-[#F5A623]/20 hover:bg-[#F5A623]/10 hover:text-[#F5A623] md:h-12 md:w-12"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-5">
            <Link
              href="/"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Home
            </Link>

            <Link
              href="/countries/romania"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Destinations
            </Link>

            <Link
              href="/about"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Why Choose Us
            </Link>

            <Link
              href="/success-stories"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Student Journey
            </Link>

            <Link
              href="/contact"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Contact
            </Link>
          </div>

          {/* DESTINATIONS */}
          <div className="space-y-5">
            <Link
              href="/countries/india"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              India
            </Link>

            <Link
              href="/countries/romania"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Romania
            </Link>

            <Link
              href="/countries/germany"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Germany
            </Link>

            <Link
              href="/countries/singapore"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Singapore
            </Link>

            <Link
              href="/countries/thailand"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              Thailand
            </Link>

            <Link
              href="/countries/china"
              className="block text-black/75 transition hover:text-[#F5A623] dark:text-white/75"
            >
              China
            </Link>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
              Contact
            </h3>

            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                  Email
                </p>

                <p className="mt-2 text-sm text-black/70 dark:text-white/70 md:text-base">
                  hello@globalstudy.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                  Phone
                </p>

                <p className="mt-2 text-sm text-black/70 dark:text-white/70 md:text-base">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-sm">
                  Office
                </p>

                <p className="mt-2 text-sm text-black/70 dark:text-white/70 md:text-base">
                  Kochi, Kerala, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent md:my-14" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <p className="text-xs text-black/40 dark:text-white/40 sm:text-sm">
            © 2026 Global Study Abroad Consultants. All rights reserved.
          </p>

          <p className="text-xs text-black/30 dark:text-white/30 sm:text-sm">
            Designed for ambitious students pursuing global opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}