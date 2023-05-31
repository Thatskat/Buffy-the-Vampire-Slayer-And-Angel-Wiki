import Link from "next/link";
import Head from "next/head";

import SeasonCards from "@/components/features/SeasonCards";
import Profile from "@/components/features/Profile/Profile";
import TitleSection from "@/components/layout/TitleSection";

const AngelOverviewPage = ({ angelEpisodes }) => {
  return (
    <div className="buffyInfoPage">
      <Head>
        <title>
          Angel | Buffy the Vampire Slayer + Angel Wiki
        </title>
        <meta
          name="description"
          description={`Angel Tv Show 1999 - 2004`}
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
                        <Profile key={cast._id} data={cast} typeLink="actors" />
                      )
                  )
                )}
              </div>
            </div>
            <div className="trailer">
              <video width="95%" height="auto" controls autoPlay>
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
              <h3>Seasons</h3>
              <div className="seasonsGrid">
                <SeasonCards show="angel" season="1" />
                <SeasonCards show="angel" season="2" />
                <SeasonCards show="angel" season="3" />
                <SeasonCards show="angel" season="4" />
                <SeasonCards show="angel" season="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://btvs-angel-api-production-3a72.up.railway.app/api/angel/season/3/5");
  const angelEpisodes = await response.json();

  return {
    props: {
      angelEpisodes,
    },
  };
}

export default AngelOverviewPage;
