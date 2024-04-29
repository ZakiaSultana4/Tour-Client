import { useContext, useEffect, useState } from "react";
import ListCard from "../Component/ListCard";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

const AllList = () => {
  const { mainUrl } = useContext(AuthContext);
  const [myList, setMylist] = useState([]);
  const [searchInput, setSearchInputValue] = useState("");

  useEffect(() => {
    fetch( `${mainUrl}/spotA`)
      .then((res) => res.json())
      .then((data) => {
        setMylist(data);
      });
  }, [mainUrl]);

  /* Sort Handler Start*/
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "asc") {
      setMylist([...myList].sort((a, b) => a.averageCost - b.averageCost));
    }
    if (selectedValue === "desc") {
      setMylist([...myList].sort((a, b) => b.averageCost - a.averageCost));
    }
  };
  // search function
  const handleSearch = () => {
    if (!searchInput) {
      setMylist([]);
      return;
    }
    const specificData = myList.filter((data) => {
      if (data?.SpotName.toLowerCase().includes(searchInput)) {
        return data;
      }
    });
    setMylist(specificData);
    const specificData2 = myList.filter((data) => {
      if (data?.country.toLowerCase().includes(searchInput)) {
        return data;
      }
    });
    setMylist(specificData2);
  };
  // search function
  // const handleSearch2 = (v) => {
  //   const specificData = myList.filter((data) => {
  //     if (data?.country.includes(v)) {
  //       return data;
  //     }
  //   });
  //   setMylist(specificData);
  // };
  return (
    <>  
     <Helmet>
                <meta charSet="utf-8" />
                <title>Tour|AllList</title>
            </Helmet>
       <div className="max-w-7xl mx-auto lg:p-0 md:px-5 px-3 ">
    <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3  mb-10">
      <div className="pt-10 pb-5 relative flex">
        <input
           onChange={(e) => setSearchInputValue(e.target.value.toLowerCase())}
          type="text"
          name="search"
          className="w-full md:py-5 py-3 md:text-base text-sm md:px-6 px-3 rounded-l-lg shadow-lg"
          placeholder="Search By Spot Name Or Most Popular Country Name in Europe..."
        />
        <button
          type="submit"
          onClick={() => handleSearch()}
          className="md:py-5 py-3 md:px-10 px-6 md:text-lg text-base font-semibold rounded-r-lg text-white
           bg-[#FF4838] shadow-lg"
        >
          Search
        </button>
      </div>
      {/* <div className=" my-5 relative flex">
        <input
     
          type="search"
          id="search"
          value={searchInput}
          name="search"
          className="lg:w-[600px]  py-3 md:text-base text-sm md:px-6 px-3 rounded-l-lg shadow-lg border border-white"
          placeholder="Search Food..."
        />
        <button
        
          type="submit"
          className=" py-3 md:px-10 px-6 md:text-lg text-base font-semibold rounded-r-lg text-white bg-[#209CEE] shadow-lg"
        >
          Search
        </button>
      </div> */}
      <div className="py-10 pt-6 flex justify-between flex-wrap items-center md:space-y-0 space-y-7">
        {/* <label className="flex flex-col" htmlFor="country">
          <span className="font-semibold">Filter With Category</span>

          <select
          //  onChange={(e) => setSearchInputValue2()}
           onChange={(e) => handleSearch2((e.target.value))}
           name="country"
            id=""
            className="md:py-5 py-2 md:text-base border text-sm rounded-lg px-5 mt-1"
            required
          >
            <option selected disabled>
              Select Country Name
            </option>

            <option value="France">France</option>
            <option value="England">England</option>
            <option value="Italy">Italy</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Spain">Spain</option>
          </select>
        </label> */}
        <div className=" mx-auto flex justify-center items-center mt-2 flex-col ">
          <p className=" mb-2 font-medium">Sort By Average Cost:</p>
          <select
            onChange={handleSortChange}
            className="select select-bordered lg:w-[700px]"
          >
            <option selected>No Sort</option>
            <option value={"asc"}>Low to High</option>
            <option value={"desc"}>High to Low</option>
          </select>
        </div>
      </div>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
      {myList?.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  </div>  </>

  );
};

export default AllList;
