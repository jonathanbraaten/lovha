import { createClient } from "@/prismicio";
import { Game } from "./Game";
export default async function Games() {
  const client = createClient();
  const data = await client.getSingle("fallbros");
  console.log(data.data.slices)
  return (
    <section className="bg-blue-500">
      <Game />
    </section>
  );
}
