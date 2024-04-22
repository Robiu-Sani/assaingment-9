import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { useLocation, useNavigate } from "react-router-dom";

export default function GoogleAuth() {
  const { signInWithGoogle } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

    
  const handleGoogleSignIn = () => {
    signWithGoogle()
    .then(result => {
      console.log(result.user)
      navigate(location?.state ? location.state : '/')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <AiFillGoogleCircle onClick={handleGoogleSignIn} className='text-4xl cursor-pointer'/>
    </div>
  )
}
