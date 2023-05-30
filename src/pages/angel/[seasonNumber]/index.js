import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AngelEpisodesBySeasonPage = ({ season }) => {
  return (
    <div className="grid episodesBySeason">
      <Head>
        <title>Season {season[0].seasonNumber} | Angel</title>
      </Head>
      <div className="pageHeading">
        <Link href="/angel">
          <AiOutlineArrowLeft />
          Back to Angel Overview
        </Link>
        <h1>
          Angel <br></br><span>+</span> <br></br>{" "}
          Season <span>{season[0].seasonNumber}</span>
        </h1>
      </div>
      <div className="episodeCards">
        {season &&
          season.map((episodes) => (
            <div
              key={episodes._id}
              className="episodeCard grid"
            >
              <div className="nextImage">
                <Image
                  src={episodes.episodeScreenshot}
                  fill={true}
                  loading="lazy"
                  alt={episodes.episodeName}
                  className="episodeScreenshot"
                  sizes="10rem"
                />
              </div>
              <div className="cardInfo">
              <p className="subText">Season {episodes.seasonNumber} Episode {episodes.episodeNumber}</p>
              <h3>{episodes.episodeName}</h3>
              <p>{episodes.description}<br></br><Link             href={`/angel/${episodes.seasonNumber}/${episodes.episodeNumber}`}>See more <AiOutlineArrowRight/></Link></p>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/angel");
  const episodes = await response.json();
  const seasonList = episodes.map((episode) => episode.seasonNumber);
  const paths = seasonList.map((season) => ({
    params: { seasonNumber: season.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/angel");
  const episodes = await response.json();
  const seasonQuery = context.params.seasonNumber;
  const seasonMatch = episodes.filter(
    (episode) => episode.seasonNumber.toString() === seasonQuery
  );
  return {
    props: {
      season: seasonMatch,
    },
  };
};

export default AngelEpisodesBySeasonPage;
