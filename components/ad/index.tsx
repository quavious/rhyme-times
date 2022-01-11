import Script from 'next/script';

const AdComponent = () => {
  return (
    <>
      <div id="amzn-assoc-ad-fe338c3c-c4f5-4094-907e-1381aa8bcee1"></div>{' '}
      <Script
        src={`https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fe338c3c-c4f5-4094-907e-1381aa8bcee1`}
        async={true}
      ></Script>
    </>
  );
};

export default AdComponent;
