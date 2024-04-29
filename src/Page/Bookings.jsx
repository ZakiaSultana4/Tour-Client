import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Bookings = () => {
  const { mainUrl, user } = useContext(AuthContext);
  const [myList, setMylist] = useState([]);
  console.log(myList);
  useEffect(() => {
    fetch(`${mainUrl}/cart?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMylist(data);
      });
  }, [user.email, mainUrl]);
  const total = myList.reduce((a, b) => a + b.averageCost, 0);

  const handleRemoveItem = (id) => {
    const prodId = { id: id };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${mainUrl}/deleteC/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(prodId),
        }).then(() => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tour|Bookings</title>
      </Helmet>
      <div className="max-w-4xl mx-auto lg:p-0 md:px-5 px-3 min-h-[70vh] ">
        {myList?.map((list) => (
          <>
            <div
              key={list._id}
              className=" flex gap-12 items-center rounded-lg py-3 px-7"
            >
              <div className="overflow-hidden">
                <img
                  className="w-[200px] md:h-28 sm:h-20 h-10 rounded-lg"
                  src={list?.spotImage}
                  alt=""
                />
              </div>

              <div className="">
                <p className="sm:font-semibold font-medium md:text-base sm:text-sm text-xs py-1">
                  Spot Name: {list?.spotName}
                </p>
                <p className="sm:font-semibold font-medium md:text-base sm:text-sm text-xs py-1">
                  Average Cost: ${list?.averageCost}
                </p>
              </div>

              <button
                onClick={() => handleRemoveItem(list._id)}
                className="sm:btn w-fit rounded-lg p-1 sm:btn-sm float-left capitalize sm:text-sm text-[8px] sm:bg-red-500 bg-red-500 sm:text-white text-white hover:text-red-500"
              >
                Remove
              </button>
            </div>
          </>
        ))}
        <hr />
        <div className=" flex px-10 mt-2 font-medium">
          <p className=" "> Total Cost </p>
          <p className=" pl-64">${total}</p>
        </div>
      </div>
    </>
  );
};

export default Bookings;
