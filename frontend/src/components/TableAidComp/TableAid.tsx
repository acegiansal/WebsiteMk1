import "./TableAid.css";

interface TableAidProps {
  data: Array<Object>;
}

const TableAid = ({ data }: TableAidProps) => {
  let keys: Array<string>;

  if (data.length > 0) {
    keys = Object.keys(data[0]);
  } else {
    keys = [];
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
