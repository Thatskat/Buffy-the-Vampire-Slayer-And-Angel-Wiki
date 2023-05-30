import Link from "next/link";
import Head from "next/head";

import SeasonCards from "@/components/features/SeasonCards";
import Profile from "@/components/features/Profile/Profile";
import TitleSection from "@/components/layout/TitleSection";

const buffyOverviewPage = ({ buffyEpisodes }) => {
  return (
    <div className="buffyInfoPage">
      <Head>
        <title>
          Buffy the Vampire Slayer | Buffy the Vampire Slayer + Angel Wiki
        </title>
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
              <div className="grid">
                {buffyEpisodes.map((episode) =>
                  episode?.episodeCast.map(
                    (cast, index) =>
                      index < 6 && (
                        <Profile key={cast._id} data={cast} typeLink="actors" />
                      )
                  )
                )}
              </div>
            </div>
            <div className="trailer">
              <video width="95%" height="auto" controls autoPlay>
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
                <SeasonCards show="buffy" season="1" />
                <SeasonCards show="buffy" season="2" />
                <SeasonCards show="buffy" season="3" />
                <SeasonCards show="buffy" season="4" />
                <SeasonCards show="buffy" season="5" />
                <SeasonCards show="buffy" season="6" />
                <SeasonCards show="buffy" season="7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/buffy/season/7/1");
  const buffyEpisodes = await response.json();

  return {
    props: {
      buffyEpisodes,
    },
  };
}

export default buffyOverviewPage;
