import Hero from "@/slices/Hero";
import { HomeCards } from "./Cards";
import { createClient } from "@/prismicio";
import Image from "next/image";
export default async function Home() {
  const client = createClient();
  const banner = await client.getSingle("banner");
  const bannerImage = banner.data.banner.url || "";

  return (
    <section className="flex flex-col gap-40">
      <Image
        src={bannerImage}
        width={1500}
        height={1000}
        className="max-h-[750px] object-cover aspect-auto"
        alt=""
      />
      <HomeCards />
    </section>
  );
}
