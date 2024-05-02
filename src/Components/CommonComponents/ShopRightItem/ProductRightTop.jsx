import React,{useState} from 'react'
import { IoGrid } from "react-icons/io5";
import Flex from '../../CommonComponents/Flex';
import { SortData } from '../../../../Data/Data';

const ProductRightTop = () => {

  const [SortProduct, setSortProduct] = useState(SortData)


  return (
    <>
    <Flex className={'items-center justify-between'}>
      <div className='cursor-pointer'>
        <IoGrid className='text-2xl' />
      </div>

      <Flex className={'gap-x-10'}>    
        <div className='flex items-center gap-x-2 '>
          <h2>Sort by:</h2>
          <select name="sort" id="sort" className='min-w-[239px] py-2 border-2 cursor-pointer border-[#F0F0F0]'>
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
          <select name="sort" id="sort" className='min-w-[119px] py-2 border-2 cursor-pointer border-[#F0F0F0]'>
              <option
              value="20"
              className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                20
              </option>
              <option
              value="20"
              className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                20
              </option>
              <option
              value="20"
              className='text-secondary_text_color font-DM_Sans font-normal text-base'
              >
                20
              </option>
            
          </select>
        </div>
      </Flex>
    </Flex>
    </>
  )
}

export default ProductRightTop