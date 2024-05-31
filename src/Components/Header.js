import React from 'react'
import './Header.css'

function Header({score}) {
  return (
    <div className='header'>
      <div className='title'>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className='div-score'>
        <span>SCORE</span>
        <p>{score}</p>
      </div>
    </div>
  )
}

export default Header