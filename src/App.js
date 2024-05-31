import { useState } from "react";
import Rules from "./Components/Rules";
import Header from "./Components/Header";
import Game from "./Components/Game";
import ChoosePiece from "./Components/ChoosePiece";

function App() {
  const [showRules,setShowRules]=useState(false)
  const [youPicked, setYouPicked]=useState(null)
  const [housePicked,setHousePicked]=useState(null)
  const [endOfGame,setEndOfGame]=useState(false)
  const [score,setScore]=useState(0)

  return (
    <div className="App">
      {
        showRules ?
        <Rules/> :
        <>
          <Header/>
          {
            youPicked ?
            <Game/> :
            <ChoosePiece/>
          }
          <div className="btn-rules">RULES</div>
        </>
      }
    </div>
  );
}

export default App;