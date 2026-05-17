"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Courses", "/courses"],
    ["Universities", "/universities"],
    ["Success Stories", "/success-stories"],
    ["Blog", "/blog"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];

  const countries = [
    {
      slug: "romania",
      name: "Romania",
      type: "Study Abroad",
    },
    {
      slug: "germany",
      name: "Germany",
      type: "Engineering & Tech",
    },
    {
      slug: "singapore",
      name: "Singapore",
      type: "Global Innovation Hub",
    },
    {
      slug: "india",
      name: "India",
      type: "Online Degrees",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-full border px-4 sm:px-6 transition-all duration-500 ${
          scrolled
            ? "border-white/15 bg-[#07182B]/55 py-3 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
            : "border-white/5 bg-white/[0.03] py-4 backdrop-blur-2xl"
        }`}
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* LOGO */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base sm:text-lg font-black backdrop-blur-xl">
            GS
          </div>

          <div>
            <h2 className="text-[10px] sm:text-sm font-black uppercase tracking-[0.28em] sm:tracking-[0.35em] text-white">
              Global Study
            </h2>

            <p className="text-[10px] sm:text-xs text-white/45">
              Abroad Consultants
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="relative z-10 hidden items-center xl:gap-7 lg:gap-4 lg:flex">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative text-sm font-medium text-white/75 transition hover:text-white whitespace-nowrap"
            >
              {label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F5A623] to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* DESTINATIONS */}
          <div
            className="relative"
            onMouseEnter={() => setCountryOpen(true)}
            onMouseLeave={() => setCountryOpen(false)}
          >
            <button className="group relative text-sm font-medium text-white/75 transition hover:text-white whitespace-nowrap">
              Destinations

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F5A623] to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>

            <AnimatePresence>
              {countryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 top-12 w-80 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07182B]/95 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
                >
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      className="group flex items-center justify-between rounded-2xl px-5 py-4 transition hover:bg-white/5"
                    >
                      <div>
                        <h3 className="font-semibold text-white">
                          {country.name}
                        </h3>

                        <p className="mt-1 text-xs text-white/40">
                          {country.type}
                        </p>
                      </div>

                      <span className="text-white/30 transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* APPLY BUTTON */}
        <div className="relative z-10 hidden xl:block">
          <Link
            href="/apply"
            className="rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD27A] px-5 xl:px-7 py-3 text-sm xl:text-base font-semibold text-[#06121F] shadow-[0_0_35px_rgba(245,166,35,0.25)] transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-4 max-h-[85vh] overflow-y-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#07182B]/95 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white/80 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-4">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
                  Destinations
                </p>

                <div className="flex flex-col gap-3">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl bg-white/5 px-4 py-4 text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD27A] px-6 py-3 text-center font-semibold text-[#06121F]"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}