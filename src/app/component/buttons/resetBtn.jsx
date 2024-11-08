
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function ResetBtn() {
  return (
      <div className={styleResetBtn.container}>
        <FontAwesomeIcon 
            icon={faRotateRight} 
            className={styleResetBtn.icon}
          />
        {/* <p className={styleResetBtn.text}>Reset</p>   */}
      </div>
  )
}

const styleResetBtn= {
  container: 'pb-1 pr-2 cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-3',
  icon: 'text-3xl md:text-lg text-red',
  text: 'text-xl md:text-sm text-red',
}