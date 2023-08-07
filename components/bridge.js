import Link from 'next/link';
import styles from './bridge.module.css';
export default function Bridge(){
    return (
        <div className={styles.container}>
            <div className={styles.blurredBackground}></div>
            <div className={styles.content}>
                <div className={styles.headers}>
                    <h1 className={styles.Header}>Welcome To 5-S</h1>
                    <h3 className={styles.subHeader}><em>your satisfaction is our priority</em></h3>
                </div>
                <div className={styles.button}>
                    <button className="btn btn-primary btn-lg">Book Now</button>
                </div>
            </div>
        </div>
    )
}