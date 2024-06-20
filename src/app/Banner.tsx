import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";

export const Banner = ({ banner }: { banner: ImageField }) => {
  return (
    <PrismicNextImage
      className="max-h-[500px] object-cover aspect-auto"
      field={banner}
    />
  );
};
