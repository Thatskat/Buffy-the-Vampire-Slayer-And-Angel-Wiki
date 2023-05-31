import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Profile from "@/components/features/Profile/Profile";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CrewPage = ({ actors, writers, directors }) => {
  const [prevActor, setPrevActor] = useState(0);
  const [nextActor, setNextActor] = useState(2);
  const [prevWriter, setPrevWriter] = useState(0);
  const [nextWriter, setNextWriter] = useState(2);
  const [prevDirector, setPrevDirector] = useState(1);
  const [nextDirector, setNextDirector] = useState(3);

  // PAGINATION NEXT
  const handleNextActor = () => {
    if (nextActor < 9) {
      setNextActor(nextActor + 3);
      setPrevActor(prevActor + 3);
    }
  };

  const handleNextWriter = () => {
    if (nextWriter < 9) {
      setNextWriter(nextWriter + 3);
      setPrevWriter(prevWriter + 3);
    }
  };
  const handleNextDirector = () => {
    if (nextDirector < 10) {
      setNextDirector(nextDirector + 3);
      setPrevDirector(prevDirector + 3);
    }
  };
  // PAGINATION PREV
  const handlePrevActor = () => {
    if (prevActor > 0) {
      setNextActor(nextActor - 3);
      setPrevActor(prevActor - 3);
    }
  };
  const handlePrevWriter = () => {
    if (prevWriter > 0) {
      setNextWriter(nextWriter - 3);
      setPrevWriter(prevWriter - 3);
    }
  };
  const handlePrevDirector = () => {
    if (prevDirector > 1) {
      setNextDirector(nextDirector - 3);
      setPrevDirector(prevDirector - 3);
    }
  };

  return (
    <div className="grid crewPage">
      <Head>
        <title>Crew Profiles | Buffy the Vampire Slayer + Angel Wiki</title>
      </Head>
      <div className="titleSection">
        <h1>
          Crew <br></br>Profiles <br></br> <span>+</span>
        </h1>
        <p className="subText">
          Step behind the curtain and discover the brilliant minds and
          incredible talents that brought the Buffy the Vampire Slayer and Angel
          universe to life. Our Buffy the Vampire Slayer and Angel Cast and Crew
          Wiki is a tribute to the visionary creators, talented actors,
          dedicated writers, and passionate crew members who shaped these
          groundbreaking shows. Explore the profiles of the brilliant cast
          members who embodied the beloved characters, uncover the visionary
          minds behind the camera, and gain insights into the creative process
          that breathed life into these iconic series. From Joss Whedon's
          imaginative storytelling to the unforgettable performances that made
          us laugh, cry, and cheer, this wiki celebrates the extraordinary
          individuals who made Buffy and Angel the cultural phenomena they are
          today. Join us in honoring their remarkable contributions and
          celebrate the magic they brought to our screens.
        </p>
      </div>
      <div className="crewProfiles">
        <div className="crewCollection">
          <Link href={"/crew/actors"}>
            <h3>The Actors</h3>
          </Link>
          <p>
            Experience the brilliance and talent of the remarkable cast members
            who brought the iconic characters of Buffy the Vampire Slayer and
            Angel to life, captivating audiences with their extraordinary
            performances and forever leaving an indelible mark on the world of
            television.
          </p>
          <div className="crewGrid">
            <button onClick={handlePrevActor}>
              <IoIosArrowBack />
            </button>
            {actors.map(
              (actor, index) =>
                index <= nextActor &&
                index >= prevActor && (
                  <Profile key={actor._id} data={actor} typeLink="actors" />
                )
            )}
            <button onClick={handleNextActor}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="crewCollection">
          <Link href={"/crew/directors"}>
            <h3>The Directors</h3>
          </Link>
          <p>
            Discover the visionary directors who skillfully crafted the
            immersive worlds of Buffy the Vampire Slayer and Angel, bringing to
            life the supernatural adventures, emotional depth, and unforgettable
            moments that have enthralled fans around the globe.
          </p>
          <div className="crewGrid">
            <button onClick={handlePrevDirector}>
              <IoIosArrowBack />
            </button>
            {directors.map(
              (director, index) =>
                index <= nextDirector &&
                index >= prevDirector && (
                  <Profile
                    key={director._id}
                    data={director}
                    typeLink="directors"
                  />
                )
            )}
            <button onClick={handleNextDirector}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="crewCollection">
          <Link href={'/crew/writers'}>
          <h3>The Writers</h3></Link>
     
          <p>
            Unleash your imagination and delve into the creative genius of the
            talented writers behind Buffy the Vampire Slayer and Angel, as they
            wove intricate narratives, compelling character arcs, and
            thought-provoking themes into these iconic shows, forever
            captivating our hearts and minds.
          </p>
          <div className="crewGrid">
            <button onClick={handlePrevWriter}>
              <IoIosArrowBack />
            </button>
            {writers.map(
              (writer, index) =>
              index <= nextWriter &&
              index >= prevWriter && (
                  <Profile key={writer._id} data={writer} typeLink="writers" />
                )
            )}
            <button onClick={handleNextWriter}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const aResponse = await fetch("https://btvs-angel-api-production-3a72.up.railway.app/api/actors");
  const wResponse = await fetch("https://btvs-angel-api-production-3a72.up.railway.app/api/writers");
  const dReponse = await fetch("https://btvs-angel-api-production-3a72.up.railway.app/api/directors");
  const actors = await aResponse.json();
  const writers = await wResponse.json();
  const directors = await dReponse.json();

  return {
    props: {
      actors,
      writers,
      directors,
    },
  };
}

export default CrewPage;
