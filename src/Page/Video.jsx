

const Video = () => {
  return (
    <div>
      <div className="mx-auto lg:p-0 md:px-5 px-3 my-10 ">
        <img
          className=" absolute"
          src="https://arid-html.vercel.app/main-file/dist/assets/images/backgrounds/video-banner.webp"
          alt="placeholder"
        />
      </div>
      <div className="container relative z-2">
        <div className="max-w-[560px] mx-auto text-center text-white flex flex-col justify-center items-center ">
          <h2 className="lg:text-4xl text-xl font-bold  md:mt-28 mt-2">
            View latest trip shots
          </h2>
          <p className="  font-medium  mt-4 hidden md:block">
          Tourism in which tourists engage in adventure activities such as trekking, climbing, rafting, scuba diving.
          </p>

          <a
            data-fancybox
            href="https://www.youtube.com/watch?v=vJoNqBZ9QlM"
            className=" mt-2 md:mt-8 inline-flex relative lg:h-20 lg:w-20 h-16 w-16 justify-center items-center 
            rounded-full bg-primary-1 before:content-[''] before:absolute before:-inset-3 
            before:border-primary-1 before:border-2 before:rounded-full before:animate-pulse"
          >
            <img
              src="https://arid-html.vercel.app/main-file/dist/assets/images/icons/video-circle.svg"
              alt=""
              className=" w-20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
