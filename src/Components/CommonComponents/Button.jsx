import React from 'react'

const Button = ({className, title}) => {
  return (
    <>
      <div className={className ? className : 'flex items-start p-2 bg-black text-white '}>
        {title? title : "Non"}
      </div>
    </>
  )
}

export default Button