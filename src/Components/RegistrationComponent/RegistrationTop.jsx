import React,{useState} from 'react'
import BreadCrumb from '../CommonComponents/BreadCrumb/BreadCrumb'

const RegistrationTop = () => {

  return (
    <>
    <div className='mt-[110px]'>
      <div className='container'>
        <div>
          <div>
            <h1 className='font-bold text-[49px] font-DM_Sans pb-3'>
              Sing up
            </h1>
          </div>
            <BreadCrumb />
            
            <div className='mt-[90px] w-[644px]'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the.
              </p>
            </div>
        </div>

          <hr className='mt-[50px] mb-[50px]' />
      </div>
    </div>
    </>
  )
}

export default RegistrationTop