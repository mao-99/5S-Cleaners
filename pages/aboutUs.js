import Head from 'next/head';
import Header from '../components/header';
import About from '../components/about';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const pageTitle = 'About Us';
  const [isNavPanelVisible, setIsNavPanelVisible] = useState(false);
    useEffect(() => {
        // Check if the "navPanel-visible" class exists on the body when the component mounts
        const checkNavPanelVisible = () => {
          setIsNavPanelVisible(document.body.classList.contains("navPanel-visible"));
        };
    
        checkNavPanelVisible(); // Call the function once when the component mounts
    
        // Add an event listener to update the state when the class changes
        document.body.addEventListener("transitionend", checkNavPanelVisible);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.body.removeEventListener("transitionend", checkNavPanelVisible);
        };
      }, []);  
  return (
    <div>
      <div id="page-wrapper">
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Header></Header>
        <About></About>
        <Footer></Footer>
      </div>
        <div id="navButton">
          <a href="#navPanel" className={`toggle`} onClick={() => {document.body.classList.toggle("navPanel-visible")}}>
          </a>
        </div>
        {isNavPanelVisible ? (
                <div id="navPanel">
                    <nav>
                    <Link
                        className="link depth-0"
                        href="/"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <span className="indent-0" />
                        Home
                    </Link>
                    <Link
                        className="link depth-0"
                        href="/aboutUs"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <span className="indent-0" />
                        About Us
                    </Link>
                    <Link
                        className="link depth-0"
                        href="/services"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <span className="indent-0" />
                        Services + Bookings
                    </Link>
                    <Link
                        className="link depth-0"
                        href="/contactPage"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <span className="indent-0" />
                        Contact Us
                    </Link>
                    </nav>
                </div>
            ) : null}
    </div>

  )
}
