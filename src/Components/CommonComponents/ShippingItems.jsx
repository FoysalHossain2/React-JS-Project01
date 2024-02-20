import React from 'react'

const ShippingItems = ({className, children}) => {
  return (
    <>
      <div className={className ? className: 'w-5 h5 text-black'}> {children} </div>     
    </>
  )
}

export default ShippingItems