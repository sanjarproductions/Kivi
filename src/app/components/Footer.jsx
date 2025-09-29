import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.note}>© {year} Kivi Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}


