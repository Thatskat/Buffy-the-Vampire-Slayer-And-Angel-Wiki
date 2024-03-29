import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Profile from "@/components/features/Profile/Profile";

import { FaImdb } from "react-icons/fa";

const BuffyEpisodesPage = ({ episode }) => {
  return (
    <div className="grid episodeInfoPage">
      <Head>
        <title>{episode.episodeName} | Buffy the Vampire Slayer</title>
        <meta
          name="description"
          description={`Buffy the Vampire Slayer season ${episode.seasonNumber} episode ${episode.episodeNumber}`}
        />
      </Head>
      <div className="headingSection">
        <Link href={`/buffy/${episode.seasonNumber}`}>
          Return to all season {episode.seasonNumber} episodes
        </Link>

        <div className="image">
          <Image
            src={episode.episodeScreenshot}
            fill={true}
            alt={episode.episodeName}
          />
        </div>
        <h2>
          <span>+</span>
        </h2>
      </div>
      <div className="episodeInformation">
        <div className="overview">
          <h1>{episode?.episodeName}</h1>
          <p className="subText">
            Season {episode.seasonNumber} Episode {episode.episodeNumber}
          </p>
          <p className="subText">Episode aired {episode.airDate}</p>
          <Link
            href={episode.imdbLink}
            target="_blank"
            title={`${episode.episodeName} IMDB Page`}
            className="imdbLink"
          >
            <FaImdb />
          </Link>
          <h3>Plot</h3>
          <p>{episode.description}</p>
          <h3>Behind the Scenes</h3>
          <p>{episode.trivia}</p>

          <h4>Director</h4>
          <div className="episodeGrid">
            {episode.director &&
              episode.director.map((director) => (
                <Profile
                  key={director._id}
                  data={director}
                  typeLink={"directors"}
                />
              ))}
          </div>
          <h4>Writers</h4>
          <div className="episodeGrid">
            {episode.writer &&
              episode.writer.map((writer) => (
                <Profile key={writer._id} data={writer} typeLink={"writers"} />
              ))}
          </div>
          <h4>Cast</h4>
          <div className="episodeGrid">
            {episode.episodeCast &&
              episode.episodeCast.map((cast) => (
                <Profile key={cast._id} data={cast} typeLink={"actors"} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://buffy-angel-api.onrender.com/api/buffy`
  );
  const episodes = await response.json();

  const paths = await episodes.map((episode) => ({
    params: {
      seasonNumber: episode.seasonNumber.toString(),
      episodeNumber: episode.episodeNumber.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://buffy-angel-api.onrender.com/api/buffy/season/${context.params.seasonNumber.toString()}/`
  );
  const episodes = await response.json();
  const episodeQuery = context.params.episodeNumber;
  const episodeMatch = episodes.filter(
    (episode) => episode.episodeNumber.toString() === episodeQuery
  );
  return {
    props: {
      episode: episodeMatch[0],
    },
  };
};

export default BuffyEpisodesPage;
