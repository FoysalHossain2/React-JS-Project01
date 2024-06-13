import React,{useState} from 'react'
import BreadCrumb from '../CommonComponents/BreadCrumb/BreadCrumb'
import { checkEmail, SuccessMessage, ErrorMessage, CheckWordInMessage } from '../../../Utils/Utils.js'
import { db } from '../../../Firebase/FirebaseConfig.js'
import { collection, addDoc } from "firebase/firestore"; 


const ContactComponent = () => {

  const [Lading, setLading] = useState(false)

  const [InputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  })

  /**
   * handleOnchange function
   * @prams (event.target.value)
   */
  const HandleChange = (event) => {
    setInputValue({
      ...InputValue,
      [event.target.id]: event.target.value
    })
  }


  /**
   * HandlePost functionality
   */
  const HandlePost = () =>{
    const {name, email, message} = InputValue;
      if (!name) {
        ErrorMessage('Name is messing');
      } else if (!email || !checkEmail(email)) {
        ErrorMessage('Email is not valid or Wrong');
      } else if (!message || !CheckWordInMessage(message)) {
        ErrorMessage ('Message is messing')
      } else {

        setLading(true)
        addDoc(collection(db, "FromPosts"), InputValue)
        .then((poetCredential) => {
          console.log(poetCredential);
          SuccessMessage ('Your Contact successfully done')
        })
        .catch((err) => {
          console.log(err);
        })

        .finally(() => {
          setLading(false)
          setInputValue({
            name: "",
            email: "",
            message: "",
          })
        })
      }
    }
    




  return (
    <>
     <div>
        <div className="container">
          <div className='mb-[60px]'>
            <h1   className='font-DM_Sans text-[39px] font-bold mb-[11px] mt-[100px] text-main_text_color'>
              Contacts
            </h1>
            <BreadCrumb />          
          </div>
          

          <div>
            <h2  className='font-DM_Sans text-[39px] font-bold mb-[38px] text-main_text_color'>
              Fill up a Form
            </h2>

            <form  onSubmit={(e) => e.preventDefault()}>
              <div className='flex flex-col gap-y-3 w-1/3'>
                  <div className=' w-full'>
                    <label htmlFor="">
                      Name <span className='text-red-500'>*</span>
                    </label>
                    <input 
                      type="text"
                      id='name'
                      name='name'
                      placeholder='Your name here'
                      className='border-b-2 border-b-[#F0F0F0] w-full pt-8'
                      onChange={HandleChange}
                      value={InputValue.name}
                    />
                  </div>

                  <div className=' mt-[23px] w-full'>
                    <label htmlFor="">
                      Email <span className='text-red-500'>*</span>
                    </label>
                    <input 
                      type="text"
                      id='email'
                      name='email'
                      placeholder='Your name here'
                      className='border-b-2 border-b-[#F0F0F0] w-full pt-8'
                      onChange={HandleChange}
                      value={InputValue.email}
                    />
                  </div>

                  <div className=' mt-[23px] w-full'>
                    <label htmlFor="">
                      Message <span className='text-red-500'>*</span>
                    </label>
                    <textarea 
                      type="text"
                      name="message" 
                      id="message"
                      placeholder='Your message here'
                      className='border-b-2 border-b-[#F0F0F0] w-full pt-8'
                      onChange={HandleChange}
                      value={InputValue.message}
                      ></textarea>
                  </div>
              </div>

              <button className='py-4 px-16 bg-main_text_color text-white mt-[30px] flex flex-row items-center rounded-md' onClick={HandlePost}>
                  {Lading && (
                     <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                     </svg>
                  )}
                  <p>Post</p>
              </button>
            </form>

            <div className='mt-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8474122606763!2d89
                          .99421988578277!3d23.859551529403976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
                          .1!3m3!1m2!1s0x39fe1dffee866639%3A0x1f054e8d6e84988c!2sManikganj%20Stadium%2C%20Manikganj!5e0!3m2!1sen!2sbd!4v1718287742960!5m2!1sen!2sbd"
                          width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>

            </div>

          </div>
        </div>
     </div>
    </>
  )
}

export default ContactComponent