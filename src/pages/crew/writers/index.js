import Link from "next/link";
import Head from "next/head";
import Profile from "@/components/features/Profile/Profile";

const WriterInfoPage = ({ writers }) => {
  return (
    <div className="grid crewByCategory">
      <Head>
        <title>Writers | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          content={`Explore the diverse world of writers and creators behind the iconic TV shows Buffy the Vampire Slayer and Angel, and discover the storytelling techniques and inspiration behind their work.`}
        />
      </Head>
      <div className="titleSection">
        <Link href={"/crew"}>Crew Overview</Link>
        <h1>
          Writers <br></br>
          <span>+</span>
        </h1>
        <p className="subText">
          Unleash your imagination and delve into the creative genius of the
          talented writers behind Buffy the Vampire Slayer and Angel, as they
          wove intricate narratives, compelling character arcs, and
          thought-provoking themes into these iconic shows, forever captivating
          our hearts and minds.
        </p>
      </div>
      <div className="profiles">
        <div className="profileGrid">
          {" "}
          {writers.map((writer) => (
            <Profile key={writer._id} data={writer} typeLink="writers" />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://buffy-angel-api.up.railway.app/api/writers");
  const writers = await response.json();

  return {
    props: {
      writers,
    },
  };
}

export default WriterInfoPage;
