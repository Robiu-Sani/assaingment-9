import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import img from '../../images/user.png';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import image from '../../images/6.jpg'

export default function Profile() {
  const { getUser } = useContext(AuthContext);
  if (!getUser) {
    return (
      <div className='container mx-auto p-3 py-8'>
        <Helmet>
          <title>Haven Ease | Profile </title>
        </Helmet>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container mt-[70px] mx-auto p-3 py-8'>
      <Helmet>
        <title>Haven Ease | Profile </title>
      </Helmet>
      <div className="container mb-5 animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>Profile</h1>
        </div>
      <div data-aos="fade-up" className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-3 bg-white rounded-md p-5">
        <img data-aos="fade-up" src={getUser.photoURL ? getUser.photoURL : img } alt="this is user photo" className='w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] rounded-full' />
        <div data-aos="fade-up" className="w-full sm:max-w-[50%] flex flex-col justify-center items-center sm:items-start gap-4">
          <h1 className='text-xl font-bold'>Name : {getUser.displayName ? getUser.displayName : 'Not Set'}</h1>
          <p>Email : {getUser.email ? getUser.email : 'Not Set'}</p>
          <p>Number : {getUser.phoneNumber ? getUser.phoneNumber : 'Not Set'}</p>
          <Link to={'/editProfile'} className='btn bg-green-500'>Edit Profile</Link>
        </div>
      </div>
      <hr />
      <div data-aos="fade-up" className="flex flex-col py-9 gap-2 justify-center items-start sm:items-center my-3 bg-white rounded-md p-5 w-full">
        <p>Name : {getUser.displayName ? getUser.displayName : 'Not Set'}</p>
        <p>Email : {getUser.email ? getUser.email : 'Not Set'}</p>
        <p>Email : {getUser.photoURL ? getUser.photoURL : 'Not Set'}</p>
        <p>Number : {getUser.phoneNumber ? getUser.phoneNumber : 'Not Set'}</p>
        <p>Email Verified : {getUser.emailVerified ? 'true' : 'false'}</p>
        <p>Anonymous : {getUser.isAnonymous ? 'true' : 'false'}</p>
        <p>Creation Time : {getUser.metadata ? format(new Date(getUser.metadata.creationTime), 'MMMM dd, yyyy h:mm a') : 'Not Set'}</p>
        <p>Last SignIn Time : {getUser.metadata ? format(new Date(getUser.metadata.lastSignInTime), 'MMMM dd, yyyy h:mm a') : 'Not Set'}</p>
      </div>
    </div>
  );
}
