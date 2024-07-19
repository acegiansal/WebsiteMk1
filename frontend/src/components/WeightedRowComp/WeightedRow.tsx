import { ReactNode, Children } from "react";

import "./WeightedRow.css";

interface WeightedRowProps {
  children: ReactNode;
  bias: "balanced" | "right" | "left";
  strength?: number;
  horizontalMargin?: string;
}

const WeightedRow = ({
  children,
  bias,
  strength = 70,
  horizontalMargin = "5px",
}: WeightedRowProps) => {
  const base_row = "weighted-row";
  const biased_row = base_row + " biased-row";

  const table_style = {
    width: "95%",
    marginLeft: horizontalMargin,
    marginRight: horizontalMargin,
  };
  const biased_row_style = {
    width: "" + strength + "%",
  };

  let biased_index: number;

  if (bias == "right") {
    biased_index = (children as React.ReactNode[]).length - 1;
  } else if (bias == "left") {
    biased_index = 0;
  } else {
    biased_index = -1;
  }

  return (
    <>
      <table style={table_style}>
        <tbody>
          <tr>
            {biased_index != -1
              ? Children.map(children, (child, index) => (
                  <td
                    className={index == biased_index ? biased_row : base_row} // Use biased_row styling
                    style={index == biased_index ? biased_row_style : {}} // Instead of using class, allow user to set bias strength
                  >
                    {child}
                  </td>
                ))
              : Children.map(children, (child, index) => (
                  <td className={base_row}>{child}</td>
                ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WeightedRow;
