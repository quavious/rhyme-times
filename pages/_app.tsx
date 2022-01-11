import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Ad Loaded');
    }
    const adScript = document.createElement('script');
    adScript.src =
      'https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fe338c3c-c4f5-4094-907e-1381aa8bcee1';
    adScript.async = true;
    document.body.appendChild(adScript);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
