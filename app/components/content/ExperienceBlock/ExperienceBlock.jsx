import styles from "./ExperienceBlock.module.css";
import ContentList from "../ContentList/ContentList";

const ExperienceBlock = ({ position, period, company, city, details }) => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <p className={styles.position}>{position}</p>
        <p className={styles.period}>{period}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.city}>{city}</p>
      </div>
      <ContentList items={details} />  
    </div>
  );
};

export default ExperienceBlock;