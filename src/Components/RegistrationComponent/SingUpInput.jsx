import React from 'react'

const SingUpInput = ({inputType, placeHolder, labeTitle, inputId, className, oninputChange, valueFrom}) => {
  return (
    <>
    <div className='flex flex-col py-[10px]'>    
        <label 
            className='font-DM_Sans text-base font-normal text-main_text_color'
            htmlFor={labeTitle}
        >
            {labeTitle}
        </label>

            <input 
                className={className}
                type={inputType} 
                id={inputId}
                name={inputId}
                value={valueFrom}
                placeholder={placeHolder}
                onChange={oninputChange}
            />
    </div>
    </>
  )
}

export default SingUpInput