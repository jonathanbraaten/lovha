import { Hero } from './components/hero/Hero';
import { HomeCards } from './components/home-cards/Cards';
export default function Home() {
  return (
    <section className="bg-orange-500">
      <Hero />
      <HomeCards />
    </section>
  );
}
