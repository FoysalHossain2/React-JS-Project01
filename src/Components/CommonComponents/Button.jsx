import React from 'react'

const Button = ({className, title}) => {
  return (
    <>
      <div className={className ? className : 'p-5 bg-black text-white '}>
        {title? title : "Non"}
      </div>
    </>
  )
}

export default Button