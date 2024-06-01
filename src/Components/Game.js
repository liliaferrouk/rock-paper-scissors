import React from 'react'
import './Game.css'
import Piece from './Piece'

function Game({youPicked,housePicked,endOfGame,newPartie}) {
  function getResultMessage() {
    if (youPicked === housePicked) {
      return "A TIE!";
    }

    const rules = {
      1: { beats: 3 }, // Rock beats Scissors
      2: { beats: 1 }, // Paper beats Rock
      3: { beats: 2 }, // Scissors beats Paper
    };

    if (rules[youPicked].beats === housePicked) {
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  }

  return (
    <div className='game-div'>
      <div className='pieces'>
        <div className='une-piece'>
          <Piece num={youPicked}/>
          <p>YOU PICKED</p>
        </div>
        <div className='une-piece'>
          {
            housePicked ?
            <Piece num={housePicked}/>:
            <div className='piece-vide'></div>
          }
          <p>THE HOUSE PICKED</p>
        </div>
      </div>
      {
        endOfGame &&
        <div className='result'>
          <p>{getResultMessage()}</p>
          <div className='btn-play-again' onClick={newPartie}>PLAY AGAIN</div>
        </div>
      }
    </div>
  )
}

export default Game