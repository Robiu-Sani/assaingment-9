import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLoaderData, useParams } from 'react-router-dom'

export default function Detiels() {
    const {id} = useParams();
    const AllData = useLoaderData();
    const data = AllData.filter(Data => Data.id == id);
    const {estate_title , segment_name , description , price , status , area , location , facilities , image , type} = data[0]
  return (
    <div className='container mx-auto p-3 py-5 mt-[70px]'>
        <Helmet>
            <title>Haven Ease | {estate_title} </title>
        </Helmet>
        <div className=" rounded-md shadow-md my-3 overflow-hidden z-10 relative">
        <img src={image} alt="" className='w-full min-h-[550px]'/>
        <div className="p-5 bgCard absolute top-10 right-10 rounded-md w-[calc(100%-50px)] sm:w-[500px]">
            <div className="flex justify-between items-center p-4 bdrb">
                <p>segment name</p>
                <p>{segment_name}</p>
            </div>
            <div className="flex justify-between items-center p-4 bdrb">
                <p>price</p>
                <p>{price}</p>
            </div>
            <div className="flex justify-between items-center p-4 bdrb">
                <p>status</p>
                <p>{status}</p>
            </div>
            <div className="flex justify-between items-center p-4 bdrb">
                <p>area</p>
                <p>{area}</p>
            </div>
            <div className="flex justify-between items-start p-4 bdrb">
                <p>facilities</p>
                <ul className='list-disc'>{facilities.map((fas , idx) => <li key={idx}>{fas}</li>)}</ul>
            </div>
            <div className="flex justify-between items-start p-4 bdrb">
                <p>type</p>
                <ul className='list-disc'>{type.map((fas , idx) => <li key={idx}>{fas}</li>)}</ul>
            </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <div className=" w-full sm:w-[80%] p-5 rounded-md mt-0 sm:-mt-[50px] bg-white shadow-md mb-5">
                <h3 className='text-2xl font-bold mb-3'>{estate_title}</h3>
                <p className='text-xl text-gray-700 mb-3 mx-3'>{description}</p>
                <p className='text-justify'>Welcome to {estate_title}, a vibrant community where modern living meets comfort and convenience. Nestled in the heart of {location}, our project offers a range of thoughtfully designed residences crafted to suit every lifestyle.
From stylish apartments to spacious townhouses, our residences feature contemporary architecture, high-quality finishes, and an array of amenities designed to enhance your everyday life. Whether you're seeking a cozy home for your family or a chic urban retreat, {estate_title} has something for everyone.
Immerse yourself in a thriving community where neighbors become friends, and every day brings new opportunities for relaxation and recreation. Enjoy leisurely strolls through landscaped gardens, unwind by the poolside, or stay active at our state-of-the-art fitness center.
With easy access to shopping, dining, entertainment, and major transportation routes, {estate_title} offers the perfect blend of urban convenience and suburban tranquility. Experience the ultimate in modern living at {estate_title}.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
