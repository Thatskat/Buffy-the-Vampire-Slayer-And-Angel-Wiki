import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="grid">
      <Head>
        <title>Home | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          content={`Discover the captivating worlds of Buffy the Vampire Slayer and Angel in our comprehensive wiki. Delve into the supernatural adventures, complex characters, and rich mythology of these iconic TV series. Uncover in-depth character profiles, episode summaries, and explore the interconnected universe of Slayers, vampires, demons, and more. Join the ultimate resource for fans, scholars, and casual viewers alike, and immerse yourself in the thrilling worlds of Buffy and Angel!`}
        />
        <meta
          name="keywords"
          content={`Buffy the Vampire Slayer, Angel, Buffyverse, Television series, Supernatural, Buffy and Angel Community, Plot Summaries, Episode Guides`}
        />
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
          Buffy&apos;s fierce battles against the forces of darkness to
          Angel&apos;s quest for redemption, our wiki is a comprehensive
          resource that celebrates the enduring legacy of these shows. Join our
          passionate community, share your insights, and immerse yourself in the
          timeless themes of love, friendship, and the eternal fight against
          evil. Welcome to a world where slayers, vampires, and destiny
          collide—the Buffyverse awaits you.
        </p>
      </div>
      <div className="highlights">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="angelHighlight">
            {/* <Image
              src="/test/angel-placeholder.webp"
              alt="Angel Screenshot"
              fill={true}
              loading="lazy"
            /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default index;
