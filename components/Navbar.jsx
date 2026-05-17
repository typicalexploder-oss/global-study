"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

const navItemClass =
  "group relative whitespace-nowrap text-sm font-medium text-black/70 transition hover:text-black dark:text-white/75 dark:hover:text-white";

const underlineClass =
  "absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F5A623] to-cyan-400 transition-all duration-300 group-hover:w-full";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const nextScrolled = window.scrollY > 40;

      setScrolled((prev) => {
        if (prev !== nextScrolled) {
          return nextScrolled;
        }

        return prev;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        aria-label="Main navigation"
        className={`relative mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 overflow-visible rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-black/10 bg-white/95 shadow-[0_10px_50px_rgba(0,0,0,0.12)] backdrop-blur-3xl dark:border-white/15 dark:bg-[#07182B]/85 dark:shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
            : "border-black/10 bg-white/90 backdrop-blur-2xl dark:border-white/5 dark:bg-[#07182B]/60"
        }`}
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-40"
        >
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        {/* Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-[0.03]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Global Study Abroad Consultants home"
          className="relative z-10 flex shrink-0 items-center gap-3"
          onClick={closeMobileMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-base font-black text-black backdrop-blur-xl dark:border-white/20 dark:bg-white/10 dark:text-white sm:h-11 sm:w-11 sm:text-lg">
            GS
          </div>

          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.22em] text-black dark:text-white sm:text-sm sm:tracking-[0.3em]">
              Global Study
            </h2>

            <p className="text-[10px] text-black/50 dark:text-white/45 sm:text-xs">
              Abroad Consultants
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="relative z-10 hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map(([label, href]) => (
            <Link key={label} href={href} className={navItemClass}>
              {label}
              <span className={underlineClass} />
            </Link>
          ))}

          {/* Destinations */}
          <div
            className="relative"
            onMouseEnter={() => setCountryOpen(true)}
            onMouseLeave={() => setCountryOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={countryOpen}
              onClick={() => setCountryOpen((open) => !open)}
              className={navItemClass}
            >
              Destinations
              <span className={underlineClass} />
            </button>

            <AnimatePresence>
              {countryOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-80 overflow-hidden rounded-[2rem] border border-black/10 bg-white/95 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.15)] backdrop-blur-3xl dark:border-white/10 dark:bg-[#07182B]/95 dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                >
                  {countries.map((country) => (
                    <Link
                      role="menuitem"
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      onClick={() => setCountryOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-5 py-4 transition hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">
                          {country.name}
                        </h3>

                        <p className="mt-1 text-xs text-black/45 dark:text-white/40">
                          {country.type}
                        </p>
                      </div>

                      <span className="text-black/30 transition group-hover:translate-x-1 dark:text-white/30">
                        →
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Actions */}
        <div className="relative z-10 flex shrink-0 items-center gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black backdrop-blur-xl transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white lg:flex"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Apply */}
          <Link
            href="/apply"
            className="hidden shrink-0 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD27A] px-5 py-3 text-sm font-semibold text-[#06121F] shadow-[0_0_35px_rgba(245,166,35,0.25)] transition-all duration-300 hover:scale-105 xl:block xl:px-7 xl:text-base"
          >
            Apply Now
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
          >
            <span aria-hidden="true">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-4 max-h-[85vh] max-w-7xl overflow-y-auto rounded-[2rem] border border-black/10 bg-white/95 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-3xl dark:border-white/10 dark:bg-[#07182B]/95 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)] lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="text-lg text-black/80 transition hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  {label}
                </Link>
              ))}

              <div className="border-t border-black/10 pt-4 dark:border-white/10">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
                  Destinations
                </p>

                <div className="flex flex-col gap-3">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      onClick={closeMobileMenu}
                      className="rounded-2xl bg-black/5 px-4 py-4 text-black/80 transition hover:bg-black/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <span className="font-medium">{country.name}</span>

                      <span className="mt-1 block text-sm text-black/45 dark:text-white/40">
                        {country.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/apply"
                onClick={closeMobileMenu}
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