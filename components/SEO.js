import Head from 'next/head';

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="index, follow" />
      <meta name="monetag" content="70ccbe930069abd378084c17b9e6621e" />
    </Head>
  );
}
