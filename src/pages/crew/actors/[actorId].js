import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaImdb, FaArrowLeft } from "react-icons/fa";

const ActorPage = ({ actor }) => {
  return (
    <div className="grid profilePage">
      <Head>
        <title>{actor.name} | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta name="description" content={actor.name} />
      </Head>
      <div className="generalInfo">
        <Link href={"/crew/actors"}>
          <span>
            <FaArrowLeft />
          </span>
          Back to Actors Page
        </Link>
        <div className="image">
          <Image
            src={actor.profilePicture}
            fill={true}
            alt={actor.name}
            loading="lazy"
          />
        </div>
      </div>
      <div className="bio">
        <h1>{actor.name}</h1>
        <p className="subText">
          {actor.characterPlayed.map((character, index) => (
            <div className="characters" key={index}>{character}</div>
          ))}
        </p>
        <h3>
          Bio{" "}
          <Link href={actor.imdbProfile} target="_blank">
            <FaImdb />
          </Link>
        </h3>
        <p>{actor.bio}</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://buffy-angel-api.up.railway.app/api/actors`);
  const actors = await response.json();
  const idList = actors.map((actor) => actor._id);
  const paths = idList.map((id) => ({ params: { actorId: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(`https://buffy-angel-api.up.railway.app/api/actors`);
  const actors = await response.json();
  const actorQuery = context.params.actorId;
  const actorIdMatch = actors.filter(
    (actor) => actor._id.toString() === actorQuery
  );
  return {
    props: {
      actor: actorIdMatch[0],
    },
  };
};

export default ActorPage;
