import { HomeCards } from "./Cards";
import { createClient } from "@/prismicio";
import { Suspense } from "react";
import { Banner } from "./Banner";


export default async function Home() {
  const client = createClient();
  const banner = await client.getSingle("banner");
  return (
    <section className="flex flex-col gap-40">
      <Banner banner={banner.data.banner} />
      <HomeCards />
    </section>
  );
}
