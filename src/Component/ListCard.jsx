import { LuMapPin } from "react-icons/lu";
import { TfiMapAlt } from "react-icons/tfi";
import { FaDisease } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ListCard = ({ list }) => {
  const p = list.shortDescription;
  const d = p.slice(0, 70);

  return (

    <div className="mx-auto max-w-[450px] space-y-4 rounded-lg bg-white p-6 shadow-lg ">
      <img src={list.SpotImage} alt="" className=" h-[300px] w-[400px]" />
      <div className=" h-[240px]">
        <h1 className=" font-semibold text-2xl ">{list.SpotName}</h1>

        <div className="text-lg font-semibold">${list.averageCost}</div>
        <p className="my-2">{d}...</p>
        <div className="flex justify-between mt-3">
          <p className=" bg-orange-600 text-white flex items-center gap-2 py-2 px-8 w-[150px]">
            <FaDisease />
            {list.seasonality}
          </p>
          <p className=" bg-orange-600 text-white flex items-center gap-1 py-2 px-8 w-[150px]">
            <IoTimeOutline />
            {list.travelTime}
          </p>
        </div>
        <div className="flex justify-between mt-3 mb-3">
          <p className=" bg-orange-600 text-white flex items-center gap-2 py-2 px-8 w-[150px]">
            <TfiMapAlt />
            {list.country}
          </p>
          <p className=" bg-orange-600 text-white flex items-center gap-1 py-2 px-8 w-[150px]">
            <LuMapPin />
            {list.Location}
          </p>
        </div>
      </div>
      <div className="  bg-orange-600 text-center  text-white mt-5">
       <Link to={`/spot/${list._id}`}>
       <button   className="rounded-md px-4 py-2">View Details</button>
       </Link>
      </div>
    </div>
  );
};

export default ListCard;

ListCard.propTypes = {
  list: PropTypes.object.isRequired,
};
