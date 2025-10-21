"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
  ];

  // Add scroll shadow and background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`position-fixed top-0 start-0 w-100 z-50 ${
        isScrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(1, 1, 75, 0.9)"
          : "rgba(1, 1, 75, 0.75)",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Brand Name (Replaced Logo with DRC2025) */}
        <Link
          href="/"
          className="text-decoration-none"
          aria-label="Home"
        >
          <h3
            className="fw-bold mb-0"
            style={{
              color: "#0dcaf0", // Bootstrap info blue (matches logo tone)
              letterSpacing: "1px",
              textShadow: "0 0 6px rgba(13,202,240,0.4)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            DRC<span style={{ color: "white" }}>2025</span>
          </h3>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="d-none d-md-flex align-items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="nav-link-animated text-white text-decoration-none fw-semibold"
            >
              {link.label}
            </Link>
          ))}

          {/* Register Button */}
          <a
            href="#register"
            onClick={(e) => handleLinkClick(e, "#register")}
            className="btn btn-outline btn-info fw-bold px-4 py-2 rounded-pill shadow-sm register-btn"
          >
            Register
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="btn btn-link text-white d-md-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="d-md-none py-3"
          style={{
            backgroundColor: "rgba(1, 1, 75, 0.98)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <nav className="d-flex flex-column align-items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white fw-semibold text-decoration-none nav-link-animated"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, "#register")}
              className="btn btn-info fw-bold px-4 py-2 rounded-pill mt-2 register-btn"
            >
              Register
            </a>
          </nav>
        </div>
      )}

      {/* Custom hover + animation styles */}
      <style jsx>{`
        header {
          position: fixed !important;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1050;
        }

        .nav-link-animated {
          position: relative;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .nav-link-animated:hover {
          color: #0dcaf0 !important;
          transform: translateY(-2px);
        }

        .register-btn {
          transition: all 0.3s ease;
        }

        .register-btn:hover {
          background-color: #0bb3d9 !important;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(13, 202, 240, 0.4);
        }
      `}</style>
    </header>
  );
}
