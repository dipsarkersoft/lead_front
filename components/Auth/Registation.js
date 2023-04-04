import React, { useState } from 'react'
import { GrUserManager } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle, AiOutlineLock } from "react-icons/ai"
import { BsGithub, BsFacebook } from "react-icons/bs"
import  { Toaster,toast } from 'react-hot-toast'


const RegistrationComponent = () => {


     const [showPassword, setShowPassword] = useState(false);

     const [name, setName] = useState("")
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirmpassword, setconfirmpassword] = useState('')





const handleSubmit =async(e)=>{
     
     e.preventDefault()

     if (!name) {
          toast.error('Name is required');
        }

        else if (!email) {
          toast.error('Email is required')
         
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          toast.error('Invalid email format');
        }   
        else if (!password) {
          toast.error('password is required');

        } else if (password.length < 6) {
          toast.error('Password must be at least 6 characters')
         
        }


        else if (!confirmpassword) {
          toast.error('confirmpassword is required');

        } else if (password !== confirmpassword) {
          toast.error('Passwords do not match');
        }

   else{

toast.success("sign up suces")
   }   
      

}


     const toggleShowPassword = () => {
          setShowPassword(!showPassword);
     };


     return (

          <div className="container mx-auto">


               <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                         <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg shadow-xl">
                                   <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">


                                        <div className="First md:w-12/12 overflow-hidden ">
                                             <img src="https://source.unsplash.com/700x600/?computer,login" alt="" className="" />
                                        </div>


                                        <div className="Secound md:w-4/12 overflow-hidden p-[30px]">
                                             <div className="flex flex-col items-center justify-center mt-5">

                                                 
                                                       <div className="flex flex-col reg">

                                                            <h1 className='text-2xl my-[5px]

                                                                       font-bold '> Sign up</h1>
                                                            <p className='text-sm my-[3px]'>
                                                                 If you already have an account register
                                                            </p>

                                                            <p className='text-sm mb-5'>
                                                                 You can <a href='/login' className='text-[#EA512e]'>
                                                                      Login here !</a></p>

                                                            <div>


                                                            </div>

                                                            <form onSubmit={handleSubmit}>



                                                            <div className="flex flex-col">

                                                                 <label >Your Name</label>
                                                                 <div className="relative">

                                                                      <input className="
          
                                                                           w-full
                                                                           placeholder: 
                                                                           placeholder-[#1b0238]
                                                                           text-[15px]
                                                                           px-[35px] py-[5px]
                                                                           border-b-2
                                                                           border-[#1b0238] 
                                                                           focus:outline-none 
                                                                           focus:placeholder-[#ffff]
                                                                           focus:border-[#EA512E]    
                                                                           "
                                                                           value={name}
                                                                           onChange={(e) => setName(e.target.value)}
                                                                           placeholder="Enter your name "
                                                                           type="text"

                                                                      />

                                                                      <div className="absolute inset-y-0 flex items-center ">
                                                                           <GrUserManager size={20} />

                                                                      </div>

                                                                 </div>

                                                            </div>


                                                            <div className="flex flex-col mt-[20px]">

                                                                 <label> Email </label>
                                                                 <div className="relative">

                                                                      <input className="
                                                                            
                                                                            
                                                                            w-full
                                                                                    placeholder: 
                                                                                   placeholder-[#1b0238]
                                                                                   text-[15px]
                                                                                   px-[35px] py-[5px]
                                                                                     border-b-2
                                                                                    border-[#1b0238] 
                                                                                        focus:outline-none 
                                                                                        focus:placeholder-[#ffff]
                                                                                        focus:border-[#EA512E]

                                                                                     "

                                                                          value={email}
                                                                           onChange={(e) => setEmail(e.target.value)}
                                                                           placeholder="Enter your email address "
                                                                           type="text" />

                                                                      <div className="absolute inset-y-0 flex items-center ">
                                                                           <HiOutlineMail
                                                                                size={20}
                                                                           />

                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            <div className="flex flex-col mt-[20px]">

                                                                 <label> Password </label>
                                                                 <div className="relative">

                                                                      <input className="
                                                                           w-full
                                                                           placeholder: 
                                                                           placeholder-[#1b0238]
                                                                           text-[15px]
                                                                           px-[35px] py-[5px]
                                                                           border-b-2
                                                                           border-[#1b0238] 
                                                                           focus:outline-none 
                                                                           focus:placeholder-[#ffff]
                                                                           focus:border-[#EA512E]

                                                                           "
                                                                           value={password}
                                                                           onChange={(e) => setPassword(e.target.value)}
                                                                           placeholder="Enter your password "
                                                                           type={showPassword ? 'text' : 'password'}
                                                                      />

                                                                      <div className="absolute inset-y-0 left-0 flex items-center">

                                                                           <AiOutlineLock size={20} />
                                                                      </div>

                                                                      <div className="absolute inset-y-0 right-0 flex items-center">
                                                                           <button
                                                                                type="button"
                                                                                onClick={toggleShowPassword}
                                                                                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                                                                           >
                                                                                {showPassword ? (
                                                                                     <AiFillEye
                                                                                          color="#1b0238"
                                                                                     />
                                                                                ) : (
                                                                                     <AiFillEyeInvisible
                                                                                          color="#1b0238"
                                                                                     />
                                                                                )}
                                                                           </button>


                                                                      </div>

                                                                 </div>
                                                            </div>


                                                            <div className="flex flex-col mt-[20px]">

                                                                 <label>Confirm Password </label>
                                                                 <div className="relative">

                                                                      <input className="
                                                                           w-full
                                                                           placeholder: 
                                                                           placeholder-[#1b0238]
                                                                           text-[15px]
                                                                           px-[35px] py-[5px]
                                                                           border-b-2
                                                                           border-[#1b0238] 
                                                                           focus:outline-none 
                                                                           focus:placeholder-[#ffff]
                                                                           focus:border-[#EA512E]

                                                                           "
                                                                           value={confirmpassword}
                                                                           onChange={(e) => setconfirmpassword(e.target.value)}
                                                                           placeholder="Confirm your Password "
                                                                           type={showPassword ? 'text' : 'password'}
                                                                      />

                                                                      <div className="absolute inset-y-0 left-0 flex items-center">

                                                                           <AiOutlineLock size={20} />
                                                                      </div>

                                                                      <div className="absolute inset-y-0 right-0 flex items-center">
                                                                           <button
                                                                                type="button"
                                                                                onClick={toggleShowPassword}
                                                                                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                                                                           >
                                                                                {showPassword ? (
                                                                                     <AiFillEye
                                                                                          color="#1b0238"
                                                                                     />
                                                                                ) : (
                                                                                     <AiFillEyeInvisible
                                                                                          color="#1b0238"
                                                                                     />
                                                                                )}
                                                                           </button>


                                                                      </div>

                                                                 </div>
                                                            </div>


                                                            <div className="flex flex-col  mt-[40px] ">
                                                                 <button
                                                                      className="
               
                                                                                w-full
              
                                                                                bg-[#EA512e] 
               
                                                                                text-lg
              
                                                                                hover:bg-blue-700
              
                                                                                text-white
               
                                                                                py-2 px-4 rounded-full"
                                                                      type='submit'
                                                                 >
                                                                      Register</button>

                                                            </div>



                                                            <div className="flex flex-col  mt-[20px]">



                                                                 <p className='text-center'> or continue with</p>


                                                                 <div className="flex ">
                                                                      <div className="w-1/3 ">
                                                                           <span className='flex flex-col items-end'>
                                                                                <BsFacebook />

                                                                           </span>

                                                                      </div>

                                                                      <div class="w-1/3">
                                                                           <span className='flex flex-col items-center'>
                                                                                <AiFillGoogleCircle />
                                                                           </span>

                                                                      </div>
                                                                      <div className="w-1/3">
                                                                           <span className='flex flex-col items-start'>
                                                                                <BsGithub />
                                                                           </span>

                                                                      </div>
                                                                 </div>


                                                            </div>
                                                            </form>



                                                       </div>

                                                  



                                             </div>
                                        </div>


                                   </div>
                              </div>
                         </div>
                    </div>
               </div>







          </div>





     )
}

export default RegistrationComponent