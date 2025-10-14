import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const sponsorIds = ['sponsor-1', 'sponsor-2', 'sponsor-3', 'sponsor-4'];

export function Sponsors() {
  const sponsors = sponsorIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section id="sponsors" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary">
            Our Valued Sponsors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are grateful for the support of our partners who make this event possible.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            sponsor && (
              <div key={sponsor.id} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.description}
                  width={200}
                  height={100}
                  className="object-contain"
                  data-ai-hint={sponsor.imageHint}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
