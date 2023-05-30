import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const BuffyEpisodesPage = ({ episode }) => {
  return <div className="grid episodeInfoPage">
    <Head>
      <title>{episode.episodeName} | Buffy the Vampire Slayer</title>
      <meta name="description" description={`Buffy the Vampire Slayer season ${episode.seasonNumber} episode ${episode.episodeNumber}`}/>
    </Head>
    <div className='headingSection'>
      <Link href={`/buffy/${episode.seasonNumber}`}>Return to all season {episode.seasonNumber} episodes</Link>
      <h1>{episode?.episodeName}<br></br><span>+</span></h1>
      <p className="subText">Season {episode.seasonNumber} Episode {episode.episodeNumber}</p>
      <p>Episode aired {episode.airDate}</p>
      <div className="image">
        <Image src={episode.episodeScreenshot} width={200} height={200} />
      </div>
    </div>
    <div className="episodeInformation">
      <div className="overview">
      <h3>Episode Plot</h3>
      <p>{episode.description}</p>
      <h3>{episode.episodeName}'s Crew</h3>
      <h4>Director</h4>
      {episode.director && episode.director.map((director) => <p key={director._id}>{director.name}</p>)}
      <h4>Writers</h4>
      {episode.writer && episode.writer.map((writer) => <p key={writer._id}>{writer.name}</p>)}
      <h4>Cast</h4>
      {episode.episodeCast && episode.episodeCast.map((cast) => <p key={cast._id}>{cast.name}</p>)}
      </div>
        <h3>Behind the Scenes</h3>
        <p>{episode.trivia}</p>
        <Link href={episode.imdbLink} target="_bkank">IMDB LINK</Link>
    </div>

    </div>;
};

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/buffy`);
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
    `http://localhost:3000/api/buffy/season/${context.params.seasonNumber.toString()}/`
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
