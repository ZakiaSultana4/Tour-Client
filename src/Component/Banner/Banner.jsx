import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Banner = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-102px)] overflow-y-hidden relative flex justify-center items-center">
        <span className="overlay text-white"></span>

        <div className="z-40 absolute w-full overflow-x-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
                        <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(https://arid-html.vercel.app/main-file/dist/assets/images/hero/h2.webp)`,
                }}
              >
                <div className="hero-overlay bg-opacity-40  bg-black"></div>
                <div className="hero-content text-center text-neutral-content">
                <ScrollAnimation>
                    <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                      <span className="text-[#FF4838] title-text">
                      Find Your Perfect Destination 
                      </span>
                      <br />
                      The Best Moment In Your Life.
                    </h1>
                    <p className="text-white md:my-8 my-5 text-3xl  md:text-6xl title-text  font-semibold">
                    Your Adventure Travel Expert In <span className="title-text text-[#FF4838]">Peris</span>
                    </p>
                    <div>
                      <button className="btn bg-[#FF4838] text-white border-none py-1">
                        View All Spot
                      </button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(https://arid-html.vercel.app/main-file/dist/assets/images/hero/h3.webp)`,
                }}
              >
                <div className="hero-overlay bg-opacity-40  bg-black"></div>
                <div className="hero-content text-center text-neutral-content">
                <ScrollAnimation>
                <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                      <span className="text-[#FF4838] title-text">
                      Find Your Perfect Destination 
                      </span>
                      <br />
                      The Best Moment In Your Life.
                    </h1>
                    <p className="text-white md:my-8 my-5 text-3xl  md:text-6xl title-text  font-semibold">
                    Your Adventure Travel Expert In <span className="title-text text-[#FF4838]">Switzerland</span>
                    </p>
                    <div>
                      <button className="btn bg-[#FF4838] text-white border-none">
                        View All Spot
                      </button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(https://arid-html.vercel.app/main-file/dist/assets/images/hero/h1.webp)`,
                }}
              >
                <div className="hero-overlay bg-opacity-40  bg-black"></div>
                <div className="hero-content text-center text-neutral-content">
                  <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                      <span className="text-[#FF4838] title-text">
                      Find Your Perfect Destination 
                      </span>
                      <br />
                      The Best Moment In Your Life.
                    </h1>
                    <p className="text-white md:my-8 my-5 text-3xl  md:text-6xl title-text  font-semibold">
                    Your Adventure Travel Expert In <span className="title-text text-[#FF4838]">Italy</span>
                    </p>
                    <div>
                      <button className="btn bg-[#FF4838] text-white border-none">
                        View All Spot
                      </button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
