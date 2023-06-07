import Link from "next/link";
import Head from "next/head";
import Profile from "@/components/features/Profile/Profile";

const DirectorInfoPage = ({ directors }) => {
  return (
    <div className="grid crewByCategory">
      <Head>
        <title>Directors | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          content={`Buffy the Vampire Slayer and its spin-off, Angel, were groundbreaking television shows that pushed the boundaries of the genre and set the standard for future TV series. Learn more about the directors and their vision behind these iconic shows.`}
        />
      </Head>
      <div className="titleSection">
        <Link href={"/crew"}>Crew Overview</Link>
        <h1>
          Directors <br></br>
          <span>+</span>
        </h1>
        <p className="subText">
          Discover the visionary directors who skillfully crafted the immersive
          worlds of Buffy the Vampire Slayer and Angel, bringing to life the
          supernatural adventures, emotional depth, and unforgettable moments
          that have enthralled fans around the globe.
        </p>
      </div>
      <div className="profiles">
        <div className="profileGrid">
          {" "}
          {directors.map((director) => (
            <Profile key={director._id} data={director} typeLink="directors" />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://buffy-angel-api.up.railway.app/api/directors");
  const directors = await response.json();

  return {
    props: {
      directors,
    },
  };
}

export default DirectorInfoPage;
