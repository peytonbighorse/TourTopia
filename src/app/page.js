
import styles from "./page.module.css";
import Link from 'next/link'


export default function Home() {

  return (
    //Main page container
    <div className={styles.page}>
      <div className={styles.main}>

        {/* Header section */}
        <div className={styles.header}>
          <h2>welcome to</h2>
          <h1 className={styles.title}>TOURTOPIA</h1>
        </div>

        {/* Main content section */}

        <div>


          <form className={styles.form}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button className={styles.btn}>login</button>
          </form>
          <Link className={styles.link} href="./signup">
            sign up
          </Link>
        </div>
      </div>
    </div >
  );
}
