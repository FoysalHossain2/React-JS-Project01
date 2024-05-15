import React from 'react'

const ProductDetailsTop = ({EachProductImg}) => {
  return (
    <>
     <div>
        <div className=' gap-5 mt-5 flex flex-wrap items-center justify-between'>
            {EachProductImg.images?.map((img) => (
                <div className=' object-cover bottom-1' key={img}>
                    <div className='border-2 border-main_text_color'>              
                      <img
                      src={img}
                      alt={img} 
                      className='border-2 border-main_text_color w-[700px]  h-[550px]' />                  
                    </div>
                </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default ProductDetailsTop