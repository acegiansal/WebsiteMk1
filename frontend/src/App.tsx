import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShadowCard from "./components/ShadowCard";
import MinimalCallout from "./components/MinCalloutComp/MinimalCallout";

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
    </>
  );
}

export default App;
