import Image from 'next/image';
export const Banner = () => (
  <Image
    width={1000}
    height={1000}
    className="rounded-md shadow-raised"
    src="/about_banner.jpg"
    alt="image of lovha studio members"
  ></Image>
);
