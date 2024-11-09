
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function SolveBtn() {
  return (
      <div className={styleSolveBtn.container}>
        <FontAwesomeIcon 
            icon={faPlay} 
            className={styleSolveBtn.icon}
          />
        <p className={styleSolveBtn.text}>Solve</p>  
      </div>
  )
}

const styleSolveBtn= {
  container: 'cursor-pointer flex flex-col justify-center items-center gap-2 md:gap-1 group',
  icon: 'text-5xl md:text-4xl text-Green',
  text: 'text-xl md:text-sm text-transparent group-hover:text-Grey',
}