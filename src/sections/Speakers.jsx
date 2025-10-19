"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
    imageUrl: "/speakers/Spella colored flier.jpg",
  },
  {
    imageUrl: "/speakers/road map fliers.jpg",
  },
  {
    imageUrl: "/speakers/Spella flier.jpg",
  },
];

export default function Speakers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="speakers" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-primary">Meet Our Speakers</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Industry leaders and visionaries who are shaping the future of technology.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {speakers.map((speaker, index) => (
            <div
              className="col-12 col-sm-6 col-md-4"
              key={index}
              data-aos="fade-up"
            >
              <div className="card border-0 shadow-sm overflow-hidden zoom-card h-100">
                <div className="zoom-wrap position-relative" style={{ height: "330px" }}>
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name || "Conference Speaker"}
                    fill
                    className="img-fluid rounded-top"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {(speaker.name || speaker.title) && (
                  <div className="card-body text-center">
                    <h5 className="fw-semibold text-dark mb-1">{speaker.name}</h5>
                    <p className="text-primary small mb-0">{speaker.title}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        #speakers {
          scroll-margin-top: 100px;
        }

        /* card styling */
        .zoom-card {
          border-radius: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .zoom-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        /* fix for next/image wrapper */
        .zoom-wrap :global(img) {
          transition: transform 0.6s ease, filter 0.4s ease;
        }

        .zoom-card:hover .zoom-wrap :global(img) {
          transform: scale(1.08);
          filter: brightness(1.08) contrast(1.05);
        }
      `}</style>
    </section>
  );
}
