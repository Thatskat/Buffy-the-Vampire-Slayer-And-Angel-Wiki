
import styles from "./Navbar.module.scss";
import { Kanit } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

const kanit = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" title="Home">
          <Image
            src={"/test/logo.svg"}
            height={50}
            width={70}
            alt="Buffy the Vampire Slayer + Angel Wiki Logo"
          />
        </Link>
      </div>
      <nav className={`${styles.navLinks} ${kanit.className}`}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
