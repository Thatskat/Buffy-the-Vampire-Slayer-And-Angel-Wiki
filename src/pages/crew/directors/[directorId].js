import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaImdb, FaArrowLeft } from "react-icons/fa";

const DirectorPage = ({ director }) => {
  return (<div className="grid profilePage">
      <Head>
        <title>{director.name} | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta name="description" description={director.name} />
      </Head>
      <div className="generalInfo">
        <Link href={"/crew/directors"}>
          <span>
            <FaArrowLeft />
          </span>
          Back to Directors Page
        </Link>
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
          {director?.characterPlayed.map((character) => (
            <div className="characters">{character}</div>
          ))}
        </p>
        <h3>
          Bio{" "}
          <Link href={director.imdbProfile} target="_blank">
            <FaImdb />
          </Link>
        </h3>
        <p>{director.bio}</p>
      </div>
    </div>
  );
};


export const getStaticPaths = async () => {
  const response = await fetch(`https://btvs-angel-api-production-3a72.up.railway.app/api/directors`);
  const directors = await response.json();
  const idList = directors.map((director) => director._id);
  const paths = idList.map((id) => ({ params: { directorId: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(`https://btvs-angel-api-production-3a72.up.railway.app/api/directors`);
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
