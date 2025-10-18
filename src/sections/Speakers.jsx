"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  {
    name: "Prof. Eseni Azu Udu",
    title: "Dean, Faculty of Law, Alex Ekwueme Federal University",
    imageUrl: "/speakers/Prof Udu spella.jpg",
  },
  {
    name: "Pascal Reigns (Gbreigns)",
    title: "Web3 Founder / State Mod STNG",
    imageUrl: "/speakers/web3 founder spella.jpg",
  },
  {
    name: "Dr. Moses Erim",
    title: "Founder, Moses Erim Foundation",
    imageUrl: "/speakers/Erim spella.jpg",
  },
  {
    name: "",
    title: "",
    imageUrl: "/speakers/Spella colored flier.jpg",
  },
  {
    name: "",
    title: "",
    imageUrl: "/speakers/road map fliers.jpg",
  },
  {
    name: "",
    title: "",
    imageUrl: "/speakers/Spella flier.jpg",
  },
];

export default function Speakers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = Array.from(sectionRef.current.querySelectorAll(".speaker-card"));

    // Per-card entrance animation
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="py-5"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }} // subtle off-white bg
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-primary">Meet Our Speakers</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "780px" }}>
            Industry leaders and visionaries who are shaping the future of technology.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4 justify-content-center">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
            >
              <article
                className="speaker-card card border-0 shadow-sm h-100 overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  borderRadius: "14px",
                  background: "#ffffff", // solid card background for contrast
                }}
                aria-label={
                  speaker.name ? `${speaker.name} - ${speaker.title}` : "Conference visual"
                }
              >
                {/* Image wrapper - flush with card body (no gap) */}
                <div
                  className="img-wrap position-relative"
                  style={{
                    height: "320px",
                    overflow: "hidden",
                    borderTopLeftRadius: "14px",
                    borderTopRightRadius: "14px",
                    background: "#e9eef6", // fallback color while image loads
                  }}
                >
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name || "Conference visual"}
                    fill
                    priority={idx < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease, filter 0.4s ease",
                      // slightly brighten images
                      filter: "brightness(1.03) contrast(1.02)",
                    }}
                    className="d-block"
                  />
                </div>

                {/* Card body sits flush to image (no gap) */}
                {(speaker.name || speaker.title) && (
                  <div
                    className="card-body text-center py-3"
                    style={{ paddingTop: "12px", paddingBottom: "14px" }}
                  >
                    <h3 className="h6 fw-semibold mb-1 text-dark">{speaker.name}</h3>
                    <p className="text-primary small mb-0">{speaker.title}</p>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        #speakers {
          scroll-margin-top: 90px;
        }

        .speaker-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          border-radius: 14px;
        }
        .speaker-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(7, 22, 77, 0.12);
        }

        /* Target the actual <img> inside next/image wrapper */
        .img-wrap img {
          width: 100%;
          height: 100%;
          display: block;
          transform-origin: center center;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
            filter 0.4s ease;
        }
        .speaker-card:hover .img-wrap img {
          transform: scale(1.06);
          filter: brightness(1.06) contrast(1.04);
        }

        /* Ensure card-body touches the image with minimal perceived gap */
        .card-body {
          margin: 0;
        }

        @media (max-width: 576px) {
          .img-wrap {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
