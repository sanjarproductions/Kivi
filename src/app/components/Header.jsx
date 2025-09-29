import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Kivi Studio
        </Link>
        <nav className={styles.nav}>
          <Link href="/work" className={styles.link}>Work</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}


