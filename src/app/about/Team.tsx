import styles from './styles.module.css';
import { Avatars } from './Avatars';
export const Team = () => (
  <section className="">
    <h2 className="py-2">Vårt Team</h2>
    <section className={`${styles.about_grid}`}>
      <Avatars />
    </section>
  </section>
);
