import React from 'react'

const Overlay = () => {
  return (
    <>
       <div className='absolute bottom-[72px] left-16'>
            <h2 className='font-DM_Sans font-bold text-4xl text-main_text_color mb-9'>
              Phones Sale
            </h2>
            <p className='font-DM_Sans opacity-75 text-main_text_color mb-[49px]'>
               up to <span className='font-bold text-[#262626] text-[40px] p-3'>30%</span> sale for all phones!
            </p>
            <Button className={ 'inline-block bg-main_text_color py-4 px-16 text-white hover:bg-slate-800 cursor-pointer'}>
              Shop Now
            </Button>
        </div>
    </>
  )
}

export default Overlay