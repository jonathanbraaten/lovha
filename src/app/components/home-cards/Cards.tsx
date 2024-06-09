import { cardsData } from './cardsData';
import styles from './styles.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
export const HomeCards = () => {

  return (
    <section className={styles.card_layout}>
      {cardsData.map(({ id, path, text, title, image }) => (
        <article className={`${styles.card_layout__card} bg-white`}  key={id}>
      <div>
      <Image 
            className={`${styles.card_layout__card_img} max-w-full block`} 
            src={image}  alt={`img-of-${image}-text`}></Image>
      </div>
           
            <div className={`${styles.card_layout__card_body}`} >
            <p>{title}</p>
              <p>{text}</p>
            </div>

<Link className={`${styles.card_layout__card_footer}`} href={path}>
       <span>Les mer</span>
         <FaLongArrowAltRight  size={25}/>
          </Link>

        </article>
      ))}
    </section>
  );
};
