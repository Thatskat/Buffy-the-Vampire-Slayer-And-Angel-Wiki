const TitleSection = ({
  showName,
  secondTitle,
  briefDescription,
  longDescription,
  endingDescription,
}) => {
  return (
    <>
      {" "}
      <h1>
        {showName} <br></br>
        {secondTitle} <br></br>
        <span>+</span>
      </h1>
      <p className="subText">{briefDescription}</p>
      <p>{longDescription}</p>
      <p>{endingDescription}</p>
    </>
  );
};

export default TitleSection;
