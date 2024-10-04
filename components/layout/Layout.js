import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">

          <img src="/images/carlux.png" alt="carlux"  width="250px"/>
          <p >Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
       
        Next.js courses | MH7 Project &copy;
      </footer>
    </>
  );
}

export default Layout;
