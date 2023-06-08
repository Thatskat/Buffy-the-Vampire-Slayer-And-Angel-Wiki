import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaImdb } from "react-icons/fa";

const DirectorPage = ({ director }) => {
  return (
    <div className="grid profilePage">
      <Head>
        <title>{director.name} | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta name="description" content={director.name} />
      </Head>
      <div className="generalInfo">
        <Link href={"/crew/directors"}>Back to Directors Page</Link>
        <div className="image">
          <Image
            src={director.profilePicture}
            fill={true}
            alt={director.name}
            loading="lazy"
          />
        </div>
      </div>
      <div className="bio">
        <h1>{director.name}</h1>
        <p className="subText">
          {director?.characterPlayed.map((character, index) => (
            <div className="characters" key={index}>
              {character}
            </div>
          ))}
        </p>
        <h3>Bio </h3>
        <Link
          href={director.imdbProfile}
          target="_blank"
          title={`${director.name}'s IMDb Profile`}
        >
          <FaImdb />
        </Link>
        <p>{director.bio}</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://buffy-angel-api.up.railway.app/api/directors`
  );
  const directors = await response.json();
  const idList = directors.map((director) => director._id);
  const paths = idList.map((id) => ({ params: { directorId: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://buffy-angel-api.up.railway.app/api/directors`
  );
  const directors = await response.json();
  const directorQuery = context.params.directorId;
  const directorsIdMatch = directors.filter(
    (director) => director._id.toString() === directorQuery
  );
  return {
    props: {
      director: directorsIdMatch[0],
    },
  };
};

export default DirectorPage;
