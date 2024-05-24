import React,{useState} from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import SingUpInput from './SingUpInput'

const RegistrationTop = () => {

  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email:"",
    PhoneNumber:"",
    Address1:"",
    Address2:"",
    City:"",
    PostCode:"",
    Division:"",
    District:"",
    Password:"",
    RepeatPassword:"",
    agreement: false,
    Subscribe1: false,
    Subscribe2: false
  })

  // function implementation
  const HandleUserInput = (e) => {
    if (e.target.checked) {
      console.log(e.target.checked);
      setUserInfo({
        ...userInfo,
        [e.target.id]: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    }
  }

  console.log(userInfo);


  // HandleSingUpBtn functionality 
  const HandleSingUpBtn = () => {

    const {FirstName, Email, PhoneNumber, Password, RepeatPassword, agreement} = userInfo;

    if (!FirstName) {
      console.log('FirstName is Messing');
    } else if (!Email) {
      console.log('Email is Messing');
    } else if (!PhoneNumber) {
      console.log("PhoneNumber is Messing");
    } else if (!Password) {
      console.log("Password is Messing");
    } else if (!RepeatPassword) {
      console.log("RepeatPassword is Messing");
    } else if (!agreement) {
      console.log("agreement is Messing");
    } else {
      console.log('All Working');
    }
  }



  return (
    <>
    <div className='mt-[110px]'>
      <div className='container'>
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

          <hr className='mt-[50px] mb-[50px]' />


          {/* personal details */}
          <div>
            <form action="#">
              <h2 className='font-DM_Sans text-[39px] font-bold mb-[44px]'>
                Your Personal Details
              </h2>

              <div className='flex flex-wrap gap-x-12'>
                <SingUpInput
                  labeTitle={'First Name'}
                  inputType={'text'}
                  placeHolder={'First Name'}
                  inputId={'FirstName'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'Last Name'}
                  inputType={'text'}
                  placeHolder={'Last Name'}
                  inputId={'LastName'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'Email address'}
                  inputType={'text'}
                  placeHolder={'Email address'}
                  inputId={'Email'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput} 
                />

                <SingUpInput
                  labeTitle={'Telephone'}
                  inputType={'number'}
                  placeHolder={'Your phone number'}
                  inputId={'PhoneNumber'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />
              </div>

              <hr className='mt-[55px] mb-[55px]' />

              {/* New Customer */}
              <h2 className='font-DM_Sans text-[39px] font-bold mb-[44px]'>
                New Customer
              </h2>

              <div className='flex flex-wrap gap-x-12'>
                <SingUpInput
                  labeTitle={'Address 1'}
                  inputType={'text'}
                  placeHolder={'4279 Zboncak Port Suite 6212'}
                  inputId={'Address1'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'Address 2'}
                  inputType={'text'}
                  placeHolder={'-'}
                  inputId={'Address2'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'City'}
                  inputType={'text'}
                  placeHolder={'City'}
                  inputId={'City'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'Post Code'}
                  inputType={'number'}
                  placeHolder={'Your phone number'}
                  inputId={'PostCode'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

              </div>

                <div className='flex gap-x-12 items-center basis-1/2 mt-6'>
                  <div className='basis-2/6'>
                    <div className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>Division</div>
                    <select 
                      name="Division" 
                      id="Division" 
                      className='w-full text-[#767676]' 
                      onChange={HandleUserInput}>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Chottogram">Chottogram</option>
                      <option value="Barisal">Barisal</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Khulna">Khulna</option>
                    </select>
                  </div>

                  <div className='basis-2/6'>
                    <div className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>District</div>
                    <select 
                      name="District" 
                      id="District" 
                      className='w-full text-[#767676]' 
                      onChange={HandleUserInput}>
                      <option value="Manikgonj">Manikgonj</option>
                      <option value="Mymenshing">Mymenshing</option>
                      <option value="">Dhaka</option>
                      <option value="">Dhaka</option>
                      <option value="">Dhaka</option>
                      <option value="">Dhaka</option>
                    </select>
                  </div>
                </div>
              {/* New Customer */}

              <hr className='mt-[55px] mb-[55px]' />

              {/* password */}
              <h2 className='font-DM_Sans text-[39px] font-bold mb-[44px]'>
              Your Password
              </h2>

              <div className='flex gap-x-12 items-center mt-6'>
                <div className='basis-2/6'>
                  <SingUpInput
                    labeTitle={'Password'}
                    inputType={'password'}
                    placeHolder={'Password'}
                    inputId={'Password'}
                    className={'border-b-2 border-[#F0F0F0] py-4 '}
                    oninputChange = {HandleUserInput}
                  />
                </div>

                <div className='basis-2/6'>
                  <SingUpInput
                    labeTitle={'Repeat Password'}
                    inputType={'password'}
                    placeHolder={'Repeat Password'}
                    inputId={'RepeatPassword'}
                    className={'border-b-2 border-[#F0F0F0] py-4 '}
                    oninputChange = {HandleUserInput}
                  />
                </div>
                </div>
              {/* password */}

            </form>
          </div>
          {/* personal details */}

          <hr className='mt-[70px] mb-[65px]' />

          <div className='flex items-center gap-x-4'>
            <input 
              type="checkbox" 
              id="agreement" 
              name="agreement"
              onChange={HandleUserInput} 
            />
            <label htmlFor="">I have read agree to the Privacy Policy</label>
          </div>

          {/* subscribe */}
          <div className='flex items-center gap-x-10 mt-[23px]'>
            <p>Subscribe Newsletter</p>
            <div className='flex items-center gap-x-6'>

              <div className='flex items-center gap-x-2'>
                <label htmlFor="">Yes</label>
                <input 
                  type="checkbox"
                  id='Subscribe1'
                  name='Subscribe1' 
                  className='bg-main_text_color'
                  onChange={HandleUserInput} 
                />
              </div>

              <div className='flex items-center gap-x-2'>   
                <label htmlFor="">No</label>
                <input 
                  type="checkbox"
                  id='Subscribe2'
                  name='Subscribe2' 
                  onChange={HandleUserInput} 
                />
              </div>
            </div>
          </div>
          {/* subscribe */}

          {/* button */}
          <div className='mt-[27px]'>
            <button className='bg-main_text_color py-3 px-14 text-white' onClick={HandleSingUpBtn}>
              Log in
            </button>
          </div>
          {/* button */}
      </div>
    </div>
    </>
  )
}

export default RegistrationTop