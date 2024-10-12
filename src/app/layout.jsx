import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const metadata = {
  title: "Kivi Studio",
  description: "Kivi Studio - custom code website design agency",
};

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-BL2SHMX3X0', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BL2SHMX3X0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BL2SHMX3X0');
            `,
          }}
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
