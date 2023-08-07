import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import '../styles/globals.css'; // Your custom global CSS file, if any

export default function App({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
      
    return (
        <div>
        <Component {...pageProps} />
        </div>
    );
}
