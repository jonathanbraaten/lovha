import { cardsData } from "./cardsData";
import styles from "./styles.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export const HomeCards = () => {
  return (
    <section className={styles.card_layout}>
      {cardsData.map(({ id, path, text, title, image }) => (
        <article
          className={`${styles.card_layout__card} border rounded-md shadow-raised p-1`}
          key={id}
        >
          <div>
            <Image
              className={`${styles.card_layout__card_img} max-w-full block rounded-md`}
              src={image}
              alt={`img-of-${image}-text`}
            ></Image>
          </div>

          <div className={`${styles.card_layout__card_body} px-4`}>
            <p className="text-xl">{title}</p>
            <p>{text}</p>
          </div>

          <Link
            className={`${styles.card_layout__card_footer} p-4`}
            href={path}
          >
            <span>Les mer</span>
            <FaLongArrowAltRight size={25} />
          </Link>
        </article>
      ))}
    </section>
  );
};
