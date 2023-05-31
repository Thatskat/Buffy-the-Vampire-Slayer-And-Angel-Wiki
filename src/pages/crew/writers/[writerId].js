import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaImdb, FaArrowLeft } from "react-icons/fa";

const WriterPage = ({writer}) => {
  return (
    <div className="grid profilePage">
      <Head>
        <title>{writer.name} | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta name="description" description={writer.name} />
      </Head>
      <div className="generalInfo">
        <Link href={"/crew/writers"}>
          <span>
            <FaArrowLeft />
          </span>
          Back to Writers Page
        </Link>
        <div className="image">
          <Image
            src={writer.profilePicture}
            fill={true}
            alt={writer.name}
            loading="lazy"
          />
        </div>
      </div>
      <div className="bio">
        <h1>{writer.name}</h1>
        <p className="subText">
          {writer?.characterPlayed.map((character, index) => (
            <div className="characters" key={index}>{character}</div>
          ))}
        </p>
        <h3>
          Bio{" "}
          <Link href={writer.imdbProfile} target="_blank">
            <FaImdb />
          </Link>
        </h3>
        <p>{writer.bio}</p>
      </div>
    </div>
  );
};


export const getStaticPaths = async () => {
    const response = await fetch(`https://btvs-angel-api-production-3a72.up.railway.app/writers`);
    const writers = await response.json();
    const idList = writers.map((writer) => writer._id);
    const paths = idList.map((id) => ({ params: { writerId: id.toString() } }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (context) => {
    const response = await fetch(`https://btvs-angel-api-production-3a72.up.railway.app/writers`);
    const writers = await response.json();
    const writersQuery = context.params.writerId;
    const writersIdMatch = writers.filter((writer)=> writer._id.toString() === writersQuery)
    return {
      props: {
        writer: writersIdMatch[0],
      },
    };
  };

export default WriterPage