
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

export default function CheckBtn() {
  return (
      <div className={styleCheckBtn.container}>
        <FontAwesomeIcon 
            icon={faSquareCheck} 
            className={styleCheckBtn.icon}
          />
        <small className={styleCheckBtn.text}>Check</small>  
      </div>
  )
}

const styleCheckBtn= {
  container: 'cursor-pointer flex flex-col justify-center items-center gap-2 md:gap-1 group',
  icon: 'text-5xl md:text-4xl text-Blue',
  text: 'text-transparent group-hover:text-Grey text-xl md:text-sm ',
}