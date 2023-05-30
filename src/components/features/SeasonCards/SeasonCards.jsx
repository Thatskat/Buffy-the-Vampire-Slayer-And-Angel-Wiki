import Link from "next/link";

const SeasonCards = ({show, season}) => {
  return (
    <div className="seasonCard">
      <Link href={`/${show}/${season}`}>
        <h4>Season {season}</h4>
      </Link>
    </div>
  );
};

export default SeasonCards;
