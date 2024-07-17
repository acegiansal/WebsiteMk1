import { useState } from "react";
import reactLogo from "./assets/react.svg";
import header from "./assets/BESTPLAYER.png";
import "./App.css";
import ShadowCard from "./components/ShadowCard";
import MinimalCallout from "./components/MinCalloutComp/MinimalCallout";
import TitleCard from "./components/TitleCardComp/TitleCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MinimalCallout type="right" spacing={3}>
        Hello, this is a test
      </MinimalCallout>

      <ShadowCard shadowGap={20} maxWidth={300}>
        Hello Again
      </ShadowCard>
      <br />
      <TitleCard
        title="This is a test"
        height={500}
        textColour="black"
        backgroundColour="white"
      ></TitleCard>
    </>
  );
}

export default App;
