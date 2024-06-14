import React, { useState } from 'react'
import BreadCrumb from '../CommonComponents/BreadCrumb/BreadCrumb'

const CheckoutComponent = () => {

  const [Checkout, setCheckout] = useState({
    FirstName: "",
    LastName: "",
    CompanyName: "",
    Country: "",
    StreetAddress: "",
    TownCity: "",
    County: "",
    PostCode: "",
    PhoneNumber: "",
    Email: "",
  })

  const [CheckoutError, setCheckoutError] = useState({
    FirstNameError: "",
    LastNameError: "",
    CountryError: "",
    StreetAddressError: "",
    TownCityError: "",
    PhoneNumberError: "",
    EmailError: "",
  })






  return (
    <>
    <div>
        <div className="container">
        <div className='mb-[50px]'>
            <h1  className='font-DM_Sans text-[39px] font-bold mb-[11px] mt-[60px]'>
                Checkout
            </h1>
            <BreadCrumb />
          </div>

          <div className='mt-12 w-[750px]'>
            <h2 className='font-DM_Sans text-[36px] font-bold text-main_text_color'>
              Billing Details
            </h2>
            <form action="">
              {/* ------ first Name & last Name input -------*/}
              <div className='flex flex-row gap-x-[50px] '>
                <div className='flex flex-col'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    First Name *
                  </label>
                  <input 
                    type="text"
                    name='FirstName'
                    id='FirstName'
                    placeholder='First Name'
                    className='border-b-2 border-b-[#F0F0F0] w-[350px]'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Last Name *
                  </label>
                  <input 
                    type="text"
                    name='LastName'
                    id='LastName'
                    placeholder='Last Name'
                    className='border-b-2 border-b-[#F0F0F0]  w-[350px]'
                  />
                </div>
              </div>
               {/* ------ first Name & last Name input -------*/}

                {/* ------ Company Name (optional) -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Company Name (optional)
                  </label>
                  <input 
                    type="text"
                    name='CompanyName'
                    id='CompanyName'
                    placeholder='Company Name'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ Company Name (optional) -------*/}

                {/* ------ Country * -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Country *
                  </label>
                  <select 
                    type="text"
                    name='Country'
                    id='Country'
                    placeholder='Company Name'
                    className='border-b-2 border-b-[#F0F0F0] '
                  >
                    <option value="">Please select</option>
                  </select>
                </div>
                 {/* ------ Country * -------*/}

                {/* ------ Street Address * -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Street Address *
                  </label>
                  <input 
                    type="text"
                    name='StreetAddress'
                    id='StreetAddress'
                    placeholder='House number and street name'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ Street Address * -------*/}

                {/* ------ Town/City * -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Town/City *
                  </label>
                  <input 
                    type="text"
                    name='TownCity'
                    id='TownCity'
                    placeholder='Town/City'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ Town/City * -------*/}

                {/* ------ County (optional) -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    County (optional)
                  </label>
                  <input 
                    type="text"
                    name='County'
                    id='County'
                    placeholder='County'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ County (optional) -------*/}

                {/* ------ Post Code * -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Post Code
                  </label>
                  <input 
                    type="number"
                    name='PostCode'
                    id='PostCode'
                    placeholder='Post Code'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ Post Code * -------*/}

                {/* ------ Phone * -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                    Phone *
                  </label>
                  <input 
                    type="number"
                    name='PhoneNumber'
                    id='PhoneNumber'
                    placeholder='Phone Number'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ Phone * -------*/}

                {/* ------ Email Address * -------*/}
                <div className='flex flex-col mt-6'>
                  <label className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>
                   Email Address *
                  </label>
                  <input 
                    type="email"
                    name='Email'
                    id='Email'
                    placeholder='Email'
                    className='border-b-2 border-b-[#F0F0F0] '
                  />
                </div>
                 {/* ------ Email Address * -------*/}
                 
            </form>
          </div>

        </div>
    </div>
    </>
  )
}

export default CheckoutComponent