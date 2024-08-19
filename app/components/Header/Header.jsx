"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import NavItem from "./NavItem/NavItem";

import styles from "./Header.module.scss";

import { pagesLinks } from "@/app/data/pagesLinks";

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname);

  return (
    <header className={styles.root}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {pagesLinks.map((el) => (
            <NavItem
              onClick={() => setIsActive(el.link)}
              key={el.title}
              params={el}
              active={isActive}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
