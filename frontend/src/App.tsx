import { useState } from "react";
import reactLogo from "./assets/react.svg";
import header from "./assets/BESTPLAYER.png";
import "./App.css";
import ShadowCard from "./components/ShadowCard";
import MinimalCallout from "./components/MinCalloutComp/MinimalCallout";
import TitleCard from "./components/TitleCardComp/TitleCard";
import TableAid from "./components/TableAidComp/TableAid";
import WeightedRow from "./components/WeightedRowComp/WeightedRow";
import WishObjectForm from "./components/WishObjectFormComp/WishObjectForm";

function App() {
  const [count, setCount] = useState(0);

  let testData = [
    { Test: 1, nothing: "today", Go: "sens go" },
    { Test: 2, nothing: "YESTERDAY", Go: "SENS GO" },
  ];

  return (
    <>
      <TitleCard
        title="This is a Title"
        height={500}
        textColour="black"
        backgroundColour="white"
      ></TitleCard>

      <WeightedRow bias="left" strength={50} horizontalMargin="10px">
        <div>
          This is a test
          <br />
          how big does it go?
        </div>
        <div>Another Test?</div>
        <div>Another another go sens go</div>
      </WeightedRow>
      <hr />
      <WishObjectForm></WishObjectForm>
    </>
  );
}

/*
      <div>
        <MinimalCallout type="left" spacing={3} colour="info">
          Hello, this is a test
        </MinimalCallout>
        <MinimalCallout type="left" spacing={3} colour="bdc">
          <TableAid data={testData}></TableAid>
        </MinimalCallout>
      </div>
*/
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
