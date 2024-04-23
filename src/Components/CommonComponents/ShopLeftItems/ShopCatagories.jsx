import React,{useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import Flex from '../../CommonComponents/Flex'


const ShopCatagories = ({Catagories, shopLeftTitle}) => {

  const [ShowCategories, setShowCategories] = useState(false)

  // HandleCategory function
  const HandleCategory = () => {
    setShowCategories(!ShowCategories)
  }






  return (
    <>
    <div>
      <h1 className='font-DM_Sans font-bold text-xl mb-9' >{shopLeftTitle ? shopLeftTitle : "Title is missing"}</h1>
    </div>

    <div className='px-4'>
      <div className='divide-y-2 divide-solid divide-[#F0F0F0]'>
        {Catagories?.map((item, id) => {
          return (
            item.subCategories.length> 0 ? (
              <div>
                <div className='py-5' key={id} onClick={HandleCategory}>
                  <Flex className={'items-center justify-between cursor-pointer'}>
                    <h2 className='text-secondary_text_color font-normal text-base '>{item.title}</h2>
                    {item.subCategories ? <FaPlus /> : null}
                  </Flex>
                </div>
    
                <div>
                  {ShowCategories && 
                  item.subCategories.map((subitems, id) => (
                    <h2 className='' key={id}>{subitems.title}</h2>
                  ))
                  }
                </div>
              </div>
            )
            :
            (
            <div className='py-5' key={id}>
              <h2 className='text-secondary_text_color font-normal text-base '>{item.title}</h2>
            </div>
            )
          )
        })}
      </div>
    </div>
    </>
  )
}

export default ShopCatagories