import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const AngelEpisodesBySeasonPage = ({ season }) => {
  return (
    <div className="grid episodesBySeason">
      <Head>
        <title>Season {season[0].seasonNumber} | Angel</title>
        <meta
          name="description"
          content={`Angel is a supernatural TV show that follows the life of a vampire and his associates as they fight evil forces. Learn everything you need to know about season ${season[0].seasonNumber} of this show.`}
        />
      </Head>
      <div className="pageHeading">
        <Link href="/angel">
          Back to Angel Overview
        </Link>
        <h1>
          Angel <br></br>
          <span>+</span> <br></br> Season <span>{season[0].seasonNumber}</span>
        </h1>
        <p className="subText">{season[0].seasonNumber === 1 ? `At the end of the third season of Buffy, the 242-year-old, re-ensouled vampire Angel left Sunnydale to give teenage Slayer Buffy Summers the chance to live a normal life. Angel is now living in the big city of Los Angeles. With Buffy gone Angel is now completely cut off from society, every day getting closer and closer to giving in to his vampiric hunger. It's not until he befriends the half demon and fellow Irishman Doyle, who is sent visions of people in trouble by The Powers That Be, and fellow Sunnydale resident Cordelia Chase, who grounds Angel's life in the humanity around him, that he truly begins to take charge of his life and seek atonement for his past sins. He sets up his own detective agency, Angel Investigations and begins to "help the helpless".` : season[0].seasonNumber === 2 ? `The second season of the television series "Angel," a spin-off of "Buffy the Vampire Slayer," delves deeper into the dark and supernatural world of its titular vampire protagonist. Picking up from the events of the first season, Angel (David Boreanaz) and his team of supernatural investigators face a myriad of challenges in the gritty city of Los Angeles. One of the central storylines of Season 2 revolves around the return of Darla (Julie Benz), Angel's sire and former lover, who has been resurrected as a human. This unexpected twist forces Angel to confront his complicated feelings for her while also grappling with the responsibility of guiding her through her newfound humanity.` : season[0].seasonNumber === 3  ? `The third season of the television series "Angel" takes viewers on a captivating journey through a dark and tumultuous Los Angeles. Following the events of the previous season, the titular vampire with a soul, Angel (David Boreanaz), faces new challenges that push him to his limits. In Season 3, the series delves into the ongoing battle between Angel and the law firm Wolfram & Hart, which represents the forces of evil. Angel forms an unlikely alliance with former adversaries Lilah Morgan (Stephanie Romanov) and Lindsey McDonald (Christian Kane) to infiltrate and disrupt the firm from within.`: season[0].seasonNumber === 4 ? `The fourth season of "Angel" takes a dramatic turn as the series undergoes a significant shift in narrative and tone. After a catastrophic event, the members of Angel Investigations find themselves in a new reality where they work for the powerful and manipulative law firm, Wolfram & Hart. This new dynamic brings moral complexities as Angel (David Boreanaz) and his team navigate the blurred lines between good and evil. The season explores themes of power, corruption, and redemption, with the characters facing personal struggles and confronting their darkest impulses. "Angel" Season 4 offers a dark and compelling exploration of the consequences of making compromises in the fight against evil.` : `The fifth and final season of "Angel" takes the series to new heights of intensity and complexity. As the team at Angel Investigations settles into their roles at Wolfram & Hart, they face the challenge of maintaining their principles while working within a morally ambiguous environment. The season introduces a mysterious new member, Spike (James Marsters), and delves into the prophetic visions of Fred (Amy Acker) and the enigmatic role of the ancient demon Illyria. With high stakes and unexpected twists, Season 5 delves into themes of destiny, sacrifice, and the nature of heroism. "Angel" Season 5 offers a thrilling and emotionally charged conclusion to the series, leaving fans captivated until the very end.` }</p>
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
                    See more
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
    "https://buffy-angel-api.onrender.com/api/angel"
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
    "https://buffy-angel-api.onrender.com/api/angel"
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
