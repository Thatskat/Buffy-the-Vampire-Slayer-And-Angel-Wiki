import Link from "next/link";

const SeasonCards = ({ show, season, seasonDescription }) => {
  return (
    <div className="seasonCard">
      <Link href={`/${show}/${season}`}>
        <h4>Season {season}</h4>
        <p>{seasonDescription}</p>
      </Link>
    </div>
  );
};

export default SeasonCards;
