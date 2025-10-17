"use client";
import { Code, Users, TrendingUp } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Code size={48} className="text-primary" />,
    title: "Cutting-Edge Content",
    description:
      "Explore the latest trends in AI, blockchain, cloud computing, and more from industry pioneers.",
  },
  {
    icon: <Users size={48} className="text-primary" />,
    title: "Global Networking",
    description:
      "Connect with a diverse community of developers, innovators, and leaders from around the world.",
  },
  {
    icon: <TrendingUp size={48} className="text-primary" />,
    title: "Career Growth",
    description:
      "Gain valuable insights, learn new skills, and discover opportunities to advance your career.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">TECH FOR SUSTAINABLE WEALTH CREATION</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Digital Roadmap Conference 2025 is a landmark event for anyone
            passionate about technology. We bring together the brightest minds
            and leading companies on this day of inspiration, learning, and
            connection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row">
          {features.map((feature) => (
            <div key={feature.title} className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm p-4">
                <div className="mb-3 d-flex justify-content-center">
                  {feature.icon}
                </div>
                <h3 className="h5 fw-semibold mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
