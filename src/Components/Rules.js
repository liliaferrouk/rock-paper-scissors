import React from 'react'
import './Rules.css'
import img_rules from '../images/image-rules.svg'
import img_close from '../images/icon-close.svg'

function Rules({setShowRules}) {
  return (
    <div className='rules-div'>
      <div>
        <p>RULES</p>
        <img src={img_rules} alt="rules" />
        <img onClick={()=>{setShowRules(false)}} src={img_close} alt="close icon" />
      </div>
    </div>
  )
}

export default Rules