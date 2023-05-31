
import styles from "./Navbar.module.scss";

import ThemeToggler from "../ThemeToggler";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={"/test/logo.svg"}
            height={50}
            width={70}
            alt="Buffy the Vampire Slayer + Angel Wiki Logo"
          />
        </Link>
      </div>
      <nav className={styles.navLinks}>
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
      <div className={styles.themeToggle}>
        {/* <ThemeToggler /> */}
      </div>
    </header>
  );
};

export default Navbar;
