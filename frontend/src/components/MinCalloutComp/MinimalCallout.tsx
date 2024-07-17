import { ReactNode, Children } from "react";
import "./MinCallout.css";

interface MinCalloutProps {
  children?: ReactNode;
  type?: "default" | "left" | "right";
  spacing?: number;
  height?: number;
  colour?:
    | "default"
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "bdc";
}

const MinimalCallout = ({
  children,
  type = "default",
  colour = "default",
  spacing = 2,
  height,
}: MinCalloutProps) => {
  let calloutClass = "min-callout ";
  if (type != "default") {
    calloutClass += type + "-min-callout";
  }

  calloutClass += " callout-" + colour;

  //Spacing
  calloutClass += " mx-" + spacing;

  let calloutStyle = {
    height: height,
  };

  return (
    <>
      <div className={calloutClass} style={calloutStyle}>
        {children}
      </div>
    </>
  );
};

export default MinimalCallout;
