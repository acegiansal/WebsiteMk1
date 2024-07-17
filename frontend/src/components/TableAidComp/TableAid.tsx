import "./TableAid.css";

interface TableAidProps {
  data: Array<JSON>;
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
      <table>
        <tr>
          {keys.map((key) => (
            <th>{key}</th>
          ))}
        </tr>
        {data.map((node) => (
          <tr>
            {Object.entries(node).map(([key, value], index) => (
              <td>value</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export default TableAid;
