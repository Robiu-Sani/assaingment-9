import React from 'react'
import { useLoaderData } from 'react-router-dom'
import image from '../../images/1.jpg'
import Services from '../home/main/Services';

export default function OurServicess() {
    const AllData = useLoaderData();
  return (
    <div className='w-full mt-[70px] animate__animated animate__fadeInDown'>
        <div className="container animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>Estates</h1>
        </div>
                <div className=" animate__animated animate__fadeInDown container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
            {AllData.map((data , idx) => <Services key={idx} data={data}></Services>)}
        </div>
      this is our servicess
    </div>
  )
}
