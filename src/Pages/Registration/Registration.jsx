import React,{useState} from 'react'
import RegistrationTop from '../../Components/RegistrationComponent/RegistrationTop';
import SingUpInput from '../../Components/RegistrationComponent/SingUpInput'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from 'react-toastify'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../Firebase/FirebaseConfig.js';


const Registration = () => {

  const auth = getAuth();


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

  const [userInfoError, setUserInfoError] = useState({
    FirstNameError: "",
    EmailError:"",
    PhoneNumberError:"",
    Address1Error:"",
    DivisionError:"",
    DistrictError:"",
    PasswordError:"",
    PasswordNotMachError:"",
    RepeatPasswordError:"",
    agreementError: false,
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


  // HandleSingUpBtn functionality 
  const HandleSingUpBtn = () => {

    const {
       FirstName, 
       Email,
       PhoneNumber, 
       Password, 
       RepeatPassword, 
       agreement
      } = userInfo;


    if (!FirstName) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "First name is Messing",
      });
    } else if (!Email) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "Email name is Messing"
      });
    } else if (!PhoneNumber) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        PhoneNumberError: "PhoneNumber name is Messing"
      });
    } else if (!Password) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        PhoneNumberError:"",
        PasswordError: "Password name is Messing"
      });
    }  else if (!RepeatPassword) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        PhoneNumberError:"",
        PasswordError: "",
        RepeatPasswordError: "RepeatPassword name is Messing"
      });
    } else if (Password !== RepeatPassword) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        PhoneNumberError:"",
        PasswordError: "",
        PasswordNotMachError: "",
        PasswordNotMachError: "PasswordNotMachError name is Messing"
      });
    } else if (agreement === false) {
      setUserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        PhoneNumberError:"",
        PasswordError: "",
        PasswordNotMachError: "",
        RepeatPasswordError: "",
        agreementError: "agreement name is Messing"
      });
    } else {      

    
    // create user with firebase createUserWithEmailAndPassword
    createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password)
    .then((userCredential) => {
      // console.log(userCredential);
      toast.success(`${userInfo.FirstName} Registration done`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    })
    .then(() => {
      addDoc(collection(db, "users/"), userInfo)
      .then((userCred) => {
        console.log(userCred);
      })
      .catch((err) => {
        console.log(err,'error');
      })
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setUserInfo({
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
    })

    setUserInfoError({
      ...userInfoError,
      FirstNameError: "",
      EmailError: "",
      PhoneNumberError:"",
      PasswordError: "",
      PasswordNotMachError: "",
      RepeatPasswordError: "",
      agreementError: "",
    });

    }
  }






  return (
    <>
    <div className='container'>
      <div>
        <RegistrationTop />
      </div>

      {/* personal details */}
      <div>
            <form action="#">
              <h2 className='font-DM_Sans text-[39px] font-bold mb-[44px]'>
                Your Personal Details
              </h2>

              <div className='flex flex-wrap gap-x-12'>
                <div>

                <SingUpInput
                  labeTitle={'First Name'}
                  inputType={'text'}
                  placeHolder={`First Name `}
                  inputId={'FirstName'}
                  valueFrom={userInfo.FirstName}
                  className={`border-b-2 border-[#F0F0F0] py-4 w-[507px] ${userInfoError.FirstNameError ? ' border-b-2 border-red-500' : 'border-b-2 border-[#F0F0F0]'}`}
                  oninputChange = {HandleUserInput}
                />
                  {userInfoError.FirstNameError && (
                    <p className='text-red-400 -mt-10'>{userInfoError.FirstNameError}</p>
                  )}
                </div>


                <div>
                  <SingUpInput
                    labeTitle={'Last Name'}
                    inputType={'text'}
                    placeHolder={'Last Name'}
                    inputId={'LastName'}
                    valueFrom={userInfo.LastName}
                    className={`border-b-2 border-[#F0F0F0] py-4 w-[507px] `}
                    oninputChange = {HandleUserInput}
                  />
                </div>

                <div>
                  <SingUpInput
                    labeTitle={'Email address'}
                    inputType={'text'}
                    placeHolder={'Email address'}
                    inputId={'Email'}
                    valueFrom={userInfo.Email}
                    className={`border-b-2 border-[#F0F0F0] py-4 w-[507px] ${userInfoError.EmailError ? ' border-b-2 border-red-500' : 'border-b-2 border-[#F0F0F0]'}`}
                    oninputChange = {HandleUserInput} 
                  />
                  {userInfoError.EmailError && (
                    <p className='text-red-400 -mt-10'>{userInfoError.EmailError}</p>
                  )}
                </div>

                <SingUpInput
                  labeTitle={'Telephone'}
                  inputType={'number'}
                  placeHolder={'Your phone number'}
                  inputId={'PhoneNumber'}
                  valueFrom={userInfo.PhoneNumber}
                  className={`border-b-2 border-[#F0F0F0] py-4 w-[507px] ${userInfoError.PhoneNumberError ? ' border-b-2 border-red-500' : 'border-b-2 border-[#F0F0F0]'}`}
                  oninputChange = {HandleUserInput}
                />
                    {userInfoError.PhoneNumberError && (
                    <p className='text-red-400 mt-10'>{userInfoError.PhoneNumberError}</p>
                  )}
              </div>

              <hr className='mt-[55px] mb-[55px]' />

              {/* New Customer */}
              <h2 className='font-DM_Sans text-[39px] font-bold mb-[44px]'>
                New Customer
              </h2>

              <div className='flex flex-wrap gap-x-12'>
                <div>
                  <SingUpInput
                    labeTitle={'Address 1'}
                    inputType={'text'}
                    placeHolder={'4279 Zboncak Port Suite 6212'}
                    inputId={'Address1'}
                    valueFrom={userInfo.Address1}
                    className={`border-b-2 border-[#F0F0F0] py-4 w-[507px] ${userInfoError.Address1Error ? ' border-b-2 border-red-500' : 'border-b-2 border-[#F0F0F0]'}`}
                    oninputChange = {HandleUserInput}
                  />
                </div>

                <SingUpInput
                  labeTitle={'Address 2'}
                  inputType={'text'}
                  placeHolder={'-'}
                  inputId={'Address2'}
                  valueFrom={userInfo.Address2}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'City'}
                  inputType={'text'}
                  placeHolder={'City'}
                  inputId={'City'}
                  valueFrom={userInfo.City}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  oninputChange = {HandleUserInput}
                />

                <SingUpInput
                  labeTitle={'Post Code'}
                  inputType={'number'}
                  placeHolder={'Your phone number'}
                  inputId={'PostCode'}
                  className={'border-b-2 border-[#F0F0F0] py-4 w-[507px]'}
                  valueFrom={userInfo.PostCode}
                  oninputChange = {HandleUserInput}
                />

              </div>

                <div className='flex gap-x-12 items-center basis-1/2 mt-6'>
                  <div className='basis-2/6'>
                    <div className='font-DM_Sans text-base font-normal text-main_text_color pb-[10px]'>Division</div>
                    <select 
                      name="Division" 
                      id="Division" 
                      value={userInfo.Division}
                      className='w-full text-[#767676]' 

                      onChange={HandleUserInput}>
                      <option value="select">select</option>
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
                      value={userInfo.District}
                      className='w-full text-[#767676]' 
                      onChange={HandleUserInput}>
                      <option value="select">select</option>
                      <option value="Manikgonj">Manikgonj</option>
                      <option value="Mymenshing">Mymenshing</option>
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
                    valueFrom={userInfo.Password}
                    className={`border-b-2 border-[#F0F0F0] py-4 ${userInfoError.PasswordError ? ' border-b-2 border-red-500' : 'border-b-2 border-[#F0F0F0]'}`}
                    oninputChange = {HandleUserInput}
                  />
                </div>

                <div className='basis-2/6'>
                  <SingUpInput
                    labeTitle={'Repeat Password'}
                    inputType={'password'}
                    placeHolder={'Repeat Password'}
                    inputId={'RepeatPassword'}
                    valueFrom={userInfo.RepeatPassword}
                    className={`border-b-2 border-[#F0F0F0] py-4 ${userInfoError.RepeatPasswordError ? ' border-b-2 border-red-500' : 'border-b-2 border-[#F0F0F0]'}`}
                    oninputChange = {HandleUserInput}
                  />
                </div>
                </div>
              {/* password */}

            </form>

          <hr className='mt-[70px] mb-[65px]' />

          <div className='flex items-center gap-x-4'>
            <input 
              type="checkbox" 
              id="agreement" 
              name="agreement"
              value={userInfo.agreement}
              onChange={HandleUserInput} 
              />
            <label htmlFor="" className={`${userInfoError.agreementError ? '  text-red-500' : 'text-black'}`}>I have read agree to the Privacy Policy</label>
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
                  value={userInfo.Subscribe1}
                  onChange={HandleUserInput} 
                  />
              </div>

              <div className='flex items-center gap-x-2'>   
                <label htmlFor="">No</label>
                <input 
                  type="checkbox"
                  id='Subscribe2'
                  name='Subscribe2' 
                  value={userInfo.Subscribe2}
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
      {/* personal details */}

    </div>
    </>
  )
}

export default Registration;