'use client';
import Image from "next/image";
import styles from "../page.module.css";
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter();

    return (
        //Main page container
        <div className={styles.page}>
            {/* Main content section */}
            <div className={styles.main}>
                {/* Header section */}
                <div className={styles.header}>
                    <h1 className={styles.title}>TOURTOPIA</h1>
                </div>
                <h2>SIGN UP</h2>
                <form className={styles.form}>
                    <input type="email" placeholder="email address" />
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button className={styles.btn}>sign up</button>
                </form>
            </div>

        </div >
    );
}
