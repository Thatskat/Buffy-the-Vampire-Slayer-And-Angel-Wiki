import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AngelEpisodesBySeasonPage = ({ season }) => {
  return (
    <div className="grid episodesBySeason">
      <Head>
        <title>Season {season[0].seasonNumber} | Angel</title>
        <meta
          name="description"
          description={`Angel is a supernatural TV show that follows the life of a vampire and his associates as they fight evil forces. Learn everything you need to know about season ${season[0].seasonNumber} of this show.`}
        />
      </Head>
      <div className="pageHeading">
        <Link href="/angel">
          <AiOutlineArrowLeft />
          Back to Angel Overview
        </Link>
        <h1>
          Angel <br></br>
          <span>+</span> <br></br> Season <span>{season[0].seasonNumber}</span>
        </h1>
      </div>
      <div className="episodeCards">
        {season &&
          season.map((episodes) => (
            <div key={episodes._id} className="episodeCard grid">
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
                <p className="subText">
                  Season {episodes.seasonNumber} Episode{" "}
                  {episodes.episodeNumber}
                </p>
                <h3>{episodes.episodeName}</h3>
                <p>
                  {episodes.description}
                  <br></br>
                  <Link
                    href={`/angel/${episodes.seasonNumber}/${episodes.episodeNumber}`}
                  >
                    See more <AiOutlineArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://btvs-angel-api-production-3a72.up.railway.app/api/angel"
  );
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
  const response = await fetch(
    "https://btvs-angel-api-production-3a72.up.railway.app/api/angel"
  );
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
