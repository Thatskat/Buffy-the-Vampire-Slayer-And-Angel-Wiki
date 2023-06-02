import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import "@/styles/globals.css";

import "@theme-toggles/react/css/Classic.css";
import { Karla } from "next/font/google";

import { AnimatePresence } from "framer-motion";
import { ThemeContext, ThemeProvider } from "@/contexts/themeContext";
import useTheme from "@/hooks/useTheme";

import * as ga from "../lib/googleAnalytics";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const karla = Karla({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);
  return (
    <ThemeProvider>
      <Head>
        <link rel="shortcut icon" href="/test/logo.svg" type="image/x-icon" />
      </Head>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <div className={`${karla.className} ${theme}`}>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="googleAnalyticsScript" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
          </Script>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
