import styles from "./ExperienceBlock.module.css";
import ContentList from "../ContentList/ContentList";
import formatPeriod from "@/app/utils/format-period";
import { useMemo } from "react";

const ExperienceBlock = ({
  position,
  period,
  company,
  companyLink,
  city,
  details,
  project,
  projectLink,
}) => {
  const { start, end } = period || {};
  const experiencePeriod = useMemo(() => formatPeriod(start, end), [start, end]);

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <p className={styles.position}>{position}</p>
        <p className={styles.period}>{experiencePeriod}</p>
        <div className={styles.companyWrapper}>
          {companyLink ? (
            <a className={styles.link} href={companyLink} target="_blank">
              {company}
            </a>
          ) : (
            <p className={styles.company}>{company}</p>
          )}
          {project && (
            <a className={styles.link} href={projectLink} target="_blank">
              ({project})
            </a>
          )}
        </div>
        <p className={styles.city}>{city}</p>
      </div>
      <ContentList items={details} />
    </div>
  );
};

export default ExperienceBlock;
