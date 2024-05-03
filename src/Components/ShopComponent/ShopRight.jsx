import React,{useState, createContext} from 'react'
import ProductRightTop from '../CommonComponents/ShopRightItem/ProductRightTop'
import ShopeRightBottom from '../CommonComponents/ShopRightItem/ShopeRightBottom'

export const ShopPageChangeContext = createContext()

const ShopRight = ({className}) => {

  const [PageChange, setPageChange] = useState(9);

  // HandlePageChange function
  const HandlePageChange = (e) => {
    setPageChange(e.target.value);
  }




  return (
    <>
      <div className={className}>
          <ProductRightTop onchangePage={HandlePageChange} />
          <ShopPageChangeContext.Provider value={PageChange}>
            <ShopeRightBottom  />
          </ShopPageChangeContext.Provider>

      </div>
    </>
  )
}

export default ShopRight