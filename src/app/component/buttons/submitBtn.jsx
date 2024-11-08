
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'postcss';

export default function SubmitBtn() {
  return (
      <div className={styleSubmitBtn.container}>
        <FontAwesomeIcon 
            icon={faRightToBracket} 
            className={styleSubmitBtn.icon}
          />
        <p className={styleSubmitBtn.text}>Submit</p>  
      </div>
  )
}

const styleSubmitBtn= {
  container: 'cursor-pointer flex flex-col justify-center items-center gap-2 md:gap-1 group',
  icon: 'text-5xl md:text-4xl',
  text: 'text-xl md:text-sm text-transparent group-hover:text-Grey',
}