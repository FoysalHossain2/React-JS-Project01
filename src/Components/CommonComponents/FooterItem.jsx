import React from 'react'

const FooterItem = ({allItems=['one', 'two', 'three', 'four', 'five'], title}) => {
  return (
    <>
     <div>
        <div className="container">
            <h2 className='font-DM_Sans font-bold text-[16px] text-main_text_color pb-[18px] '>
                {title}
            </h2>
            <ul>
                {allItems?.map((item, index) => (

                <li className='font-DM_Sans font-normal text-[#6D6D6D] pb-2'>
                    {title.toLocaleLowerCase() === 'SHOP'.toLocaleLowerCase() ? (item + (index + 1)) : item}
                </li>
                ))}
            </ul>
        </div>
     </div>
    </>
  )
}

export default FooterItem