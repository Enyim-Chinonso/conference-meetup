"use client";
import Image from "next/image";
import React from "react";

const sponsors = [
  {
    id: "sponsor-1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TechCrunch.svg",
    description: "TechCrunch",
  },
  {
    id: "sponsor-2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Microsoft",
  },
  {
    id: "sponsor-3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    description: "IBM",
  },
  {
    id: "sponsor-4",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    description: "Google",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-5 bg-light">
      <div className="container text-center">
        {/* Header */}
        <div className="mb-5">
          <h2 className="fw-bold display-6 text-primary">Our Valued Sponsors</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            We are grateful for the support of our partners who make this event possible.
          </p>
        </div>

        {/* Sponsor Logos */}
        <div className="row justify-content-center align-items-center g-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="col-6 col-md-3 d-flex justify-content-center align-items-center"
            >
              <div className="p-3 bg-white shadow-sm rounded-3">
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.description}
                  width={160}
                  height={80}
                  className="img-fluid object-fit-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
