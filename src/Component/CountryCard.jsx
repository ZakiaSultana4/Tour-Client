import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CountryCard = ({item}) => {
    const navigate = useNavigate();
  return (
    <div
    onClick={() => navigate(`/country/${item.Cname}`)}
    className=" w-full group  cursor-pointer "
  >
    <div className="cardShadow p-5 w-full bg-white  rounded">
      <img
        className="w-full h-[150px] object-contain rounded-md"
        src={item.img}
        alt=""
      />
      <div className=" w-full rounded h-10 mt-2 text-[#FF4838] flex justify-center items-center">
        <p className="text-center font-bold text-3xl ">
          {item.d}
        </p>
      </div>
    </div>
  </div>
  )
}

export default CountryCard
CountryCard.propTypes = {
  item: PropTypes.object.isRequired,
};
