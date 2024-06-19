import { Hero } from "./components/hero/Hero";
import { HomeCards } from "./Cards";
export default function Home() {
  return (
    <section className="flex flex-col gap-40">
      <Hero />
      <HomeCards />
    </section>
  );
}
