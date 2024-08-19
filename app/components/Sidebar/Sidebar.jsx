import Contacts from "./Contacts/Contacts";
import styles from "./Sidebar.module.scss";
import Skills from "./Skills/Skills";
import { Fuzzy_Bubbles } from "next/font/google";

const fuzzyBubbles = Fuzzy_Bubbles({subsets: ["latin"], weight: "400"});

const Sidebar = () => {
  return (
    <aside className={styles.root}>
      <section className={styles.mainInfo}>
        <h1 className={`${fuzzyBubbles.className} ${styles.mainTitle}`}>Янина Шпак</h1>
        <p className={styles.subtitle}>frontend-developer</p>
      </section>
      <Contacts/>
      <Skills/>
    </aside>
  );
};

export default Sidebar;
