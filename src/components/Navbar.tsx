"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/ui/navbar.module.css";

const links = [
  {
    name: "Publicaciones",
    href: "/",
  },
  {
    name: "Intereses",
    href: "/interests",
  },
  {
    name: "Sobre Mi",
    href: "/about",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav__list}>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              className={
                styles.nav__link +
                ` ${pathname === link.href ? styles.nav__link__select : ""}  `
              }
              href={link.href}
            >
              {link.name}
            </Link>{" "}
          </li>
        ))}
      </ul>
      <button className={styles.follow__button}>Seguir</button>
    </nav>
  );
}
