import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Layout({children}){
    return (
        <div>
            <div className={styles.navbar}>
                <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">5-S Cleaners</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                            <div className={styles.navLinks}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            </div>
                            <div className={styles.navLinks}>
                            <li className="nav-item">
                                <Link className="nav-link" href="/services">Services</Link>
                            </li>
                            </div>
                            <div className={styles.navLinks}>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Bookings</Link>
                            </li>
                            </div>
                            <div className={styles.navLinks}>
                            <li className='nav-item'><Link className='nav-link ms-auto' href='/'>About Us</Link></li>
                            </div>
                            <div className={styles.navLinks}>
                            <li className='nav-item'><Link className='nav-link ms-auto' href='/'>Contact Us</Link></li>
                            </div>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
                {children}
            </div>
        </div>
    
    );
}