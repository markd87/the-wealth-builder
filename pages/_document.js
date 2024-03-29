import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4447030181844253"
          crossorigin="anonymous"
        />
        <Script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=63faa1305271340015307f3d&product=inline-share-buttons"
          async="async"
        />

        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
          <Script
            data-cfasync="false"
            type="text/javascript"
            data-adel="atag"
            src="//asacdn.com/script/atg.js"
            czid="vrnrzwc5zy"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
