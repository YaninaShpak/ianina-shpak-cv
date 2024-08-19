import { contactsData } from "@/app/data/contacts";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2 className={`title ${styles.title}`}>Контакты</h2>
      <ul>
        {contactsData.map((el) => (
          <li
            key={el.title.replaceAll(" ", "")}
            className="listReset"
          >
            <a className={styles.listLink} href={el.link} target="_blank">
              {el.icon}
              {el.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.location}>
        <svg
          width="18"
          height="20"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9.5625C6.6375 9.5625 7.21562 9.4125 7.73438 9.1125C8.25313 8.8125 8.66875 8.4125 8.98125 7.9125C8.55625 7.5875 8.09375 7.34375 7.59375 7.18125C7.09375 7.01875 6.5625 6.9375 6 6.9375C5.4375 6.9375 4.90625 7.01875 4.40625 7.18125C3.90625 7.34375 3.44375 7.5875 3.01875 7.9125C3.33125 8.4125 3.74688 8.8125 4.26562 9.1125C4.78438 9.4125 5.3625 9.5625 6 9.5625ZM6 5.8125C6.3625 5.8125 6.67188 5.68438 6.92813 5.42813C7.18438 5.17188 7.3125 4.8625 7.3125 4.5C7.3125 4.1375 7.18438 3.82812 6.92813 3.57187C6.67188 3.31562 6.3625 3.1875 6 3.1875C5.6375 3.1875 5.32812 3.31562 5.07187 3.57187C4.81562 3.82812 4.6875 4.1375 4.6875 4.5C4.6875 4.8625 4.81562 5.17188 5.07187 5.42813C5.32812 5.68438 5.6375 5.8125 6 5.8125ZM6 13.5187C7.6625 12.0062 8.89062 10.6344 9.68438 9.40313C10.4781 8.17188 10.875 7.0875 10.875 6.15C10.875 4.675 10.4031 3.46875 9.45937 2.53125C8.51562 1.59375 7.3625 1.125 6 1.125C4.6375 1.125 3.48437 1.59375 2.54062 2.53125C1.59687 3.46875 1.125 4.675 1.125 6.15C1.125 7.0875 1.53125 8.17188 2.34375 9.40313C3.15625 10.6344 4.375 12.0062 6 13.5187ZM6 15C3.9875 13.2875 2.48438 11.6969 1.49063 10.2281C0.496875 8.75937 0 7.4 0 6.15C0 4.275 0.603125 2.78125 1.80937 1.66875C3.01562 0.55625 4.4125 0 6 0C7.5875 0 8.98438 0.55625 10.1906 1.66875C11.3969 2.78125 12 4.275 12 6.15C12 7.4 11.5031 8.75937 10.5094 10.2281C9.51563 11.6969 8.0125 13.2875 6 15Z"
            fill="#ffffff"
          />
        </svg>
        Екатеринбург, Россия
      </div>
    </section>
  );
};

export default Contacts;
