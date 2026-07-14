'use client'
import styles from "./page.module.css";
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
    //Main page container
    <div className={styles.page}>
      <div className={styles.main}>
        {/* Header section */}
        <div className={styles.header}>
          <h1 className={styles.title}>TOURTOPIA</h1>
        </div>

        {/* Main content section */}
        <h2 className={styles.subtitle}>- LOG IN -</h2>
        <div>


          <form className={styles.form}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button className={styles.btn} onClick={(e) => { e.preventDefault(); router.push('/profile'); }}>
              login
            </button>
          </form>
          <Link className={styles.link} href="./signup">
            sign up
          </Link>
        </div>
      </div>
    </div >
  );
}
