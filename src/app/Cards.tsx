import { cardsData } from "./cardsData";
import styles from "./styles.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export const HomeCards = () => {
  return (
    <section className={styles.card_layout}>
      {cardsData.map(({ id, path, text, title, image }) => (
        <article key={id} className="flex flex-col gap-4">
          <div>
            <Image
              className="max-w-full w-full object-cover aspect-auto"
              loading="lazy"
              src={image}
              width={500}
              height={500}
              alt=""
            ></Image>
            <p>{title}</p>
          </div>

          <Link className="flex gap-2" href={path}>
            Les mer
            <FaLongArrowAltRight size={25} />
          </Link>
        </article>
      ))}
    </section>
  );
};
