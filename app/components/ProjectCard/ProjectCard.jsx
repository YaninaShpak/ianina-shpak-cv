import styles from "./ProjectCard.module.scss";
import Image from "next/image";

import { Fuzzy_Bubbles } from "next/font/google";

const fuzzyBubbles = Fuzzy_Bubbles({ subsets: ["latin"], weight: "400" });

const ProjectCard = ({
  title,
  technologies,
  linkProject,
  linkCode,
  description,
  schoolPlatform,
  image,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p className={styles.technologies}>{technologies}</p>
        <div className={styles.linkWrapper}>
          <a
            className={`${fuzzyBubbles.className} ${styles.btn} ${styles.btnProject}`}
            href={linkProject}
            target="_blank"
          >
            See project
          </a>
          {linkCode && (
            <a
              className={`${fuzzyBubbles.className} ${styles.btn} ${styles.btnCode}`}
              href={linkCode}
              target="_blank"
            >
              Code
            </a>
          )}
        </div>
        <p className={styles.desc}>{description}</p>
        {schoolPlatform && (
          <p className={styles.note}>
            Проект выполнен в рамках учебного курса на {schoolPlatform}
          </p>
        )}
      </div>
      <div className={styles.image}>
        <a href={linkProject} target="_blank">
          <Image
            src={image}
            alt={title}
            width={600}
            height={522}
            priority={true}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
