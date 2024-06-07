import React from 'react'

const Button = ({className, title, onClickButton}) => {
  return (
    <>
      <div 
      onClick={onClickButton} 
      className={className ? className : 'flex items-start p-2 bg-black text-white '}
      >
        {title? title : "Non"}
      </div>
    </>
  )
}

export default Button