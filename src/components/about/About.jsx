import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutUs from '../home/main/AboutUs'
import Faq from '../home/main/Faq'
import Provide from '../home/main/Provide'
import Review from '../home/main/Review'
import image from '../../images/5.jpg';

export default function About() {
  return (
    <div className='w-full mt-[70px] animate__animated animate__fadeInDown'>
        <Helmet>
            <title>Haven Ease | about</title>
        </Helmet>
        <div className="container animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>About Us</h1>
        </div>
        <AboutUs></AboutUs>
        <Provide></Provide>
        <Review></Review>
        <Faq></Faq>
    </div>
  )
}
