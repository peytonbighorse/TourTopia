'use client';
import styles from "../page.module.css";
//import { useRouter } from 'next/navigation'

export default function Home() {
    //const router = useRouter();

    return (
        //Main page container
        <div className={styles.page}>
            {/* Main content section */}
            <div className={styles.main}>
                {/* Header section */}
                <div className={styles.header}>
                    <h1 className={styles.title}>TOURTOPIA</h1>
                </div>
                {/* Main Section */}
                <div className={styles.pfp}>
                    <h2>HELLO USER :{')'}</h2>
                    <hr />
                    <div className={styles.upcoming}>
                        <h3>UPCOMING SHOWS</h3>
                    </div>
                    <div className={styles.tours}>
                        <h3>TOURS</h3>
                    </div>
                </div>

            </div>

        </div >
    );
}
