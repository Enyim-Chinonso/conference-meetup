"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-5 mt-5 text-white"
      style={{
        backgroundColor: "rgb(20, 16, 78)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center gy-4">
          {/* ✅ DRC2025 Brand Text */}
          <div className="col-md-4 text-center text-md-start">
            <Link href="/" className="text-decoration-none">
              <h4
                className="fw-bold m-0"
                style={{
                  color: "#0dcaf0",
                  letterSpacing: "1px",
                  fontSize: "1.7rem",
                  textShadow: "0 0 8px rgba(13,202,240,0.4)",
                }}
              >
                DRC<span style={{ color: "white" }}>2025</span>
              </h4>
            </Link>
          </div>

          {/* ✅ Social Links */}
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-4">
              <Link
                href="#"
                className="text-secondary hover-scale"
                title="Twitter"
              >
                <Twitter size={22} />
              </Link>
              <Link
                href="#"
                className="text-secondary hover-scale"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="#"
                className="text-secondary hover-scale"
                title="GitHub"
              >
                <Github size={22} />
              </Link>
            </div>
          </div>

          {/* ✅ Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <p className="text-light small mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <span className="fw-semibold text-info">Digital Roadmap Conference</span>.{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Hover animations */}
      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.2);
          color: #0dcaf0 !important;
        }
      `}</style>
    </footer>
  );
}
