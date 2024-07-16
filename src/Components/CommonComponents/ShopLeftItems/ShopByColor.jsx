import React,{useState} from 'react'
import Flex from '../Flex'
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";


const ShopByColor = ({shopLeftColorTitle, ShopColorData, color}) => {

  const [ShopColorShow, setShopColorShow] = useState(false); 

  // HandleCollapse function
  const HandleCollapse = () => {
    setShopColorShow(!ShopColorShow)
  }



  return (
    <>
    <div className='mr-6'>  
        <div className='mt-5 pt-6 pb-6 flex items-center justify-between cursor-pointer' onClick={HandleCollapse}>
            <h3 className=' font-DM_Sans font-bold text-xl '>{shopLeftColorTitle ? shopLeftColorTitle : "Title is messing"}</h3>
           <div className='text-[20px]'>
              {ShopColorShow ? <FaCaretUp /> : <FaCaretDown />}  
           </div>
        </div>

        <div>
            {ShopColorShow && (
              <div className='divide-y-2 divide-solid divide-[#F0F0F0]'>
                {ShopColorData?.map((item, id) => (
                  <div  className='py-5' key={id}>
                    <Flex className={'items-center gap-3'}>
                      {color && (
                       <div className='h-3 w-3 bg-red-500 rounded-md' style={{backgroundColor: `${item.ColorCode}`}}></div>
                      )}
                      <div>
                        <p>{item.title}</p>
                      </div>
                    </Flex>
                  </div>
                ))}
              </div>
            )}
        </div>
    </div>
    </>
  )
}

export default ShopByColor