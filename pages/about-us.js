import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Script from 'next/script';
import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function AboutUs({ globalData }) {
  return (
    <Layout>
      <SEO
        title={globalData.blogTitle}
        description="The Richest Mind is your ultimate source for practical tips and in-depth analysis on personal finance, entrepreneurship, and investing. Start your journey towards financial success today by exploring The Richest Mind."
      />
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
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">About Us</h1>
        <div>
          <p>
            Welcome to The Richest Mind, a finance and wealth management blog
            focused on helping individuals build and manage their wealth through
            smart financial decisions. As the writer and founder of this blog,
            I&apos;m passionate about sharing my knowledge and experience in
            personal finance, investing, real estate, entrepreneurship, and
            other related topics.
          </p>
          <br />
          <p>
            My goal is to provide my readers with practical and actionable
            advice that they can apply to their own financial situation. Whether
            you&apos;re just starting your financial journey or looking to take
            your finances to the next level, The Richest Mind is here to guide
            you along the way.
          </p>
          <br />
          <p>
            I believe that everyone has the potential to achieve financial
            freedom, and my mission is to help my readers unlock that potential.
            With a focus on simplicity and clarity, I strive to make complex
            financial concepts easy to understand and apply.
          </p>
          <br />
          <p>
            Thank you for visiting The Richest Mind. If you have any questions,
            feedback, or suggestions, please feel free to contact me at
            therichestmindco@gmail.com. I look forward to helping you on your
            financial journey.
          </p>
        </div>

        <br />
        <div style={{ textAlign: 'center' }}>
          <Link as={`/`} href={`/`}>
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h2 className="text-2xl md:text-3xl">Start Reading</h2>
              <ArrowIcon />
            </a>
          </Link>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
