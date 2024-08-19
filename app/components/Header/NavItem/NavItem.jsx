import Link from "next/link";

import styles from "./NavItem.module.scss";

const NavItem = ({ params, active, onClick }) => {
  return (
    <li>
      <Link
        onClick={onClick}
        className={`${styles.link} ${
          active === params.link ? styles.active : ""
        }`}
        href={params.link}
      >
        {params.title}
      </Link>
    </li>
  );
};

export default NavItem;
