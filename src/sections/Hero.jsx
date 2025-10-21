'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          '.event-info-card',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="position-relative d-flex align-items-center justify-content-center text-center text-white overflow-hidden"
      style={{
        height: 'auto',
        minHeight: '600px',
        padding: "100px 0",
        backgroundColor: 'rgb(1, 1, 75)',
      }}
    >
      {/* Brighter Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
        alt="Tech conference background"
        fill
        className="object-fit-cover opacity-45" // increased brightness
        priority
      />

      {/* Soft Navy Overlay to balance colors */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'rgba(1, 1, 75, 0.6)', // soft navy overlay
          backdropFilter: 'brightness(90%)',
        }}
      ></div>

      {/* Main Content */}
      <div className="position-relative z-1 container px-4 py-5">
        <h1 className="hero-title display-4 fw-bold mb-3">
          Digital Roadmap <span className="text-info">Conference 2025</span>
        </h1>

        <p
          className="hero-subtitle fs-5 text-light mx-auto mb-4"
          style={{ maxWidth: '700px', lineHeight: '1.6' }}
        >
          Join innovators, entrepreneurs, and thought leaders from across the globe as we shape
          the future of technology, business, and digital transformation — together.
        </p>

        {/* Event Info Cards */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mb-4">
          {/* Date */}
          <div
            className="event-info-card text-white rounded-4 shadow p-3 px-4 d-flex align-items-center gap-3"
            style={{ backgroundColor: 'rgb(1, 1, 75)' }}
          >
            <Calendar className="text-info" size={26} />
            <div>
              <h6 className="fw-bold mb-0">Date</h6>
              <small>Saturday, 22 November 2025</small>
            </div>
          </div>

          {/* Time */}
          <div
            className="event-info-card text-white rounded-4 shadow p-3 px-4 d-flex align-items-center gap-3"
            style={{ backgroundColor: 'rgb(1, 1, 75)' }}
          >
            <Clock className="text-info" size={26} />
            <div>
              <h6 className="fw-bold mb-0">Time</h6>
              <small>10:00 AM Prompt</small>
            </div>
          </div>

          {/* Venue */}
          <div
            className="event-info-card text-white rounded-4 shadow p-3 px-4 d-flex align-items-center gap-3 text-start"
            style={{ backgroundColor: 'rgb(1, 1, 75)' }}
          >
            <MapPin className="text-info" size={26} />
            <div>
              <h6 className="fw-bold mb-0">Venue</h6>
              <small>
                Ryan Hotels, Main Conference Hall
                <br />
                Onwe Road, Abakaliki
              </small>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hero-cta mt-2 mb-1">
          <Link
            href="#register"
            onClick={handleRegisterClick}
            className="btn btn-info btn-lg fw-bold px-4 py-2 rounded-pill shadow"
          >
            Secure Your Spot
          </Link>
        </div>
      </div>
    </section>
  );
}
