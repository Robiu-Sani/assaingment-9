import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import image from '../../images/4.jpg'
import GitHub from '../auth/GitHub'
import GoogleAuth from '../auth/GoogleAuth'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Contact() {
  return (
    <div className='mt-[70px]'>
        <Helmet>
            <title>Haven Ease | contact</title>
        </Helmet>
        <div className="container animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>Contact With Us</h1>
        </div>
        <div className="container mx-auto p-2 py-3 my-3 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div data-aos="fade-up" className="w-full rounded-md bg-white p-5 flex flex-col gap-5">
          <iframe data-aos="fade-up" className='w-full rounded-md h-[400px]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14526.668687018582!2d90.87704839999999!3d24.462330099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713198943601!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div data-aos="fade-up" className="w-full flex flex-col sm:flex-row justify-between items-start">
            <div data-aos="fade-up" className="p-5">
              <h1 className='text-xl my-2'>Address</h1>
              <p>Kolatoli , Korimganj <br /> Kishganj , Dhaka <br /> Bangladesh</p>
            </div>
            <div data-aos="fade-up" className="p-5">
              <h1 className='text-xl my-2'>Email</h1>
              <p>john.doe@example.com <br /> jane.smith@example.com <br /> alice.johnson@example.com</p>
            </div>
            <div data-aos="fade-up" className="p-5">
              <h1 className='text-xl my-2'>Number</h1>
              <p>+1234567890<br /> +0987654321 <br /> +1122334455</p>
            </div>
          </div>
          </div>
          <div data-aos="fade-up" className="p-4 rounded-md bg-white w-full flex flex-col justify-center items-center sm:max-w-[200px]">
            <h1 className='text-2xl font-bold my-3'>Juin With</h1>
            <div className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">
              <GoogleAuth/>
              <p>Google</p>
            </div>
            <div className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">
              <GitHub />
              <p>GitHub</p>
            </div>
            <Link to={`/login`} className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">Login</Link>
            <Link to={`/registrations`} className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">Sing Up</Link>
            <h1 className='text-2xl font-bold my-3'>Contact With</h1>
            <Link href='https://web.facebook.com/' className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">
              <FaFacebook />
              <p>Facebook</p>
            </Link>
            <Link href='https://www.instagram.com/' className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">
              <FaSquareInstagram />
              <p>Instagram</p>
            </Link>
            <Link href='https://twitter.com/home' className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">
              <FaSquareTwitter />
              <p>Twitter</p>
            </Link>
            <Link href='https://web.whatsapp.com/' className="flex w-full justify-center items-center my-2 gap-3 bg-gray-200 rounded-md p-2">
              <IoLogoWhatsapp />
              <p>WhatsApp</p>
            </Link>
          </div>
        </div>
    </div>
  )
}
