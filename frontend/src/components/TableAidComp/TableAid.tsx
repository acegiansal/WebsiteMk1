import { useState, useEffect } from "react";

import "./TableAid.css";

interface TableAidProps {
  data: Array<Object>;
  url?: string;
}

const TableAid = ({ data, url }: TableAidProps) => {
  let keys: Array<string>;

  if (data.length > 0) {
    keys = Object.keys(data[0]);
  } else {
    keys = [];
  }

  const [table_data, setTableData] = useState([]);

  if (url) {
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((info) => {
          setTableData(info);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {keys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        {data.map((node) => (
          <tr>
            {Object.entries(node).map(([key, value], index) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export default TableAid;
