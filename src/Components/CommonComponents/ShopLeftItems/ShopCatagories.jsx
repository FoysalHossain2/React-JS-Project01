import React,{useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Flex from '../../CommonComponents/Flex'


const ShopCatagories = ({CatagoriesData, shopLeftTitle}) => {

  const [ShowCategories, setShowCategories] = useState(CatagoriesData.map(() => false));

  // HandleCategory function
const HandleCategoryToggle = (idIn) => {
  setShowCategories((previousState) => {
    return previousState.map((value, index) => 
       idIn === index ? !value : false
    )
  })
}





  return (
    <>
      <div className='mr-6'>    
        <div>
          <h1 className='font-DM_Sans font-bold text-xl mb-9' >{shopLeftTitle ? shopLeftTitle : "Title is missing"}</h1>
        </div>


        <div >
          <div className='divide-y-2 divide-solid divide-[#F0F0F0]'>
            {CatagoriesData?.map((item, index) => {
              return (
                item.subCategories.length> 0 ? (
                  <div key={index}>
                    <div className='py-5 transition-all duration-500' onClick={() => HandleCategoryToggle(index)}>
                      <Flex className={' items-center justify-between cursor-pointer '}>
                        <h2 className='text-secondary_text_color font-normal text-base '>{item.title}</h2>
                        {ShowCategories[index] ?  <FaMinus /> : <FaPlus className='text-[#767676]' />}
                      </Flex>
                  </div>

                  <div className={` ${item.subCategories ? 'pb-4' : null}`}>
                      { ShowCategories[index] &&
                      item.subCategories.map((subitem, id) => (
                        <div  key={id}>
                          <h2 className='py-3'>{subitem.title}</h2>
                        </div>
                      ))}
                  </div>
                  </div>
                )
                :
                (
                <div className='py-5' key={index}>
                  <h2 className='text-secondary_text_color font-normal text-base '>{item.title}</h2>
              </div>
                )
              
              ) 
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default ShopCatagories