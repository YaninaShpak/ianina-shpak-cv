import styles from "./ProjectCard.module.scss";
import Image from "next/image";

import { Fuzzy_Bubbles } from "next/font/google";

const fuzzyBubbles = Fuzzy_Bubbles({subsets: ["latin"], weight: "400"});

const ProjectCard = ({title, technologies, linkProject, linkCode, description, image}) => {
  
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
          <a
            className={`${fuzzyBubbles.className} ${styles.btn} ${styles.btnCode}`}
            href={linkCode}
            target="_blank"
          >
            Code
          </a>
        </div>
        <p className="project-card__desc">
          {description}
        </p>
      </div>
      <div className={styles.image}>
        <Image src={image} alt="" width={600} height={522} priority={true}/>
      </div>
    </div>
  );
};

export default ProjectCard;
