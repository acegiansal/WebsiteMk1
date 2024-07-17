import { ReactNode, Children } from "react";
import shadow from "../assets/thin_shadow_smaller.png";

/**
 * NOTE! The shadow itself is 40px, thus the max height should always take that into account
 */
interface ShadowCardProps {
  shadowGap: number;
  maxWidth: number;
  children?: ReactNode;
  title?: string;
}

const ShadowCard = ({
  children,
  shadowGap,
  maxWidth,
  title,
}: ShadowCardProps) => {
  const cardBuffer = 20;
  const cardStyle = {
    width: maxWidth,
    border: "1px solid",
  };

  const floatStyle = {
    height: shadowGap,
    width: maxWidth,
  };

  const shadowStyle = {
    height: 40,
    width: maxWidth,
    opacity: 0.25,
  };

  const floatDiv = <div style={floatStyle}></div>;
  const titleHeader = <h5 className="card-title">{title}</h5>;
  return (
    <>
      <div>
        <div className="card border-dark mx-1" style={cardStyle}>
          <div className="card-header">Test Floating Card</div>
          <div className="card-body">
            {title && titleHeader}
            {children}
          </div>
        </div>
        <br />
        {floatDiv}
        <br />
        <img src={shadow} style={shadowStyle} alt="shadow" />
      </div>
    </>
  );
};

export default ShadowCard;
