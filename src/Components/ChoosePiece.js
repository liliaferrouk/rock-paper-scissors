import React from 'react'
import './ChoosePiece.css'
import img_triongle from '../images/bg-triangle.svg'
import Piece from './Piece'

function ChoosePiece({setYouPicked}) {
  return (
    <div className='ChoosePiece-div'>
      <img className='triangle' src={img_triongle} alt="triangle" />
      <div className='div1'>
        <Piece num={1} setYouPicked={setYouPicked}/>
        <Piece num={2} setYouPicked={setYouPicked}/>
      </div>
      <div className='div2'>
        <Piece num={3} setYouPicked={setYouPicked}/>
      </div>
    </div>
  )
}

export default ChoosePiece