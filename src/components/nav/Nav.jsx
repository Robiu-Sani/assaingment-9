import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/Context';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

export default function Nav() {

  const {getUser , logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
  }

  const items = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/about`}>About</NavLink></li>
        <li><NavLink to={`/ourservicess`}>Estates</NavLink></li>
        <li><NavLink to={`/contact`}>Contact</NavLink></li>
        <li><NavLink to={`/profile`}>Profile</NavLink></li>
        <li><NavLink to={`/editProfile`}>Update Profile</NavLink></li>
</>
  
  return (
    <div className="animate__animated animate__fadeInDown w-full shadow-md absolute top-0 z-50">
        <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {items}
      </ul>
    </div>
    <Link to={`/`} className="btn btn-ghost text-xl font-bold">Haven <span className='text-green-500'>Ease</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">  
      {items}
    </ul>
  </div>
  <div className="navbar-end">
  {
    getUser ? <ul className="flex justify-center items-center gap-3">
      <Link to={'/profile'} className='btn '>
      {getUser.photoURL? <img src={getUser.photoURL} className='w-[30px] h-[30px] rounded-full imageHover'/> : <FaUserCircle className='text-3xl imageHover'/>}
      <p className='name'>{getUser.displayName}</p>
      </Link> 
      <li className='flex gap-3 justify-center items-center btn' onClick={handleSignOut}><HiOutlineLogout /><Link>Log Out</Link> </li>
    </ul> :
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to={`/login`} >Login</NavLink></li>
    <li><NavLink to={`/registrations`} >SignUp</NavLink></li>
  </ul>
  }
  </div>
</div>
    </div>
    
  )
}
