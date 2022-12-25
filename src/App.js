import "./App.css";
import Tree from "./Tree";
import Grid from "./Grid";
import Presents from "./Presents";
import frog from "./frog-face-cute.png";
import bee from "./bee-cute.png";
import cat from "./cat-cute.png";
import dog from "./dog-cute.png";
import daisy from "./daisy-cute.png";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState({
    star: false,
    pot: false,
    rightBranch: false,
    leftBranch: false,
    midBranch: false,
    presents: [frog, bee, cat, dog, daisy],
  });

  // console.log(props.visible);

  // const presents = [frog, bee, cat, dog, daisy];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // let shuffledPresents = shuffle(presents);
  // console.log(shuffledPresents);

  const resetTree = () => {
    setVisible({
      star: false,
      pot: false,
      rightBranch: false,
      leftBranch: false,
      midBranch: false,
      presents: shuffle(visible.presents),
    });
  };

  return (
    <div className="App">
      <button onClick={() => resetTree()}>Reset</button>
      <div className="play-container">
        <Tree />
        <Grid visible={visible} setVisible={setVisible} />
      </div>
      <Presents visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
