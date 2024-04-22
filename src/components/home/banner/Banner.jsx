import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../images/1.jpg';
import image2 from '../../../images/2.jpg';
import image3 from '../../../images/3.jpg';
import image4 from '../../../images/4.jpg';
import image5 from '../../../images/5.jpg';
import image6 from '../../../images/6.jpg';
import image7 from '../../../images/7.jpg';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className='w-full mt-[70px] p-2 h-auto z-0 sm:h-[550px] animate__animated animate__fadeInDown'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto h-full z-10 rounded-md"
      >
        
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image1})`}}>
          <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>The Evolution of Residential Spaces</h1>
            <p className='text-center text-xl mb-4 text-white'>Explore the transformation of residential spaces over the years, from traditional homes to contemporary designs that emphasize sustainability, functionality, and comfort.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image2})`}}>
        <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>The Future of Residential Living</h1>
            <p className='text-center text-xl mb-4 text-white'>Dive into the world of smart homes, where technology seamlessly integrates with daily life to enhance convenience, security, and energy efficiency.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image3})`}}>
        <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>Building a Sustainable Future</h1>
            <p className='text-center text-xl mb-4 text-white'>Discover innovative approaches to building and renovating homes that prioritize environmental sustainability, featuring eco-friendly materials, energy-efficient systems, and renewable energy solutions.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image4})`}}>
        <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>The Pinnacle of Residential Design</h1>
            <p className='text-center text-xl mb-4 text-white'>Experience the epitome of residential luxury, showcasing exquisite architecture, lavish amenities, and unparalleled comfort tailored for those who appreciate the finer things in life.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image5})`}}>
        <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>Preserving the Past in Residential Architecture</h1>
            <p className='text-center text-xl mb-4 text-white'>Journey through time as we explore the charm and character of historic homes, highlighting their architectural significance and the efforts to preserve these treasures for future generations.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image6})`}}>
        <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>Embracing Minimalism in Residential Design</h1>
            <p className='text-center text-xl mb-4 text-white'>Learn about the growing trend of tiny homes, compact living spaces that emphasize simplicity, affordability, and environmental consciousness without sacrificing style or comfort.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="min-w-full min-h-full flex justify-center items-center bgImg" style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image7})`}}>
        <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
            <h1 className='text-6xl text-center text-white font-bold my-5'>Creating Spaces for Comfort and Connection</h1>
            <p className='text-center text-xl mb-4 text-white'>Delve into the design principles behind family-friendly homes, focusing on creating functional, inviting spaces that foster togetherness, safety, and comfort for all family members.</p>
            <Link to={`/ourservicess`} className='btn text-xl text-white w-[200px] custombtn'>Estates</Link>
          </div>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
}
