import { Badge } from '@/components/ui/badge';

const scheduleItems = [
  { time: '09:00 AM', title: 'Registration & Welcome Coffee', type: 'general' },
  { time: '10:00 AM', title: 'Opening Keynote: The Next Digital Frontier', speaker: 'Dr. Anya Sharma', type: 'keynote' },
  { time: '11:00 AM', title: 'The Decentralized Web: Beyond the Hype', speaker: 'Chloe Garcia', type: 'talk' },
  { time: '12:00 PM', title: 'Lunch Break & Networking', type: 'general' },
  { time: '01:30 PM', title: 'Scaling Securely: A DevOps Perspective', speaker: 'Frank Miller', type: 'talk' },
  { time: '02:30 PM', title: 'Human-Centered AI: Designing for the Future', speaker: 'Emily White', type: 'talk' },
  { time: '03:30 PM', title: 'Coffee Break', type: 'general' },
  { time: '04:00 PM', title: 'Panel: The Multi-Cloud Reality', speaker: 'Ben Carter & David Lee', type: 'panel' },
  { time: '05:00 PM', title: 'Closing Remarks & Future Outlook', type: 'keynote' },
  { time: '06:00 PM', title: 'Networking Reception', type: 'general' },
];

const badgeColors = {
  general: 'default',
  keynote: 'secondary',
  talk: 'outline',
  panel: 'default',
} as const;

export function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            Conference Agenda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A full day of insightful talks, networking, and learning opportunities.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {scheduleItems.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                {index % 2 === 0 && (
                  <div className="p-6 bg-card rounded-lg shadow-lg">
                    <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                    {item.speaker && <p className="text-muted-foreground mt-1">{item.speaker}</p>}
                    <Badge variant={badgeColors[item.type as keyof typeof badgeColors] ?? 'default'} className="mt-2 bg-primary/20 text-primary border-primary/50">{item.type}</Badge>
                  </div>
                )}
              </div>
              <div className="w-1/2 md:w-auto absolute md:relative left-1/2 -translate-x-1/2 bg-background flex items-center justify-center">
                 <div className="bg-primary rounded-full w-4 h-4 border-4 border-background"></div>
                 <p className="absolute -left-20 md:left-auto md:-right-20 text-primary font-bold">{item.time}</p>
              </div>
              <div className="w-full md:w-1/2 pl-4 md:pl-8">
                 <div className="p-6 bg-card rounded-lg shadow-lg md:hidden">
                    <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                    {item.speaker && <p className="text-muted-foreground mt-1">{item.speaker}</p>}
                    <Badge variant={badgeColors[item.type as keyof typeof badgeColors] ?? 'default'} className="mt-2 bg-primary/20 text-primary border-primary/50">{item.type}</Badge>
                  </div>
                {index % 2 !== 0 && (
                  <div className="hidden md:block p-6 bg-card rounded-lg shadow-lg">
                    <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                    {item.speaker && <p className="text-muted-foreground mt-1">{item.speaker}</p>}
                    <Badge variant={badgeColors[item.type as keyof typeof badgeColors] ?? 'default'} className="mt-2 bg-primary/20 text-primary border-primary/50">{item.type}</Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
