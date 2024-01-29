import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OutlineButton from "./components/ui/Button/OutlineButton";
import RoundedButton from "./components/ui/Button/RoundedButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OutlineButton className={"text-error border-error"}>
        Button
      </OutlineButton>
      <RoundedButton className={"text-primary bg-bg-info"}>
        Button
      </RoundedButton>
    </>
  );
}

export default App;
