import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services';

export default function Servicess(props) {
    const {AllData} = props

    

  return (
    <div className='w-full p-2 py-10 animate__animated animate__fadeInDown'>
        <div className="mx-auto p-3 max-w-[600px]">
            <h1 className='my-4 text-3xl text-center font-extrabold'> <span className='text-green-500'>ESTATES</span></h1>
            <p className='text-center mb-5'>Discover our tailored residential services for your comfort and convenience.</p>
        </div>
        <div data-aos="fade-up" className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
            {AllData.slice(0,8).map((data , idx) => <Services data={data} key={idx}></Services> )}
        </div>
        <div className="w-[112px] mx-auto p-3">
        <Link to= '/login' className='btn bg-green-400 w-[100px]'>See All</Link>

        </div>
    </div>
  )
}
