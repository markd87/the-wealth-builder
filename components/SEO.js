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
      <meta
        name="a.validate.02"
        content="KNtdk-a2bckNb1BRrkrbod46LakSnDF91mVA"
      />
      <link rel="icon" type="image/jpg" href="images/favicon.ico" />
    </Head>
  );
}
