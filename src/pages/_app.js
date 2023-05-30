import { useContext } from "react";
import "@/styles/globals.css";
import "@theme-toggles/react/css/Classic.css";
import { Karla } from "next/font/google";

import { AnimatePresence } from "framer-motion";
import { ThemeContext, ThemeProvider } from "@/contexts/themeContext";
import useTheme from "@/hooks/useTheme";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";


const karla = Karla({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps, router }) {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <div className={`${karla.className} ${theme}`}>
          <Navbar />
          <Component {...pageProps} key={router.asPath} />
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
