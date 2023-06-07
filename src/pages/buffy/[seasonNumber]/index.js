import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const BuffyEpisodesBySeasonPage = ({ season }) => {
  return (
    <div className="grid episodesBySeason">
      <Head>
        <title>Season {season[0].seasonNumber} | Buffy the Vampire Slayer</title>
        <meta
          name="description"
          description={`Buffy the Vampire Slayer is a beloved TV show that ran for seven seasons. This page provides a recap of season ${season[0].seasonNumber} of Buffy the Vampire Slayer`}
        />
      </Head>
      <div className="pageHeading">
        <Link href="/buffy">
          <span><AiOutlineArrowLeft /></span>
          Back to Buffy the Vampire Slayer Overview
        </Link>
        <h1>
          Buffy the Vampire <br></br> Slayer <br></br> <span>+</span> <br></br>{" "}
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
              <p>{episodes.description}<br></br><Link             href={`/buffy/${episodes.seasonNumber}/${episodes.episodeNumber}`}>See more</Link></p>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://buffy-angel-api.up.railway.app/api/buffy");
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
  const response = await fetch("https://buffy-angel-api.up.railway.app/api/buffy");
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

export default BuffyEpisodesBySeasonPage;
