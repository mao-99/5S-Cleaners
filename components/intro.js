import Image from "next/image";
import Link from "next/link";
export default function Intro(){
    return (
        <section id="main" className="container">
            <section className="box special">
                <header className="major">
                    <h2>NEW YORK CITY'S PREMIER <strong> <br/>CLEANING SERVICE</strong></h2>
                    <p>#1 HOME & OFFICE CLEANING SERVICE IN NYC & NJ</p>
                </header>
                {/* <span className="image featured"><Image src="/images/logoRedesign.JPG" width={1000} height={800} alt="services"/></span> */}
            </section>
            {/* Features */}
            <section className="box special features">
                <div className="features-row">
                    <section>
                        <span className="icon solid major fa-star accent4"></span>
                        <h3>Reliable Crews</h3>
                        <p>Our reliable crews provide pristine cleaning services</p>
                    </section>
                    <section>
                        <span className="icon solid major fa-bolt accent2"></span>
                        <h3>Seamless Service</h3>
                        <p>Easy and Stress-Free Bookings and Cleanings</p>
                    </section>
                    <section>
                        <span className="icon solid major fa-lock accent4"></span>
                        <h3>Top Quality</h3>
                        <p>Our quality is backed by our track record and reviews</p>
                    </section>
                </div>
                <ul className="actions special">
                    <li><Link href="/services" className="button primary">Learn More</Link></li>
                </ul>
            </section>
        </section>
    )
}