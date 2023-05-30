import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <Link href="https://www.instagram.com/" target="_blank">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <AiOutlineTwitter />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
          <AiOutlineFacebook />
        </Link>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/buffy">Buffy the Vampire Slayer</Link>
          </li>
          <li>
            <Link href="/angel">Angel</Link>
          </li>
          <li>
            <Link href="/crew">Crew Profiles</Link>
          </li>
          <div>
          <li>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms of Use</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          </div>
        </ul>
      </div>
      <div>
        <Link href="/">
          <Image
            src="/test/logo.svg"
            width={50}
            height={50}
            alt="Buffy the Vampire Slayer + Angel Wiki Logo"
          />
        </Link>
      </div>
      <p className={styles.copyRight}>Buffy the Vampire Slayer + Angel Wiki &copy; 2023</p>
    </footer>
  );
};

export default Footer;
