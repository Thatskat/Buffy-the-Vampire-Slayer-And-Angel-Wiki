import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          title="Instagram"
        >
          <AiOutlineInstagram />
        </Link>
        <Link href="https://twitter.com/" target="_blank" title="Twitter">
          <AiOutlineTwitter />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank" title="Facebook">
          <AiOutlineFacebook />
        </Link>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <Link href="/" title="Home">Home</Link>
          </li>
          <li>
            <Link href="/buffy" title="Buffy the Vampire Slayer">Buffy the Vampire Slayer</Link>
          </li>
          <li>
            <Link href="/angel" title="Angel">Angel</Link>
          </li>
          <li>
            <Link href="/crew" title="Crew Profiles">Crew Profiles</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/privacypolicy" title="Privacy Policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms" title="Terms of Use">Terms of Use</Link>
          </li>
          <li>
            <Link href="/about" title="About Us">About</Link>
          </li>
          <li>
            <Link href="/contact" title="Contact Us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/" title="Home">
          <Image
            src="/test/logo.svg"
            width={50}
            height={50}
            alt="Buffy the Vampire Slayer + Angel Wiki Logo"
          />
        </Link>
      </div>
      <p className={styles.copyRight}>
        Buffy the Vampire Slayer + Angel Wiki &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
