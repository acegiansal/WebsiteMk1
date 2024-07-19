import { ReactNode, Children } from "react";

import "./WeightedRow.css";

interface TableGridProps {
  children: ReactNode;
  bias: "balanced" | "right" | "left";
}

const TableGrid = ({ children, bias }: TableGridProps) => {
  const base_row = "weighted-row";
  const biased_row = base_row + " biased-row";

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
      <table>
        <tbody>
          <tr>
            {biased_index != -1
              ? Children.map(children, (child, index) => (
                  <td className={index == biased_index ? biased_row : base_row}>
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

export default TableGrid;
