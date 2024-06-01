import React from 'react'
import img_1 from '../images/icon-paper.svg'
import img_2 from '../images/icon-scissors.svg'
import img_3 from '../images/icon-rock.svg'

function Piece({num,setYouPicked}) {
  const images = [img_1, img_2, img_3];
  const altTexts = ['paper', 'scissors', 'rock'];

  const gradients = [
    'linear-gradient(to bottom, var(--clr-paper-h), var(--clr-paper-b))',
    'linear-gradient(to bottom, var(--clr-scissors-h), var(--clr-scissors-b))',
    'linear-gradient(to bottom, var(--clr-rock-h), var(--clr-rock-b))'
  ];

  const handleClick = () => {
    if (setYouPicked) {
      setYouPicked(num);
    }
  };

  return (
    <div className='piece-div' style={{ background: gradients[num - 1] }} onClick={handleClick}>
      <div>
        <img src={images[num-1]} alt={altTexts[num-1]} />
      </div>
    </div>
  )
}

export default Piece