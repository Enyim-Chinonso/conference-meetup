import { Code, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: 'Cutting-Edge Content',
    description: 'Explore the latest trends in AI, blockchain, cloud computing, and more from industry pioneers.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Global Networking',
    description: 'Connect with a diverse community of developers, innovators, and leaders from around the world.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Career Growth',
    description: 'Gain valuable insights, learn new skills, and discover opportunities to advance your career.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            The Future of Digital is Here
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Digital Roadmap Conference 2025 is a landmark event for anyone passionate about technology. We bring together the brightest minds and leading companies for two days of inspiration, learning, and connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
