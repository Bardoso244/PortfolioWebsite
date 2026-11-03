"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Announcement bar */}
      <div className="bg-primary">
        <div className="mx-auto max-w-[70.9rem] px-5 sm:px-7 py-2 text-center">
          <p className="text-sm text-white/90">
            Cloud Infrastructure Engineer specialising in AWS, Terraform, networking and automation.
          </p>
        </div>
      </div>

      {/* Sticky nav */}
      <nav
        className={`bg-white/95 dark:bg-[#1C212B]/95 backdrop-blur-sm border-b border-primary/10 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-[70.9rem] px-5 sm:px-7 flex items-center justify-between h-12">
          {/* Logo / name */}
          <Link href="/" className="text-sm font-semibold text-primary tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            Bart Rosiecki
          </Link>

          {/* Nav links — hidden on small screens */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: CV download + dark mode */}
          <div className="flex items-center gap-3">
            <Link
              href="/Bart-Rosiecki-CV.pdf"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium border border-primary/20 rounded-full px-3.5 py-1.5 text-primary hover:bg-primary/5 transition-colors"
            >
              Download CV
            </Link>
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors text-base"
            >
              {dark ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
