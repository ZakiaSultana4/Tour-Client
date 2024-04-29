import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const MyList = () => {
  const { user,mainUrl } =
    useContext(AuthContext);
  const [myList, setMylist] = useState([]);
  useEffect(() => {
    fetch(`${mainUrl}/spot?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMylist(data);
      });
  }, [user.email,mainUrl]);

  const handleDelete = (id) => {
    const prodId = {id: id};
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${mainUrl}/deleteS/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prodId)

            }).then(() => {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
              
            })
        }
         else {
            Swal.fire({
                icon: 'error',
                title: 'Cancelled...',
                text: 'Your imaginary product is safe!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }).catch(err => console.log(err));
}
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Tour|MyList </title>
            </Helmet>
    <div className="max-w-7xl mx-auto lg:p-0 md:px-5 px-3 min-h-[70vh]">

<table className="table relative">
  {/* head */}
  <thead>
   <tr>
      <th>Tourists Spot Name</th>
      <th>Seasonality</th>
      <th>Average Cost</th>
      <th>Action</th> 
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}

    {myList.length > 0 ? (
      <>
        {myList?.map((list) => (
          <>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={list?.SpotImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{list?.SpotName}</div>
                    <div className="text-sm badge  bg-orange-600 text-white">
                    <LuMapPin /> {list?.Location}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="md:text-sm text-xs font-medium  bg-orange-600 p-1 rounded-lg text-white">
                  {list?.seasonality}
                </span>
              </td>
              <td>
                <span className="md:text-sm text-xs font-medium  bg-orange-600 p-1 rounded-lg text-white">
                  ${list?.averageCost}
                </span>
              </td>
              <td>
                <div className="flex h-full gap-4">
                  <Link
                    to={`/update/${list._id}`}
                    className="btn btn-xs  bg-orange-600 text-white rounded-lg"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(list?._id)}
                    className="btn btn-xs bg-red-500 text-white rounded-lg"
                  >
                    Delate
                  </button>
                </div>
              </td>
            </tr>
           
          </>
        ))}
      </>
    ) : (
      <div className="text-center">
        <h2 className="md:text-4xl text-2xl font-bold  text-orange-600 my-10">
          You do not add any Spot Yet!
        </h2>
      </div>
    )}
  </tbody>
</table>
</div>
    </>
  );
};

export default MyList;
