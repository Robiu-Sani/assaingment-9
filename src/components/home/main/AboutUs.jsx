import aboutimg from '../../../images/about.jpg'
import AOS from 'aos'
import { useEffect } from 'react';

export default function AboutUs() {

  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className='container mx-auto py-10 p-2 my-10 animate__animated animate__fadeInDown'>
      <h1 className='text-3xl text-center font-bold mb-10'>ABOUT <span className='text-green-500'>US</span></h1>
      <div className="flex justify-between items-center w-full flex-col md:flex-row gap-8">
        <div data-aos="fade-up" className="w-full md:w-1/2 h-[500px] flex justify-center items-center relative">
            <div className="absolute w-[calc(100%-30%)] h-[calc(100%-30%)] top-1 right-0 border1"></div>
            <div className="absolute w-[calc(100%-30%)] h-[calc(100%-30%)] bottom-1 left-0 border1"></div>
            <img src={aboutimg} alt="about image" className='w-[calc(100%-20%)] h-[calc(100%-20%)] rounded-[20px] absolute'/>
        </div>
        <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className='text-3xl my-5 mx-3 font-bold'>About Us</h1>
            <p className='text-gray-800 m-2'>Welcome to Haven Ease, your trusted destination for finding the perfect home. We specialize in residential properties, offering personalized service and expert guidance to help you find your dream space. From cozy single-family homes to modern apartments, we're here to make your home buying experience seamless and enjoyable. Discover your ideal home with us today.</p>
            <button className='btn'>Read more...</button>
        </div>
      </div>
    </div>
  )
}
