import { ReactNode, Children } from "react";

import "./WeightedRow.css";

interface TableGridProps {
  children: ReactNode;
}

const TableGrid = ({ children }: TableGridProps) => {
  return (
    <>
      <table>
        <tr>
          {Children.map(children, (child) => (
            <td>{child}</td>
          ))}
        </tr>
      </table>
    </>
  );
};

export default TableGrid;
