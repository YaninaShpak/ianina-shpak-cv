import styles from "./ContentList.module.css";

const ContentList = ({ items }) => {
  return (
    <ul className={styles.root}>
      {items.map((item, index) =>
        typeof item === "string" ? (
          <li key={index}>{item}</li>
        ) : (
          <li key={index}>
            {item.sublistTitle}
            {item.subItems && <ContentList items={item.subItems} />}
          </li>
        )
      )}
    </ul>
  );
};

export default ContentList;