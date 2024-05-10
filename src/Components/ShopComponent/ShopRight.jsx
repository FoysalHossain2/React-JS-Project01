import React,{useState, createContext} from 'react'
import ProductRightTop from '../CommonComponents/ShopRightItem/ProductRightTop'
import ShopeRightBottom from '../CommonComponents/ShopRightItem/ShopeRightBottom'


export const ShopPageChangeContext = createContext()

const ShopRight = ({className}) => {

  const [PageChange, setPageChange] = useState(9);
  const [GrideLayout, setGrideLayout] = useState(false)

  // HandlePageChange function
  const HandlePageChange = (e) => {
    setPageChange(e.target.value);
  }

  //HandleGride change function implementation  
  const HandleGrideChange = () => {
    setGrideLayout(!GrideLayout)
  }




  return (
    <>
      <div className={className}>
          <ProductRightTop 
            onchangePage={HandlePageChange}
            GrideLayoutChange={HandleGrideChange}
            changeIcon={GrideLayout}
           />
          <ShopPageChangeContext.Provider value={{PageChange,GrideLayout }}>
            <ShopeRightBottom  />
          </ShopPageChangeContext.Provider>

      </div>
    </>
  )
}

export default ShopRight