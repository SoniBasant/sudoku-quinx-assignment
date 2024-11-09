
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

export default function ValidateBtn() {
  return (
      <div className={styleValidateBtn.container}>
        <FontAwesomeIcon 
            icon={faSquareCheck} 
            className={styleValidateBtn.icon}
          />
        <small className={styleValidateBtn.text}>Validate</small>  
      </div>
  )
}

const styleValidateBtn= {
  container: 'cursor-pointer flex flex-col justify-center items-center gap-2 md:gap-1 group',
  icon: 'text-5xl md:text-4xl text-Blue',
  text: 'text-transparent group-hover:text-Grey text-xl md:text-sm ',
}