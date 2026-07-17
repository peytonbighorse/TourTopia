'use client';
import styles from "../page.module.css";
import Link from 'next/link'
import Modal from "../components/modal";
import { useState } from "react";
//import { useRouter } from 'next/navigation'

export default function Home() {
    //const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    return (
        //Main page container
        <div className={styles.page}>
            {/* Main content section */}
            <div className={styles.main}>
                <div className={styles.navbar}>
                    <div /*Left Side */>
                        <Link href="/" className={styles.nav_link}>logout</Link>
                    </div>
                    <div /*Right Side */>
                        <button onClick={() => setShowModal(true)} className={styles.nav_link}>join tour</button>
                        {showModal &&
                            <Modal onClose={() => setShowModal(false)} title="Enter Your Invite Code" >

                                <form>

                                    <input type="text" placeholder="invite code"></input>
                                    <input type="submit" placeholder="submit"></input>
                                </form>
                            </Modal>
                        }
                        <Link href="#" className={styles.nav_link}>create tour</Link>
                    </div>
                </div>
                {/* Header section */}
                <div className={styles.header}>
                    <h1 className={styles.title}>TOURTOPIA</h1>
                </div>
                {/* Main Section */}
                <div className={styles.pfp}>
                    <h2>HELLO USER :{')'}</h2>
                    <hr />
                    <div id="modal-root"></div>

                    <div className={styles.profile_body}>
                        <div className={styles.upcoming}>
                            <h3>UPCOMING SHOWS</h3>
                            <div className={styles.shows}>
                                <Link className={styles.pfp_module} href="#">
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
                                <Link className={styles.pfp_module} href="#">
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
                                <Link className={styles.pfp_module} href="#">
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
                                <Link className={styles.pfp_module} href="#">
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
                        <div>
                            <h3>TOURS</h3>
                            <div className={styles.tours}>
                                <Link className={styles.pfp_module} href="#">
                                    <div className={styles.tour}>
                                        <div>SKATING POLLY SUMMER 2026</div>
                                        <div>June 8, 2026 - August 3, 2026</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}
