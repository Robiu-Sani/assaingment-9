import { MdDateRange } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
  const reviews = [
    {
      "name": "John Smith",
      "title": "Beautiful Place to Live",
      "review": "I recently moved into this residential property and I must say it exceeds all my expectations. The neighborhood is quiet and safe, the apartment itself is spacious and well-maintained, and the amenities are fantastic. I couldn't be happier with my decision to live here.",
      "date": "2024-04-10",
      "image" : 'https://i.ibb.co/2gty5kv/images-4.jpg',
      "time": "15:30"
    },
    {
      "name": "Alice Johnson",
      "title": "Great Community",
      "review": "Living in this residential area has been a wonderful experience so far. The community is friendly and welcoming, and there are plenty of activities organized for residents to socialize and get to know each other. The management team is responsive to any issues and ensures that the property is well-maintained.",
      "date": "2024-04-09",
      "image" : 'https://i.ibb.co/hCKsNwy/download.jpg',
      "time": "10:15"
    },
    {
      "name": "Jesica July",
      "title": "Excellent Location",
      "review": "I've been living in this residential complex for several years now and I love it. The location is perfect - close to schools, shopping centers, and parks. The apartments are modern and comfortable, and the staff is always friendly and helpful. I highly recommend this place to anyone looking for a place to call home.",
      "date": "2024-04-08",
      "image" : 'https://i.ibb.co/NCwvvGc/download-1.jpg',
      "time": "09:45"
    }
  ]



export default function Review() {
  return (
    <div data-aos="fade-up" className={`animate__animated animate__fadeInDown w-full h-auto md:h-[600px] mx-auto p-2 py-10 bgImg1 bgImg`}>
      <h1 className='text-white text-3xl mb-10 text-center font-extrabold'>CUSTOMER REVIEW</h1>
      <div data-aos="fade-up" className="container grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto p-3">
        {reviews.map((review, idx) => (
            <div key={idx} data-aos="fade-up" className="w-full bg-slate-100 mt-10 rounded-md shadow-md p-2 py-8">
              <div className="relative w-full flex justify-center items-center">
              <div className="absolute bottom-0 p-3 bg-green-600 w-[100%] lg:w-[320px] shadow-md flex gap-3 rounded-md">
              <img src={review.image} alt="" className="w-[60px] h-[60px] rounded-full" />
                <div className="w-full">
                  <h1 className="text-xl font-bold text-white">{review.name}</h1>
                  <div className="flex w-full justify-between items-center">
                      <span className="flex justify-center gap-1 items-center text-gray-200"><MdDateRange /> {review.date}</span>
                      <span className="flex justify-center gap-1 items-center text-gray-200"><MdAccessTimeFilled /> {review.time} am</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-2xl m-2">{review.title}</h1>
            <p className=" mb-5">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="w-[100px] mx-auto"><button className="btn mt-10 w-full bg-green-200">See All</button></div>
    </div>
  )
}
