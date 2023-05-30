import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaImdb } from "react-icons/fa";

const ActorPage = ({ actor }) => {
  return (
    <div className="grid profilePage">
      <Head>
        <title>{actor.name} | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta name="description" description={actor.name} />
      </Head>
      <div className="generalInfo">
        <h1>
          {actor.name}
          <br></br>
          <span>+</span>
          <Link href={actor.imdbProfile} target="_blank">
            <FaImdb />
          </Link>
        </h1>
        <p className="subText">
          {actor.characterPlayed.map((character) => character)}
        </p>
        <Image
          src={actor.profilePicture}
          width={200}
          height={200}
          alt={actor.name}
        />
      </div>
      <div className="bio">
        <h3>Characters Played</h3>
        <p>{actor.characterPlayed.map((character) => character)}</p>
        <h3>Bio</h3>
        <p>{actor.bio}</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/actors`);
  const actors = await response.json();
  const idList = actors.map((actor) => actor._id);
  const paths = idList.map((id) => ({ params: { actorId: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/actors`);
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
