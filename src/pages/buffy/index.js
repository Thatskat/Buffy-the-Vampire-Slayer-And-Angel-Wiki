import Link from "next/link";
import Head from "next/head";

import SeasonCards from "@/components/features/SeasonCards";
import ProfileInfo from "@/components/features/ProfileInfo";
import Profile from "@/components/features/Profile";
import TitleSection from "@/components/layout/TitleSection";

const buffyOverviewPage = ({ buffyEpisodes }) => {
  return (
    <div className="buffyInfoPage">
      <Head>
        <title>
          Buffy the Vampire Slayer | Buffy the Vampire Slayer + Angel Wiki
        </title>
        <meta
          name="description"
          description={`Buffy the Vampire Slayer is a cult classic and beloved television series with seven seasons and 144 episodes. Dive into the world of Buffy and her friends with this guide to the show's seasons, key episodes, and essential viewing.`}
        />
      </Head>
      <div className="grid">
        <div className="pageInfo">
          <div className="grid">
            <div>
              <TitleSection
                showName="Buffy the Vampire"
                secondTitle="Slayer"
                briefDescription="A young woman, destined to slay vampires, demons and other infernal
        creatures, deals with her life fighting evil, with the help of her
        friends."
                longDescription={`"In every generation there is a chosen one... she alone will stand
        against the vampires, the demons and the forces of darkness. She is the
        slayer." Buffy Summers knows this tale by heart, and no matter how hard
        she tries to be just a "normal girl", she can not escape from her
        destiny... Thankfully, she is not alone in her quest to save the world,
        as she has the help of her friends, the hilarious (and surprisingly
        quite effective) evil-fighting team called "The Scooby Gang". Together,
        Buffy & co. will slay their demons, survive one apocalypse after
        another, attend high school and college... and above all, understand
        that growing up can truly be Hell sometimes... literally.`}
                endingDescription={`"Buffy the Vampire Slayer" is an iconic television series that combines supernatural elements, teenage angst, and empowering themes of friendship, love, and self-discovery, leaving a lasting impact on pop culture and establishing itself as a beloved classic.`}
              />
              <h3 id="creatorTitle">Created By</h3>

              {buffyEpisodes?.map((episode) => (
                <Profile
                  key={episode.writer[0]._id}
                  data={episode.writer[0]}
                  typeLink="directors"
                />
              ))}
              <h3>Starring</h3>
              <div className="castGrid">
                {buffyEpisodes.map((episode) =>
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
                <source src="/trailers/buffy-trailer.webm" type="video/webm" />
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
      
              <h3>Seasons</h3>
              <div className="seasonsGrid">
                <SeasonCards show="buffy" season="1" seasonDescription={`The first season of the American supernatural drama television series Buffy the Vampire Slayer originally aired between March 10 and June 2, 1997 on The WB.`}/>
                <SeasonCards show="buffy" season="2" seasonDescription={`The second season of the television series Buffy the Vampire Slayer premiered on September 15, 1997, on The WB and concluded its 22-episode season on May 19, 1998.`}/>
                <SeasonCards show="buffy" season="3" seasonDescription={`The third season of the television series Buffy the Vampire Slayer premiered on September 29, 1998 on The WB and episode 22, the second of the two part season finale, aired on July 13, 1999. However, episode 18 "Earshot" did not air until September 21, 1999, shortly before the season 4 premiere.`}/>
                <SeasonCards show="buffy" season="4" seasonDescription={`The fourth season of the television series Buffy the Vampire Slayer premiered on October 5, 1999, on The WB and concluded its 22-episode season on May 23, 2000. It maintained its previous timeslot, airing Tuesdays at 8:00 pm ET. `}/>
                <SeasonCards show="buffy" season="5" seasonDescription={`The fifth season of the television series Buffy the Vampire Slayer premiered on September 26, 2000 on The WB and concluded its 22-episode season on May 22, 2001. It maintained its previous timeslot, airing Tuesdays at 8:00 pm ET.`}/>
                <SeasonCards show="buffy" season="6" seasonDescription={`The sixth season of the television series Buffy the Vampire Slayer premiered on October 2, 2001, with a two-hour premiere on UPN and concluded its 22-episode season with a two-hour finale on May 21, 2002. It maintained its previous timeslot, airing Tuesdays at 8:00 pm ET.`} />
                <SeasonCards show="buffy" season="7" seasonDescription={`The seventh and final season of the television series Buffy the Vampire Slayer premiered on September 24, 2002 on UPN and concluded its 22-episode run on May 20, 2003. It maintained its previous timeslot, airing Tuesdays at 8:00 pm ET.`}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://buffy-angel-api.up.railway.app/api/buffy/season/7/1");
  const buffyEpisodes = await response.json();

  return {
    props: {
      buffyEpisodes,
    },
  };
}

export default buffyOverviewPage;
