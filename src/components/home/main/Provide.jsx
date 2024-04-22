import img1 from '../../../images/p1.png';
import img2 from '../../../images/p2.png';
import img3 from '../../../images/p3.png';

export default function Provide() {
  return (
    <div className='container p-2 mx-auto py-10 animate__animated animate__fadeInDown'>
        <h1 data-aos="fade-up" className='text-4xl font-bold text-center mb-10'>WE <span className='text-green-500'>PROVIDE</span></h1>
        <div data-aos="fade-up" className={` w-full md:max-w-[1000px] pt-8 sm:pt-0 py-4 sm:py-0 my-10 bgImg mx-auto h-auto flex justify-between overflow-hidden rounded-md shadow-md border`}  style={{ backgroundImage: `url(${img1})` }}>
            <div className="bgCard bgroundRight md:w-1/2 sm:w-2/3 md:my-8 z-10 border p-3 py-5">
                <h1 className='text-3xl my-3 font-bold'>Architecture Design Services</h1>
                <p className='my-3 text-md'>They are about people and their dreams. That's why we take the time to listen to your unique needs and aspirations that's why we take aspirations in the world wide services</p>
                <button className='btn mt-5'>Read More..</button>
            </div>
            <span></span>
        </div>
        
        <div data-aos="fade-up" className={` w-full md:max-w-[1000px] pt-8 sm:pt-0 py-4 sm:py-0 my-10 bgImg mx-auto h-auto flex justify-between overflow-hidden rounded-md shadow-md border`}  style={{ backgroundImage: `url(${img2})` }}>
          <span></span>
            <div className="bgCard bgroundLeft md:w-1/2 sm:w-2/3 md:my-8 z-10 border p-3 py-5">
                <h1 className='text-3xl my-3 font-bold'>Architecture Design Services</h1>
                <p className='my-3 text-md'>They are about people and their dreams. That's why we take the time to listen to your unique needs and aspirations that's why we take aspirations in the world wide services</p>
                <button className='btn mt-5'>Read More..</button>
            </div>
        </div>
        
        <div data-aos="fade-up" className={` w-full md:max-w-[1000px] pt-8 sm:pt-0 py-4 sm:py-0 my-10 bgImg mx-auto h-auto flex justify-between overflow-hidden rounded-md shadow-md border`}  style={{ backgroundImage: `url(${img3})` }}>
            <div className="bgCard bgroundRight md:w-1/2 sm:w-2/3 md:my-8 z-10 border p-3 py-5">
                <h1 className='text-3xl my-3 font-bold'>Architecture Design Services</h1>
                <p className='my-3 text-md'>They are about people and their dreams. That's why we take the time to listen to your unique needs and aspirations that's why we take aspirations in the world wide services</p>
                <button className='btn mt-5'>Read More..</button>
            </div>
            <span></span>
        </div>
        
    </div>
  )
}
