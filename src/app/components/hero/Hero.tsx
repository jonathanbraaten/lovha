import Image from "next/image";
import heroBanner from "/public/johannes-blenke-13AogvLZbV4-unsplash.jpg";
export const Hero = () => (
  <section>
    <Image
      className="w-full max-h-[600px]  object-cover aspect-auto"
      src={heroBanner}
      alt=""
    ></Image>
  </section>
);
