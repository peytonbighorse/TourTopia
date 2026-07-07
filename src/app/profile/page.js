'use client';
import styles from "../page.module.css";
import Link from 'next/link'
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
                    <div className={styles.profile_body}>
                        <div className={styles.upcoming}>
                            <h3>UPCOMING SHOWS</h3>
                            <div className={styles.shows}>
                                <Link className={styles.show} href="#">
                                    <div className={styles.date}>
                                        <div>JUL</div>
                                        <div>14</div>
                                        <div>TUE</div>
                                    </div>
                                    <div className={styles.venue}>
                                        <div>FACTORY OBSCURA</div>
                                        <div>Oklahoma City</div>
                                        <div>OK</div>
                                    </div>
                                </Link>
                                <Link className={styles.show} href="#">
                                    <div className={styles.date}>
                                        <div>JUL</div>
                                        <div>14</div>
                                        <div>TUE</div>
                                    </div>
                                    <div className={styles.venue}>
                                        <div>FACTORY OBSCURA</div>
                                        <div>Oklahoma City</div>
                                        <div>OK</div>
                                    </div>
                                </Link>
                                <Link className={styles.show} href="#">
                                    <div className={styles.date}>
                                        <div>JUL</div>
                                        <div>14</div>
                                        <div>TUE</div>
                                    </div>
                                    <div className={styles.venue}>
                                        <div>FACTORY OBSCURA</div>
                                        <div>Oklahoma City</div>
                                        <div>OK</div>
                                    </div>
                                </Link>
                                <Link className={styles.show} href="#">
                                    <div className={styles.date}>
                                        <div>JUL</div>
                                        <div>14</div>
                                        <div>TUE</div>
                                    </div>
                                    <div className={styles.venue}>
                                        <div>FACTORY OBSCURA</div>
                                        <div>Oklahoma City</div>
                                        <div>OK</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.tours}>
                            <h3>TOURS</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}
