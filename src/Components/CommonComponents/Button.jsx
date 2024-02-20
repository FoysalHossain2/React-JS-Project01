import React from 'react'

const Button = ({className, children}) => {
  return (
    <>
      <div className={className ? className : 'p-5 bg-black text-white '}>
        {children? children : "Non"}
      </div>
    </>
  )
}

export default Button