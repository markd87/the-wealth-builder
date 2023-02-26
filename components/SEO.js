import Head from 'next/head';

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="artice" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="The Richest Mind Blog" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="robots" content="index, follow" />
      <meta name="monetag" content="70ccbe930069abd378084c17b9e6621e" />
      <link rel="icon" type="image/jpg" href="images/favicon.ico" />
      <script
        type="text/javascript"
        src="https://platform-api.sharethis.com/js/sharethis.js#property=63faa1305271340015307f3d&product=inline-share-buttons"
        async="async"
      ></script>
    </Head>
  );
}
