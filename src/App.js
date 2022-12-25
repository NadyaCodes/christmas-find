import "./App.css";
import Tree from "./Tree";
import Grid from "./Grid";
import Presents from "./Presents";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState({ star: false, pot: false });

  return (
    <div className="App">
      <Tree />
      <Grid visible={visible} setVisible={setVisible} />
      <Presents visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
