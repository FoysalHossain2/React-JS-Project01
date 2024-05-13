import React from 'react'

const ProductDetailsTop = ({EachProductImg}) => {
  return (
    <>
     <div>
        <div className=' gap-5 mt-5 flex flex-wrap items-center justify-center'>
            {EachProductImg.images?.map((img) => (
                <div className=' object-cover bottom-1' key={img}>
                    <picture>
                    <img
                    src={img}
                    alt={img} 
                    className='w-[550px]  h-[400px]' />
                    </picture>
                </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default ProductDetailsTop