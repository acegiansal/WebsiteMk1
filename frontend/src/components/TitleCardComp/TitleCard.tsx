import React from "react";

interface TitleCardProps {
  title: string;
  image?: string;
  height: number;
  textColour?: string;
  backgroundColour?: string;
}

const TitleCard = ({
  title,
  image,
  height,
  textColour = "black",
  backgroundColour = "white",
}: TitleCardProps) => {
  let cardStyle = {
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: height,
    backgroundColor: backgroundColour,
    // color: backgroundColour,
    backgroundImage: "",
  };

  if (image) {
    cardStyle.backgroundImage = `url(${image})`;
  }

  let titleStyle = {
    textAlign: "center" as const, // as const is to stop compiler errors
    color: textColour,
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={cardStyle}
      >
        <h1 className="display-1" style={titleStyle}>
          {title}
        </h1>
      </div>
    </>
  );
};

export default TitleCard;
