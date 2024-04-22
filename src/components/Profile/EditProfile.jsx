import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../images/user.png';
import imagebg from '../../images/5.jpg';

export default function EditProfile() {
  const { getUser , updateUserProfile  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value || getUser.displayName;
    const image = e.target.image.value || getUser.photoURL;
    
    const updatedProfile = {
      displayName: name,
      photoURL: image,
    };
    updateUserProfile(updatedProfile); 
    navigate(location?.state ? location.state : '/profile')
  };

  return (
    <div className='container mt-[70px] mx-auto p-3 py-8'>
      <Helmet>
        <title>Haven Ease | Edit Profile </title>
      </Helmet>
      <div className="container animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"  style={{background : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${imagebg})`}}>
        <h1 className='text-6xl text-center text-white font-bold my-5'>Edite Profile</h1>
        </div>
      <div data-aos="fade-up" className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-3 bg-white rounded-md p-5">
        <img data-aos="fade-up" src={getUser.photoURL ? getUser.photoURL : img} alt="this is user photo" className='w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] rounded-full' />
        <form data-aos="fade-up" onSubmit={handleSubmit} className='p-10 w-full flex flex-col justify-center items-center gap-5'>
          <h1 className='text-center text-3xl text-black font-bold'>Edit Profile</h1>
          <input type="text" name='name' placeholder={getUser.displayName ? `Your name is : ${getUser.displayName}` : 'Enter Your Name'} className='input bg-gray-200 w-full sm:w-[400px]' />
          <input type="text" name='image' placeholder={'Profile url'} className='input bg-gray-200 w-full sm:w-[400px]' />
          <input type="submit" value={'Submit'} className='input bg-green-500 btn w-full sm:w-[400px]' />
        </form>
      </div>
      <Link to={'/profile'} className='btn bg-green-500'>Go To See Profile</Link>
    </div>
  );
}
