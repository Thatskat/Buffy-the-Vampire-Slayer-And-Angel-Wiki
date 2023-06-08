import Link from "next/link";
import Head from "next/head";

import SeasonCards from "@/components/features/SeasonCards";
import ProfileInfo from "@/components/features/ProfileInfo";
import Profile from "@/components/features/Profile/Profile";
import TitleSection from "@/components/layout/TitleSection";

const AngelOverviewPage = ({ angelEpisodes }) => {
  return (
    <div className="buffyInfoPage">
      <Head>
        <title>Angel | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          content={`Angel is a popular TV show that aired from 1999 to 2004, consisting of five seasons and 110 episodes. Find out more about the show, its characters, and its most memorable episodes.`}
        />
      </Head>
      <div className="grid">
        <div className="pageInfo">
          <div className="grid">
            <div>
              <TitleSection
                showName="Angel"
                secondTitle=""
                briefDescription="The vampire Angel, cursed with a soul, moves to Los Angeles and aids people with supernatural-related problems while questing for his own redemption."
                longDescription={`
                "Angel" is a thrilling supernatural drama series that follows the story of Angel, a brooding vampire with a soul who seeks redemption for his past sins by helping the helpless in the dark streets of Los Angeles. After leaving Buffy the Vampire Slayer in search of his own path, Angel establishes a detective agency to aid both humans and supernatural beings. Together with his team, which includes the street-smart vampire Spike, the empathic Cordelia Chase, and the brilliant Wesley Wyndam-Pryce, Angel battles against various malevolent forces, including demons, vampires, and ancient prophecies, all while navigating complex relationships and facing his own inner demons. With a blend of action, suspense, and poignant character development, "Angel" offers a captivating exploration of redemption, loyalty, and the enduring struggle between good and evil.`}
                endingDescription={`"Angel" is a gripping and poignant spin-off series that delves into the darker corners of the Buffyverse, exploring themes of redemption, sacrifice, and the constant battle between light and darkness, ultimately solidifying its own unique legacy in the world of supernatural television.`}
              />
              <h3 id="creatorTitle">Created By</h3>
              <div className="castGrid">
                {angelEpisodes.map((episode) =>
                  episode?.writer.map(
                    (writer, index) =>
                      index < 2 && (
                        <Profile
                          key={writer._id}
                          data={writer}
                          typeLink="directors"
                        />
                      )
                  )
                )}
              </div>

              <h3>Starring</h3>
              <div className="castGrid">
                {angelEpisodes.map((episode) =>
                  episode?.episodeCast.map(
                    (cast, index) =>
                      index < 6 && (
                        <ProfileInfo key={cast._id} data={cast} typeLink="actors" />
                      )
                  )
                )}
              </div>
            </div>
            <div className="trailer">
              <video width="95%" height="auto" controls autoPlay loop>
                <source src="/trailers/angel-trailer.webm" type="video/webm" />
              </video>
              <p className="videoReference">
                Video curtesy of{" "}
                <Link
                  href={
                    "https://en.wikipedia.org/wiki/Mutant_Enemy_Productions"
                  }
                  target="_blank"
                >
                  Mutant Enemy Productions
                </Link>
              </p>
              <p className="videoReference">
                Mutant Enemy Productions is a production company that was
                created in 1996 by Joss Whedon to produce Buffy the Vampire
                Slayer.
              </p>
              <h3>Seasons</h3>
              <div className="seasonsGrid">
                <SeasonCards
                  show="angel"
                  season="1"
                  seasonDescription={`The first season of the television series Angel, the spin-off of Buffy the Vampire Slayer, premiered on October 5, 1999, on The WB and concluded its 22-episode season on May 23, 2000. The season aired on Tuesdays at 9:00 pm ET, following Buffy. `}
                />
                <SeasonCards
                  show="angel"
                  season="2"
                  seasonDescription={`The second season of the television series Angel, the spin-off of Buffy the Vampire Slayer, premiered on September 26, 2000 on The WB and concluded its 22-episode season on May 22, 2001. It maintained its previous timeslot, airing Tuesdays at 9:00 pm ET, following Buffy.`}
                />
                <SeasonCards
                  show="angel"
                  season="3"
                  seasonDescription={`The third season of the television series Angel, the spin-off of Buffy the Vampire Slayer, premiered on September 24, 2001 on The WB and concluded its 22-episode season on May 20, 2002. The season aired in a new timeslot, Mondays at 9:00 pm ET.`}
                />
                <SeasonCards
                  show="angel"
                  season="4"
                  seasonDescription={`The fourth season of the television series Angel, the spin-off of Buffy the Vampire Slayer, premiered on October 6, 2002 on The WB and concluded its 22-episode season on May 7, 2003.`}
                />
                <SeasonCards
                  show="angel"
                  season="5"
                  seasonDescription={`The fifth and final season of the television series Angel, the spin-off of Buffy the Vampire Slayer, premiered on October 1, 2003 on The WB and concluded its 22-episode season and its television run on May 19, 2004. The season aired on Wednesdays at 9:00 pm ET. `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://buffy-angel-api.up.railway.app/api/angel/season/3/5"
  );
  const angelEpisodes = await response.json();

  return {
    props: {
      angelEpisodes,
    },
  };
}

export default AngelOverviewPage;
