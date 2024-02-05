import Script from "next/script";
import Head from "next/head";
import '../assets/main.css';
export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <body className="landing is-preload"></body>
                <html lang="en"></html>
            </Head>
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js' integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" strategy='beforeInteractive'></Script>
            <Script src='https://maps.googleapis.com/maps/api/js?' strategy='beforeInteractive' onLoad={()=>{console.log("successfuly logged google maps api")}}></Script>
            <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
            <Component {...pageProps} />
        </div>
    )
}
