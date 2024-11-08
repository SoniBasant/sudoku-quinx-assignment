
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function ResetBtn() {
  return (
      <div className={resetStyle.container}>
        <FontAwesomeIcon 
            icon={faRotateRight} 
            className={resetStyle.icon}
          />
        {/* <p className={resetStyle.backText}>Reset</p>   */}
      </div>
  )
}

const resetStyle= {
  container: 'w-52 md:w-30 lg:w-28 px-4 md:px-3 py-5 md:py-3 cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-3 bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements shadow-colorShadow rounded',
  icon: 'text-3xl md:text-lg text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
  backText: 'text-xl md:text-sm text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
}