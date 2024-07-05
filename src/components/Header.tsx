import Image from "next/image";
import styles from "../app/ui/header.module.css";
import NavBar from "./Navbar";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="header__wrapper">
      <header></header>
      <Image
        src="/bg.jpg"
        alt="Background image desktop"
        className={styles.header}
        width={1440}
        height={316}
      />
      <Image
        src="/bg.jpg"
        alt="Background image mobile"
        className={styles.header__mobile}
        width={768}
        height={215}
      />
      <div className={styles.cols__container}>
        <div className={styles.left__col}>
          <div className={styles.img__container}>
            <Image
              className={styles.img__profile}
              src="/user.png"
              alt="Profile Image"
              width={120}
              height={120}
            />
            <span className={styles.active}></span>
          </div>
          <h2 className={styles.username}>Anna Smith</h2>
        </div>
        <div className="right__col">
          <NavBar />
          {children}
        </div>
      </div>
    </div>
  );
}
