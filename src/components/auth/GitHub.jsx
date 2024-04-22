import { IoLogoGithub } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { useLocation, useNavigate } from "react-router-dom";

export default function GitHub() {
    const { signInWithGitHub  } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    
  const handleGitHubSignIn = () => {
    signInWithGitHub()
    .then(result => {
      navigate(location?.state ? location.state : '/')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
          <IoLogoGithub onClick={handleGitHubSignIn} className='text-4xl cursor-pointer'/>
    </div>
  )
}
