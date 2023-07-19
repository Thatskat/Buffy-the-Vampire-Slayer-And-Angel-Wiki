import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
      
          Back to Buffy the Vampire Slayer Overview
        </Link>
        <h1>
          Buffy the Vampire <br></br> Slayer <br></br> <span>+</span> <br></br>{" "}
          Season <span>{season[0].seasonNumber}</span>
        </h1>
         <p className="subText">{season[0].seasonNumber === 1 ? `The first season of "Buffy the Vampire Slayer" introduces viewers to the world of Buffy Summers (Sarah Michelle Gellar), a young woman chosen to battle the forces of evil as the Slayer. Set in the fictional town of Sunnydale, the season follows Buffy as she balances her responsibilities as a high school student with her supernatural duty. Alongside her loyal friends Xander (Nicholas Brendon) and Willow (Alyson Hannigan), Buffy faces various supernatural threats, including vampires, demons, and mystical artifacts. Season 1 explores themes of empowerment, friendship, and the internal struggles faced by Buffy as she embraces her destiny as the Slayer.` : season[0].seasonNumber === 2 ? `The second season of "Buffy the Vampire Slayer" takes the series to new heights of emotional depth and storytelling. As Buffy Summers (Sarah Michelle Gellar) continues her battle against the forces of darkness in Sunnydale, she faces personal and supernatural challenges unlike anything before. The season introduces Angel's (David Boreanaz) curse-related consequences, leading to heart-wrenching moments and a heartbreaking climax. Buffy's relationship with her friends Willow (Alyson Hannigan) and Xander (Nicholas Brendon) evolves, while new characters like Spike (James Marsters) and Drusilla (Juliet Landau) bring compelling antagonism. Season 2 explores themes of love, loss, identity, and the price of being the Slayer, leaving a lasting impact on the viewers.` : season[0].seasonNumber === 3  ? `The third season of "Buffy the Vampire Slayer" presents a thrilling and transformative chapter in the series. Buffy Summers (Sarah Michelle Gellar) enters her senior year of high school, facing new challenges as she balances her Slayer duties with academic and personal struggles. The season delves into the complexities of Buffy's relationships, including her passionate romance with Angel (David Boreanaz) and her evolving friendship with the charismatic vampire, Spike (James Marsters). It introduces powerful new adversaries like the relentless Mayor Richard Wilkins (Harry Groener) and explores themes of identity, choice, and the price of growing up. Season 3 offers a captivating mix of action, emotion, and character growth that continues to captivate fans.`: season[0].seasonNumber === 4 ? `The fourth season of "Buffy the Vampire Slayer" marks a significant shift in the series as Buffy (Sarah Michelle Gellar) begins her college life at UC Sunnydale. The season explores the challenges of newfound independence, as Buffy faces not only supernatural threats but also the pressures of academia and adult responsibilities. With the introduction of the Initiative, a secretive government organization, the line between friend and foe becomes blurred. Season 4 introduces new characters, including Riley Finn (Marc Blucas), Buffy's romantic interest, and explores themes of identity, trust, and the consequences of tampering with supernatural forces. It offers a mix of action, humor, and character development as Buffy's world expands beyond high school.` : season[0].seasonNumber === 5 ? `The fifth season of "Buffy the Vampire Slayer" delivers an emotionally powerful and transformative chapter. As Buffy (Sarah Michelle Gellar) grapples with her role as the Slayer, she faces a formidable new adversary in the form of the ancient and powerful vampire, Glory (Clare Kramer). The season delves into complex family dynamics with the arrival of Buffy's younger sister, Dawn (Michelle Trachtenberg), who holds a mysterious secret. Themes of sacrifice, love, and the weight of responsibility are explored as Buffy confronts her own mortality and faces a heartbreaking and climactic battle that forever changes her world. Season 5 is a poignant and poignant journey that captivates viewers until the very end.`  : season[0].seasonNumber === 6 ? `The sixth season of "Buffy the Vampire Slayer" delves into the darkest and most challenging territory yet. As Buffy (Sarah Michelle Gellar) returns from the afterlife, she struggles with depression, disillusionment, and the consequences of her resurrection. The season explores themes of addiction, power dynamics, and the complexities of relationships. Buffy's friends face their own personal demons, and new villains, like the Trio, emerge to test their strength. With a raw and gritty tone, Season 6 delves into the depths of the human experience, showcasing the characters' vulnerabilities and resilience in the face of overwhelming darkness. It is a season of emotional turmoil and character growth that leaves a lasting impact.` : `The seventh and final season of "Buffy the Vampire Slayer" delivers an epic culmination to the beloved series. As the mystical Hellmouth in Sunnydale becomes increasingly active, Buffy (Sarah Michelle Gellar) rallies a group of potential Slayers to join her in the ultimate battle against the forces of evil. The season explores themes of empowerment, leadership, and the enduring power of friendship. With the return of familiar faces and the introduction of new allies and adversaries, Season 7 raises the stakes to unprecedented levels. It is a season filled with heart-pounding action, poignant character arcs, and a bittersweet farewell that leaves a lasting legacy for fans.`}</p>
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
  const response = await fetch("https://buffy-angel-api.onrender.com/api/buffy");
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
  const response = await fetch("https://buffy-angel-api.onrender.com/api/buffy");
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
