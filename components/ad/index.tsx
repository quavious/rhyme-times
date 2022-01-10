import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Ad Loaded');
    }
    const adScript = document.createElement('script');
    adScript.src =
      '//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fe338c3c-c4f5-4094-907e-1381aa8bcee1';
    adScript.async = true;
    document.body.appendChild(adScript);
  }, []);
  return (
    <>
      <div id="amzn-assoc-ad-fe338c3c-c4f5-4094-907e-1381aa8bcee1"></div>
    </>
  );
};

export default AdComponent;
