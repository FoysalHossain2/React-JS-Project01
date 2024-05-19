import React from 'react'

const ProductInfo = () => {

    const colors = [
        {id: 1, colorsCode: '#F0F0F0'},
        {id: 2, colorsCode: '#FF8686'},
        {id: 3, colorsCode: '#7ED321'},
        {id: 4, colorsCode: '#B6B6B6'},
        {id: 5, colorsCode: '#15CBA5'},
    ]


  return (
    <>
    <div className='flex items-center gap-x-4 mt-4'>
        <h3>COLOR:</h3>
        <div className='flex items-center gap-x-3'>
            {colors?.map((color,id) => (
                <div className={` w-5 h-5 rounded-xl s `} style={{backgroundColor:color.colorsCode}}></div>
            ))}
        </div>
    </div>

    <div className='flex items-center gap-x-8'>
        <h3>SIZE:</h3>
        <div className='px-4 border-2 border-gray-400 w-10'>
            <select name="" id="">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
            </select>
        </div>
    </div>
    </>
  )
}

export default ProductInfo