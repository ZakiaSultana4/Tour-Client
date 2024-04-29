import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Details = () => {
  const { mainUrl, user } = useContext(AuthContext);
  const data = useLoaderData();
  const spotImage = data.SpotImage;
  const spotName = data.SpotName;
  const country = data.country;
  const averageCost = data.averageCost;
  const cartAdderName = user.displayName;
  const cartAdderEmail = user.email;

  const handleAddToCart = (e) => {
    e.preventDefault();
    const info = {
      spotImage,
      spotName,
      country,
      averageCost,
      cartAdderName,
      cartAdderEmail,
    };
    fetch(`${mainUrl}/addCart`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data1) => {
      
        if (data1?.insertedId) {
          toast.success("Spot added To Booking Successfully");
          // if (data1.spotName==data.spotName) {
          //   toast.error("Already");
          // }
        }
      });
  };
  return (
   <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Tour|Details</title>
            </Helmet>
    <div className="max-w-7xl mx-auto lg:p-0 md:px-5 px-3  ">
      <div className="flex gap-10">
        <img src={data.SpotImage} alt="" className=" flex-1" />
        <div className=" flex-1 my-1">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody className=" flex flex-col gap-2">
                {/* row 1 */}
                <tr className="bg-base-200">
                  <td className="  text-xl ">Spot Name :</td>
                  <td className="  text-xl ">{data.SpotName}</td>
                </tr>
                <tr className="bg-base-300">
                  <td className="  text-xl ">Country Name:</td>
                  <td className="  text-xl ">{data.country}</td>
                </tr>
                <tr className="bg-base-200">
                  <td className="  text-xl ">Spot Location :</td>
                  <td className="  text-xl ">{data.Location}</td>
                </tr>
                <tr className="bg-base-300">
                  <td className="  text-xl ">Average Cost :</td>
                  <td className="  text-xl ">${data.averageCost}</td>
                </tr>
                <tr className="bg-base-200">
                  <td className="  text-xl ">Suitable Travel Time: </td>
                  <td className="  text-xl ">{data.travelTime}</td>
                </tr>
                <tr className="bg-base-300">
                  <td className="  text-xl ">Total Visitors Per Year:</td>
                  <td className="  text-xl ">
                    {" "}
                    {data.totaVisitorsPerYear} People
                  </td>
                </tr>
                <tr className="bg-base-200">
                  <td className="  text-xl ">Seasonality:</td>
                  <td className="  text-xl ">{data.seasonality}</td>
                </tr>
                <tr className="bg-base-300">
                  <td className="  text-xl ">Short Description:</td>
                  <td className="  text-xl ">{data.shortDescription}</td>
                </tr>
              </tbody>
            </table>
            <div className="  bg-orange-600 text-center text-white my-5">
              <Link>
                <button
                  onClick={handleAddToCart}
                  className="rounded-md px-3 py-4"
                >
                  Book The Spot
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Details;
