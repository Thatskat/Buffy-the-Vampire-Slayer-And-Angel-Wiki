import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="grid">
      <Head>
        <title>Home | Buffy the Vampire Slayer + Angel Wiki</title>
      </Head>
      <div className="infoSection">
        <h2>Welcome to the</h2>
        <h1>
          Buffy The Vampire Slayer <br></br>
          <span>+</span> <br></br> Angel Wiki
        </h1>
        <p className="subText">
          Welcome to the ultimate Buffy the Vampire Slayer and Angel Wiki, where
          the supernatural meets the heroic! Delve into the captivating worlds
          of these iconic series created by Joss Whedon, as we unravel the
          intricate mythology, explore unforgettable characters, and relive the
          thrilling adventures that have captivated fans for decades. From
          Buffy&apos;s fierce battles against the forces of darkness to Angel&apos;s quest
          for redemption, our wiki is a comprehensive resource that celebrates
          the enduring legacy of these shows. Join our passionate community,
          share your insights, and immerse yourself in the timeless themes of
          love, friendship, and the eternal fight against evil. Welcome to a
          world where slayers, vampires, and destiny collide—the Buffyverse
          awaits you.
        </p>
      </div>
      <div className="highlights">
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {/* <Image src="/test/gif-test.webp" width={100} height={100} /> */}
        </motion.a>
      </div>
    </div>
  );
};

export default index;
