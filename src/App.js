import "./App.css";
import Tree from "./Tree";
import Grid from "./Grid";
import Presents from "./Presents";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState({
    star: false,
    pot: false,
    rightBranch: false,
    leftBranch: false,
    midBranch: false,
  });

  return (
    <div className="App">
      <div className="play-container">
        <Tree />
        <Grid visible={visible} setVisible={setVisible} />
      </div>
      <Presents visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
