import { useCallback, useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ListCard from "../Component/ListCard";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

const Country = () => {
  const { mainUrl } = useContext(AuthContext);
  const data = useLoaderData(); 
  const country1 = useParams();
  const [brands, setBrands] = useState([]);
  const [country2, setCountry2] = useState([]);

  useEffect(() => {
    fetch(`${mainUrl}/Country`)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, [mainUrl]);
  
  useEffect(() => {
    const findC = brands.find((p) => p.Cname == country1.Cname);
    setCountry2(findC);
  }, [brands, country1]);

  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    "https://source.unsplash.com/1200x540/?nature",
    "https://source.unsplash.com/1200x540/?hill",
    "https://source.unsplash.com/1200x540/?mountain",
    "https://source.unsplash.com/1200x540/?river",
    "https://source.unsplash.com/1200x540/?sea",
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Tour|{country1.Cname}</title>
            </Helmet>
      <div className="h-60  md:h-[470px] lg:h-[540px] relative overflow-hidden">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute top-1/2 left-3 z-50 flex justify-center lists-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute top-1/2 z-50 right-3  flex justify-center lists-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* dots */}
        <div className="flex justify-center lists-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button
              key={_}
              onClick={() => setCurrentSlider(inx)}
              className={`rounded-full duration-500 bg-white ${
                currentSlider === inx ? "w-8" : "wz-2"
              } h-2`}
            ></button>
          ))}
        </div>
        {/* Carousel container */}
        <div
          className="ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          <img
            src={country2?.i1}
            className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
          />
          <img
            src={country2?.i2}
            className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
          />
          <img
            src={country2?.i3}
            className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
          />
        </div>
      </div>
      <div className="mt-12">
      <h1 className="md:text-7xl text-4xl font-extrabold title-text text-center">
        All Attractive Spots in {country1.Cname}
      </h1>
      <p className="text-center lg:w-[70%] md:w-[80%] w-full mx-auto my-5 md:text-base text-sm md:leading-7 leading-relaxed">
        Top Attractive Destinations from Different Countries
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto lg:p-0 md:px-5 px-3 mt-12">
      {data?.map((list) => (
            <ListCard key={list.id} list={list}/>
            ))}
            </div>
    </>
  );
};

export default Country;
