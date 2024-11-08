
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

export default function CheckBtn() {
  return (
      <div className={styleLeftArrow.backBtnContainer}>
        <FontAwesomeIcon 
            icon={faSquareCheck} 
            className={styleLeftArrow.leftArrow}
          />
        {/* <p className={styleLeftArrow.backText}>Check</p>   */}
      </div>
  )
}

const styleLeftArrow= {
  backBtnContainer: 'w-52 md:w-30 lg:w-28 px-4 md:px-3 py-5 md:py-3 cursor-pointer flex justify-center items-center gap-5 md:gap-3 bg-DarkBlueDarkModeElements dark:bg-WhiteDarkModeTextnLightModeElements shadow-colorShadow rounded',
  leftArrow: 'text-3xl md:text-lg text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
  backText: 'text-xl md:text-sm text-WhiteDarkModeTextnLightModeElements dark:text-VeryDarkBlueLightModeText',
}