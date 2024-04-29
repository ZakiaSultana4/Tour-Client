const Category = () => {
  return (
    <div>
      {/* <!--========== TOUR CATEGIRY STYLE ONE START==========--> */}
      <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 ">
        <div className="">
          <div className="absolute top-[10%] left-[2%] max-w-[9%] lg:inline-block hidden">
            <img
              src="https://arid-html.vercel.app/main-file/dist/assets/images/illustration/leaf-illustration.png"
              alt="leaf"
            />
          </div>

          <div className="container">
            <div className="text-center lg:pb-[60px] pb-[40px]">
              <div className="text-center lg:pb-[60px] pb-[40px] ">
                <h5 className=" font-semibold md:text-7xl title-text text-4xl">
                  Travel Category
                </h5>
                <h2 className=" font-semibold text-4xl mt-4">
                  Our Popular Tours Type
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-8">
              <div className="sm:text-left text-center  md:w-[300px]  shadow-md px-2 py-2">
                <img
                  src="https://arid-html.vercel.app/main-file/dist/assets/images/icons/t1-1.svg"
                  alt="icon"
                  className=" flex justify-center items-center  text-center  lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto "
                />
                <h4 className=" lg:mt-6 mt-4">
                  <a href="  " className=" font-semibold text-2xl">
                    Adventure Tour
                  </a>
                </h4>
                <h5 className=" text-xl text-md text-primary-1 mt-1 text-orange-600 font-bold">
                  40 Tours+
                </h5>
                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                Adventure tourism can offer travelers a variety of positive outcomes,
                 such as increased physical fitness, mental health, self-confidence, and cultural awareness
                </p>
              </div>
              <div
                className="sm:text-left text-center md:w-[300px]  shadow-md px-2 py-2"
                data-wow-delay="0.2s"
              >
                <img
                  src="https://arid-html.vercel.app/main-file/dist/assets/images/icons/t1-2.svg"
                  alt="icon"
                  className=" flex justify-center items-center  text-center  lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto "
                />
                <h4 className=" lg:mt-6 mt-4">
                  <p className=" font-semibold text-2xl">
                    {" "}
                    Friends Tour
                  </p>
                </h4>
                <h5 className="text-orange-600 font-bold  text-xl text-primary-1 mt-1">
                  10 Tours+
                </h5>
                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                Friends tourism can offer travelers a variety of positive outcomes, 
                such as increased physical fitness, mental health, self-confidence, and cultural awareness
                </p>
              </div>
              <div
                className="sm:text-left text-center md:w-[300px]  shadow-md px-2 py-2"
                data-wow-delay="0.4s"
              >
                <img
                  src="https://arid-html.vercel.app/main-file/dist/assets/images/icons/t1-3.svg"
                  alt="icon"
                  className=" flex justify-center items-center  text-center  lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto "
                />
                <h4 className=" lg:mt-6 mt-4">
                  <p className=" font-semibold text-2xl">
                    {" "}
                    Hiking Tour
                  </p>
                </h4>
                <h5 className="text-orange-600 font-bold  text-xl text-primary-1 mt-1">
                  20 Tours+
                </h5>
                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                Hiking tourism can offer travelers a variety of positive outcomes, 
                such as increased physical fitness, mental health, self-confidence, and cultural awareness
                </p>
              </div>
              <div
                className="sm:text-left text-center md:w-[300px]  shadow-md px-2 py-2"
                data-wow-delay="0.6s"
              >
                <img
                  src="https://arid-html.vercel.app/main-file/dist/assets/images/icons/t1-4.svg"
                  alt="icon"
                  className=" flex justify-center items-center  text-center  lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto "
                />
                <h4 className=" lg:mt-6 mt-4">
                  <p className=" font-semibold text-2xl">
                    {" "}
                    Honeymoon Tour
                  </p>
                </h4>
                <h5 className="text-orange-600 font-bold  text-xl text-primary-1 mt-1">
                  50 Tours+
                </h5>
                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                Honeymoon Tour can offer travelers a variety of positive outcomes, 
                such as increased physical fitness, mental health, self-confidence, and cultural awareness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
