import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import GoogleAuth from './GoogleAuth';
import GitHub from './GitHub';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import imagebg from '../../images/4.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
  const [showpassword, setShowPAsswoed] = useState(false);
  const [errorMessage , setErrorMessage] = useState()
  const {createUser, getUser} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const handleShowPAssword = () => {
    setShowPAsswoed(!showpassword)
  }

  const handleSignUPValue =e => {
    const name = e.name; 
    const image = e.image; 
    const email = e.email; 
    const password = e.password;
    createUser(email ,password)
    .then(result => {
      toast('Register successfully')
      const user = result.user;
        updateProfile(user, {
            displayName: name,
            photoURL: image,
        }).then(() => {
        }).catch(() => {
          toast.warn('something worng here!')
        });
    }).catch(() => {
      setErrorMessage('Something worng here. Please try again')
      toast.warn('something worng here!')
    })
    reset()
  }

  const formishere = <form data-aos="fade-up" onSubmit={handleSubmit(handleSignUPValue)} className="p-10 rounded-md shadow-md bg-white w-[calc(100%-20px)] mx-[10px] sm:mx-auto sm:w-[450px]">
  <h1 className='text-center text-3xl text-black font-bold my-5'>Registration</h1>
  {errorMessage? <p className='w-full mb-8 p-3 text-center rounded-md text-red-500 btre'>{errorMessage}</p> : ''}
  <input
   type="text"
    placeholder='Enter Your Name (Optional)'
    {...register('name')} 
      className=' mb-8 input bg-gray-200 w-full'/>
      {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
  <input
   type="text" 
   placeholder='Enter image Url (Optional)' 
   {...register('image')}  
   className=' mb-8 input bg-gray-200 w-full'/>
  <input
   type="email"
    placeholder='Enter Your Email'
    {...register('email', { required: 'This email is required' })} 
      className=' mb-8 input bg-gray-200 w-full'/>
      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
  <label className='w-full relative'>
  <input 
    type={showpassword ? 'text' : 'password'} 
    placeholder='Enter Your Password' 
    {...register('password', {
      required: 'Password is required',
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        message: 'Password must have an uppercase letter, a lowercase letter, and at least 6 characters',
      },
    })} 
    className='input bg-gray-200 w-full' />
    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
    <span onClick={handleShowPAssword} className='absolute top-[1px] right-3 text-xl cursor-pointer'>
      {showpassword ? <FaEye /> : <FaEyeSlash />}    
    </span>
  </label>
  <div className="w-full flex justify-center gap-5 items-center p-5">
    <GoogleAuth />
    <GitHub />
  </div>
  <input type="submit" className='text-white cursor-pointer input bg-blue-400 w-full'/>
  <small className='m-3'>I have an account <Link to='/login' className='text-blue-500 underline'>Login</Link></small>
</form>

const alreadylog = <div className='flex justify-center items-center p-5'>You Already Loged In</div>

  return (
    <div className='w-full mt-[70px] px-2 py-10 bg-gray-100'>
        <Helmet>
            <title>Haven Ease | registrations</title>
        </Helmet>
        <ToastContainer />
        <div className="container my-5 animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${imagebg})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>Sign In</h1>
        </div>
        {getUser ? alreadylog : formishere}
    </div>
  )
}
