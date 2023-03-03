import Script from 'next/script';

export default function Ascript({ src }) {
  return (
    <>
      <Script src={src} charset="utf-8" strategy="lazyOnload" />
      <div id="search-widget"></div>
    </>
  );
}
