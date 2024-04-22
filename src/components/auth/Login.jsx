import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import GoogleAuth from './GoogleAuth';
import GitHub from './GitHub';
import { useForm } from 'react-hook-form';
import image from '../../images/3.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [showpassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { login, getUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPassword(!showpassword);
  };

  const handleLoginSubmit = (data) => {
    const { email, password } = data;
    login(email, password)
      .then(() => {
        toast('Successfully LogIn');
        reset();
      })
      .catch(() => {
        toast.warn('Something went wrong!');
        reset();
        setErrorMessage('Something went wrong. Please try again!');
      });
  };

  const loginForm = (
    <form
      data-aos="fade-up"
      onSubmit={handleSubmit(handleLoginSubmit)}
      className="p-10 rounded-md shadow-md bg-white w-[calc(100%-20px)] mx-[10px] sm:mx-auto sm:w-[450px]"
    >
      <h1 className='text-center text-3xl text-black font-bold my-5'>Login</h1>
      {errorMessage && <p className='w-full mb-8 p-3 text-center rounded-md text-red-500'>{errorMessage}</p>}
      <input 
        type="email" 
        placeholder='Enter Your Email' 
        {...register('email', { required: 'This email is required' })} 
        className=' mb-8 input bg-gray-200 w-full'
      />
      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      <label className='w-full relative'>
        <input 
          type={showpassword ? 'text' : 'password'} 
          placeholder='Enter Your Password' 
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })} 
          className='input bg-gray-200 w-full' 
        />
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        <span onClick={handleShowPassword} className='absolute top-[1px] right-3 text-xl cursor-pointer'>
          {showpassword ? <FaEye /> : <FaEyeSlash />}    
        </span>
      </label>
      <div className="w-full flex justify-center gap-5 items-center p-5">
        <GoogleAuth />      
        <GitHub />
      </div>
      <input type="submit" className='text-white cursor-pointer input bg-blue-400 w-full'/>
      <small className='m-3'>I don't have any account <Link to='/registrations' className='text-blue-500 underline'>Registration</Link></small>
    </form>
  );

  const alreadyLoggedIn = <div className='w-full flex justify-center items-center p-10'>You are already logged in.</div>;

  return (
    <div className='w-full mt-[70px] px-2 py-10 bg-gray-100'>
      <Helmet>
        <title>Haven Ease | Login</title>
      </Helmet>
      <ToastContainer />
      <div className="container animate__animated mb-10 animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background: `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>Login</h1>
      </div>
      {getUser ? alreadyLoggedIn : loginForm}
    </div>
  );
}
