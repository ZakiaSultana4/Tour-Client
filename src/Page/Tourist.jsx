import { useEffect, useState } from "react";
import ListCard from "../Component/ListCard";
import { Link } from "react-router-dom";

const Tourist = () => {
  const [myList, setMylist] = useState([]);
  const [seeMore, setSeeMore] = useState([]);
  useEffect(() => {
    fetch(`https://tour-server-red.vercel.app/spotA`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 6) {
          const Arr = data.slice(0, 6);
          setMylist(Arr);
          setSeeMore(true);
          return;
        }
        setMylist(data);
        setSeeMore(false);
      });
  }, []);
  return (
    <>
      <h1 className="md:text-7xl text-4xl font-extrabold title-text text-center">
        Most Attractive Tourists Spots
      </h1>
      <p className="text-center lg:w-[70%] md:w-[80%] w-full mx-auto my-5 md:text-base text-sm md:leading-7 leading-relaxed">
        The most attractive and beautiful spot in Europe attracted by our tourists
      </p>
      <div className="max-w-7xl mx-auto lg:p-0 md:px-5 px-2 ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {myList?.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </div>
        <div className="text-center mt-16">
          {seeMore ? (
            <Link
              to="/allList"
              className="mx-auto btn bg-white drop-shadow-xl"
            >
              Show All Spots
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Tourist;
