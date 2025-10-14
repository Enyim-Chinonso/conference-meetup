import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/app/sections/hero';
import { About } from '@/app/sections/about';
import { Speakers } from '@/app/sections/speakers';
import { Schedule } from '@/app/sections/schedule';
import { Sponsors } from '@/app/sections/sponsors';
import { Registration } from '@/app/sections/registration';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
