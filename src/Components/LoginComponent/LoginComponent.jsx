import React, { useState } from 'react'
import BreadCrumb from '../../Components/CommonComponents/BreadCrumb/BreadCrumb'
import { ErrorMessage } from '../../../Utils/Utils'

const LoginComponent = () => {

  const [UserInLogin, setUserInLogin] = useState({
    email: "",
    password: "",
  })


  // HandleLoginInput onChange functionality
  const HandleLoginInput = (e) => {
    setUserInLogin({
      ...UserInLogin,
      [e.target.id]: e.target.value
    })
  }


  // HandleLogin functionality
  const HandleLogin = (e) => {
    e.preventDefault()
    const {email, password} = UserInLogin;
    if (!email || !checkEmail(email)) {
     ErrorMessage('Your email is not valid') 
    } else if (!password) {
      ErrorMessage('Your password is not valid')
    } else {
      SuccessMessage('Every thing is ok')
    }
  }




  return (
    <>
    <div>
        <div className="container">
         <div className='mb-8'>
            <h1  className='font-DM_Sans text-[39px] font-bold mb-[11px] mt-[10px]'>
              Login
            </h1>
            <BreadCrumb />
          </div>

          <div>
            <h2  className='font-DM_Sans text-[30px] font-bold mb-[35px]'>
                Returning Customer
            </h2>

            <form >

              <div className='flex flex-row gap-x-12'>
                  <div className='flex flex-col'>
                      <label className='font-DM_Sans font-bold text-main_text_color pb-4'>
                          Email address
                      </label>
                      <input 
                          type="email"
                          name='email'
                          id='email'
                          placeholder='Enter Your Email'
                          className={'border-b-2 border-[#F0F0F0] w-[400px]'}
                          onChange={HandleLoginInput}
                      />
                  </div>

                  <div className='flex flex-col'>
                      <label className='font-DM_Sans font-bold text-main_text_color pb-4'>
                          Password
                      </label>
                      <input 
                          type="password"
                          name='password'
                          id='password'
                          placeholder='********'
                          className={'border-b-2 border-[#F0F0F0] w-[400px]'}
                          onChange={HandleLoginInput}
                      />
                  </div>
              </div>

              <button className='font-DM_Sans font-bold hover:text-white hover:bg-black px-16 py-3 border-2 border-black mt-[30px]' onClick={HandleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default LoginComponent