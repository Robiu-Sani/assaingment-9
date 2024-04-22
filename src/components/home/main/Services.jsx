import { FcSalesPerformance } from "react-icons/fc";
import { TbDoorEnter } from "react-icons/tb";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GiLandMine } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Services(props) {
    const {data} = props

  return (
    <div data-aos="fade-up" className="card w-full shadow-md overflow-hidden rounded-md relative pb-[70px] bg-gray-100">
                <img src={data.image} alt="this is home image" className='w-full h-[160px]'/>
                <h3 className='text-xl m-2'>{data.segment_name}</h3>
                <h3 className='text-md mx-2 mb-2'>{data.estate_title}</h3><hr />
                <p className='flex gap-3 items-center mt-2 mx-2'>{data.status == 'sale'? <FcSalesPerformance /> : <TbDoorEnter />} Status : {data.status}</p>
                <p className='flex gap-3 items-center mx-2'><MdOutlinePriceCheck /> Price : {data.price}</p>
                <p className=' flex gap-3 items-center mb-2 mx-2'> <GiLandMine /> Area : {data.area}</p>
                <summary className="p-3">
                  <details>
                  <p className=' flex gap-3 items-center mb-2 mx-2'> <GiLandMine /> Location : {data.location}</p>
                  <p className=' flex gap-3 items-center mb-2 mx-2'> Short Description : {data.description}</p>
                  <div className="flex justify-between items-start p-4 bdrb">
                <p>facilities</p>
                <ul className='list-disc'>{data.facilities.map((fas , idx) => <li key={idx}>{fas}</li>)}</ul>
            </div>
            <div className="flex justify-between items-start p-4 bdrb">
                <p>type</p>
                <ul className='list-disc'>{data.type.map((fas , idx) => <li key={idx}>{fas}</li>)}</ul>
            </div>

                  </details>
                </summary>
                <hr />
                
                <div className="w-full absolute bottom-0 flex justify-between p-4">
                    <span></span>
                <Link to={`/detiels/${data.id}`} className='px-5 py-2 hover:bg-green-300 rounded-full bg-green-500 text-white'>{data.view_property_button}</Link>
                </div>
    </div>
  )
}
