'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const containerRef = useRef<HTMLDivElement>(null);

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
          '.hero-details > *',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/70 backdrop-brightness-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="hero-title font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
          Digital Roadmap <span className="text-primary">Conference 2025</span>
        </h1>
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Charting the Future of Technology, Together.
        </p>
        <div className="hero-details flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="text-primary" />
            <span>22 November, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-primary" />
            <span>Online & In-Person</span>
          </div>
        </div>
        <div className="hero-cta">
          <Button size="lg" asChild className="font-bold text-lg">
            <Link href="#register" onClick={handleRegisterClick}>
              Secure Your Spot
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
