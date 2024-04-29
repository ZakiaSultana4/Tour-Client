import { useContext, useEffect, useState } from "react";
import Banner from "../Component/Banner/Banner";

import AboutUs from "../Component/About/AboutUs";
import Team from "./Team";

import { Helmet } from "react-helmet";
import CountryCard from "../Component/CountryCard";
import Tourist from "./Tourist";
import { AuthContext } from "../Provider/AuthProvider";
import Video from "./Video";
import Blog from "./Blog";
import Category from "./Category";

const Home = () => {
  const { mainUrl } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [brandLoading, setBrandLoading] = useState(false);
  useEffect(() => {
    // brands
    setBrandLoading(true);
    fetch(`${mainUrl}/Country`)
      .then((res) => res.json())
      .then((data) => {
        setBrandLoading(false);
        setBrands(data);
      });
  }, [mainUrl]);

  return (
    <div className="bg-[#fafafa]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tour | Home</title>
      </Helmet>

      <Banner></Banner>

      <div className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3  py-24">
          <h1 className="md:text-7xl text-4xl font-extrabold title-text text-center">
            Explore Our Tours Spots
          </h1>
          <p className="text-center lg:w-[70%] md:w-[80%] w-full mx-auto my-5 md:text-base text-sm md:leading-7 leading-relaxed">
            Top Attractive Destinations from Different Countries
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3  xl:grid-cols-3 gap-5  mt-10 w-full ">
            {brandLoading && (
              <p className="font-bold mt-4 text-2xl">Spot Loading...</p>
            )}
            {brands?.map((item) => (
              <CountryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Tourist />
      </div>

      <div>
        <Video />
      </div>
      <div className=" mt-28">
        <AboutUs></AboutUs>
      </div>
      <Blog />
      <Category/>
      <div className="max-w-7xl mx-auto">
        <Team></Team>
      </div>

    </div>
  );
};

export default Home;
