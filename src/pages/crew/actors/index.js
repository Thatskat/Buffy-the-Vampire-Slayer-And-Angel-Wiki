import Link from "next/link";
import Head from "next/head";
import Profile from "@/components/features/Profile/Profile";


const ActorInfoPage = ({ actors }) => {
  return (
    <div className="grid crewByCategory">
      <Head>
        <title>Actors | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          content={`Buffy the Vampire Slayer and its spin-off Angel featured a talented cast of actors who brought the beloved characters to life. Learn more about the actors behind these iconic TV shows.`}
        />
      </Head>
      <div className="titleSection">
      <Link href={'/crew'}>Crew Overview</Link>
        <h1>
          Actors <br></br>
          <span>+</span>
        </h1>
        <p className="subText">
          Experience the brilliance and talent of the remarkable cast members
          who brought the iconic characters of Buffy the Vampire Slayer and
          Angel to life, captivating audiences with their extraordinary
          performances and forever leaving an indelible mark on the world of
          television.
        </p>
      </div>
      <div className="profiles">
        <div className="profileGrid">      {actors.map((actor) => (
          <Profile key={actor._id} data={actor} typeLink="actors" />
        ))}</div>
  
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://buffy-angel-api.up.railway.app/api/actors");
  const actors = await response.json();

  return {
    props: {
      actors,
    },
  };
}

export default ActorInfoPage;
