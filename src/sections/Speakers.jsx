"use client";
import Image from "next/image";
import React from "react";

const speakers = [
  {
    name: "Dr. Moses Erim",
    title: "Founder Moses Erim foundation",
    imageUrl: "/speakers/Moses Erim snip.png",
  },
  {
    name: "Pascal Reigns (GBreigns)",
    title: "Web3 founder/State Mod STNG",
    imageUrl: "/speakers/panelist snip.png",
  },
  {
    name: "Chloe Garcia",
    title: "Blockchain Architect, Apex Innovations",
    imageUrl:
      "https://images.unsplash.com/photo-1614289371568-8b21c1c4e99a?auto=format&fit=crop&w=800&q=80",
  },
  // {
  //   name: "David Lee",
  //   title: "Head of Cloud, Fusion Dynamics",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1600181951225-8f1b1bfb33f7?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   name: "Emily White",
  //   title: "Lead UX Researcher, Starlight UI",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1614287066380-7d07c0c3a1de?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   name: "Frank Miller",
  //   title: "DevOps Guru, CyberSecure",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1603415527085-c9c80d3d63e7?auto=format&fit=crop&w=800&q=80",
  // },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-5 bg-secondary bg-opacity-10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-primary">Meet Our Speakers</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Industry leaders and visionaries who are shaping the future of
            technology.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="row g-4">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="col-12 col-sm-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <div className="position-relative" style={{ height: "350px" }}>
                  <Image
                    src={speaker.imageUrl}
                    alt={`Headshot of ${speaker.name}`}
                    fill
                    className="object-fit-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 fw-semibold mb-1">{speaker.name}</h3>
                  <p className="text-primary mb-0">{speaker.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
