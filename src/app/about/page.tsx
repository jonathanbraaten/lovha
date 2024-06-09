import { Banner } from './banner';
import { Team } from './Team';
import { Content } from './Content';
export default function About() {
  return (
    <section className="flex flex-col">
      <Banner />
      <Content />
      <Team />
    </section>
  );
}
