import { useEffect, useState } from "react";
import Rules from "./Components/Rules";
import Header from "./Components/Header";
import Game from "./Components/Game";
import ChoosePiece from "./Components/ChoosePiece";

function App() {
  const [showRules,setShowRules]=useState(false)//false
  const [youPicked, setYouPicked]=useState(null) //null
  const [housePicked,setHousePicked]=useState(null)
  const [endOfGame,setEndOfGame]=useState(false) //false
  const [score,setScore]=useState(0)//0

  useEffect(()=>{
    if(youPicked){
      const timeoutId = setTimeout(()=>{
        const randomNumber = Math.floor(Math.random()*3)+1
        setHousePicked(randomNumber)
      },400)
      return () => clearTimeout(timeoutId);
    }
  },[youPicked])

  useEffect(()=>{
    if(housePicked){
      const timeoutId = setTimeout(()=>{
        setEndOfGame(true)
        const rules = {
          1: { beats: 3 }, // Rock beats Scissors
          2: { beats: 1 }, // Paper beats Rock
          3: { beats: 2 }, // Scissors beats Paper
        };
        if (rules[youPicked].beats === housePicked) {
          setScore(prev=>prev+1)
        }
      },400)
      return () => clearTimeout(timeoutId);
    }
  },[housePicked,youPicked])

  function newPartie(){
    setYouPicked(null)
    setHousePicked(null)
    setEndOfGame(false)
  }

  return (
    <div className="App">
          <Header score={score}/>
          {
            youPicked ?
            <Game youPicked={youPicked} housePicked={housePicked} endOfGame={endOfGame} newPartie={newPartie}/> :
            <ChoosePiece setYouPicked={setYouPicked}/>
          }
          <div className="btn-rules" onClick={()=>{setShowRules(true)}}>RULES</div>
          {showRules && <Rules setShowRules={setShowRules}/>}
    </div>
  );
}

export default App;
