import { ReactNode, Children } from "react";
import "./MinCallout.css";

interface MinCalloutProps {
  children?: ReactNode;
  type?: "default" | "left" | "right";
  spacing?: number;
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
}: MinCalloutProps) => {
  let calloutClass = "min-callout ";
  if (type != "default") {
    calloutClass += type + "-min-callout";
  }

  calloutClass += " callout-" + colour;

  //Spacing
  calloutClass += " mx-" + spacing;

  return (
    <>
      <div className={calloutClass}>{children}</div>
    </>
  );
};

export default MinimalCallout;
