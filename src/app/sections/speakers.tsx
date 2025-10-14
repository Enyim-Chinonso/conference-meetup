import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const speakers = [
  { name: 'Dr. Anya Sharma', title: 'AI Ethicist, QuantumLeap', imageId: 'speaker-1' },
  { name: 'Ben Carter', title: 'Principal Engineer, Nova Systems', imageId: 'speaker-2' },
  { name: 'Chloe Garcia', title: 'Blockchain Architect, Apex Innovations', imageId: 'speaker-3' },
  { name: 'David Lee', title: 'Head of Cloud, Fusion Dynamics', imageId: 'speaker-4' },
  { name: 'Emily White', title: 'Lead UX Researcher, Starlight UI', imageId: 'speaker-5' },
  { name: 'Frank Miller', title: 'DevOps Guru, CyberSecure', imageId: 'speaker-6' },
];

export function Speakers() {
  return (
    <section id="speakers" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary">
            Meet Our Speakers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry leaders and visionaries who are shaping the future of technology.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => {
            const image = PlaceHolderImages.find((img) => img.id === speaker.imageId);
            return (
              <Card key={speaker.name} className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 group">
                <CardContent className="p-0">
                  {image && (
                    <div className="aspect-square relative">
                       <Image
                        src={image.imageUrl}
                        alt={`Headshot of ${speaker.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex-col items-start p-6">
                  <h3 className="font-headline text-2xl font-semibold">{speaker.name}</h3>
                  <p className="text-primary">{speaker.title}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
