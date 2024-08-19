import { skillsData } from "@/app/data/skills";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={`title ${styles.title}`}>Навыки</h2>
      <ul className="skills-list listReset skills__list">
        {skillsData.map((el) => (
          <li key={el.title} className={`${styles.item} ${styles[el.icon]}`}>{el.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
