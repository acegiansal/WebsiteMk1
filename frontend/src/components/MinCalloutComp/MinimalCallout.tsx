import { ReactNode, Children } from "react";
import "./MinCallout.css";

interface MinCalloutProps {
  children?: ReactNode;
  type: "default" | "left" | "right";
}

const MinimalCallout = ({ children, type = "default" }: MinCalloutProps) => {
  return (
    <>
      <div></div>
    </>
  );
};

export default MinimalCallout;
