import Contacts from "./Contacts/Contacts";
import styles from "./Sidebar.module.scss";
import Skills from "./Skills/Skills";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["cyrillic"] });

const Sidebar = () => {
  return (
    <aside className={styles.root}>
      <section className={styles.mainInfo}>
        <h1 className={`${nunito.className} ${styles.mainTitle}`}>Янина Шпак</h1>
        <p className={styles.subtitle}>frontend-developer</p>
      </section>
      <Contacts/>
      <Skills/>
    </aside>
  );
};

export default Sidebar;
