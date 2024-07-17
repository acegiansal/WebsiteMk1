import { useState } from "react";
import reactLogo from "./assets/react.svg";
import header from "./assets/BESTPLAYER.png";
import "./App.css";
import ShadowCard from "./components/ShadowCard";
import MinimalCallout from "./components/MinCalloutComp/MinimalCallout";
import TitleCard from "./components/TitleCardComp/TitleCard";
import TableAid from "./components/TableAidComp/TableAid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TitleCard
        title="This is a test"
        height={500}
        textColour="black"
        backgroundColour="white"
      ></TitleCard>

      <div>
        <span>
          <MinimalCallout type="left" spacing={3} colour="bdc">
            Hello, this is a test
          </MinimalCallout>
        </span>
        <span>
          <MinimalCallout type="right" spacing={3} colour="info">
            Hello
          </MinimalCallout>
        </span>
      </div>
    </>
  );
}

/**
 * (
    <>
      <table>
        <tr>
          <td>
            <MinimalCallout type="left" spacing={3}>
              Hello, this is a test
            </MinimalCallout>
          </td>
          <td>
            <ShadowCard shadowGap={20} maxWidth={300}>
              Hello Again
            </ShadowCard>
          </td>
        </tr>
      </table>

      <br />
      <TitleCard
        title="This is a test"
        height={500}
        textColour="black"
        backgroundColour="white"
      ></TitleCard>
    </>
  );
 */

export default App;
