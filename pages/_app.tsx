import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

export const AdComponent = dynamic(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('AD_LOADED');
  }
  return import('../components/ad');
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className="max-w-xl mx-auto">
        <AdComponent />
      </div>
    </>
  );
}

export default MyApp;
