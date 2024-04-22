import logo1 from '../../../images/1.png';
import logo2 from '../../../images/2.png';
import logo3 from '../../../images/3.png';
import logo4 from '../../../images/4.png';
import logo5 from '../../../images/5.png';
import logo6 from '../../../images/6.png';

export default function IntroDuction() {
  return (
    <div className='w-full p-2 py-5 animate__animated animate__fadeInDown'>
      <div className="container mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div data-aos="fade-up" className="w-full ">
            <h1 className='text-4xl my-2 font-bold'>Trusted by <span className='text-green-500'>1590+</span> Worlds Leading <span className='text-green-500'>Real Estate agent</span></h1>
            <p className=' text-justify'>Realco Real Estate Company we understand that real estate transactions are not just about properties.</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <img data-aos="fade-up" src={logo1} alt="this is logo" className='my-8 w-[70%]'/>
            <img data-aos="fade-up" src={logo2} alt="this is logo" className='my-8 w-[70%]'/>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <img data-aos="fade-up" src={logo3} alt="this is logo" className='my-8 w-[70%]'/>
            <img data-aos="fade-up" src={logo4} alt="this is logo" className='my-8 w-[70%]'/>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <img data-aos="fade-up" src={logo5} alt="this is logo" className='my-8 w-[70%]'/>
            <img data-aos="fade-up" src={logo6} alt="this is logo" className='my-8 w-[70%]'/>
        </div>
      </div>
    </div>
  )
}
