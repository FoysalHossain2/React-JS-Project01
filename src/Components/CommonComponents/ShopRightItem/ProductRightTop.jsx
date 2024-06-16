import React,{useState, createContext} from 'react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Flex from '../../CommonComponents/Flex';
import { SortData } from '../../../../Data/Data';

const ProductRightTop = ({onchangePage, GrideLayoutChange, changeIcon}) => {

  const [SortProduct, setSortProduct] = useState(SortData)
  



  return (
    <>
    <Flex className={'items-center justify-between  px-1 md:px-0'}>
      <div className='cursor-pointer' onClick={GrideLayoutChange}>
        {changeIcon ? (<FaBars className='text-2xl' />) : (<BsFillGrid3X3GapFill className='text-2xl' />)}
        
      </div>

      <Flex className={'gap-x-10'}>    
        <div className='flex items-center gap-x-2 '>
          <h2>Sort by:</h2>
          <select name="sort" id="sort" className='min-w-[230px] py-2 border-2 cursor-pointer border-[#F0F0F0] md:visible sm:hidden'>
            <option 
            value="Featured"
            className='text-secondary_text_color font-DM_Sans font-normal text-base'
            >
              Featured
            </option>
            {SortProduct?.map((item, id) => (
              <option
                key={id}
                value={item.sortItem}
                className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                {item.sortItem}
              </option>
            ))}
          </select>
        </div>

        <div className='flex items-center gap-x-2 '>
          <h2>Show:</h2>
          <select name="sort" id="sort" className='min-w-[119px] py-2 border-2 cursor-pointer border-[#F0F0F0]' onChange={onchangePage}>
              <option
              value="9"
              className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                9
              </option>
              <option
              value="18"
              className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                18
              </option>
              <option
              value="27"
              className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                27
              </option>
            
          </select>
        </div>
      </Flex>
    </Flex>
    </>
  )
}

export default ProductRightTop