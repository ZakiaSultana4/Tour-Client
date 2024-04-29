const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3  py-24">
      <div className="text-center lg:pb-[60px] pb-[40px] ">
        <h5 className=" font-semibold md:text-7xl title-text text-4xl">Blogs and News</h5>
        <h2 className="section-title-v3 font-semibold text-4xl mt-4">Find Your Desire Destination</h2>
      </div>
     <div className=" grid md:grid-cols-4 grid-cols-1 max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
     <div className=" group wow fadeInUp md:w-[280px] h-[430px] shadow-sm px-3 py-3 w-[380px] ">
        <div className="overflow-hidden relative">
          <a href="blog-details.html">
            <img
              src="https://arid-html.vercel.app/main-file/dist/assets/images/blog/b2-1.webp"
              className="group-hover:scale-105 duration-300  h-[300px]  md:w-[300px] w-[380px] flex justify-center items-center "
              alt=""
            />
          </a>
          <span className="absolute top-4 left-4  bg-white text-black text-sm px-4 py-2 inline-block font-medium">
            February 8, 2022
          </span>
        </div>

        <div className="pt-6">
          <div className="  font-medium">
            <span>--- City Travel, </span> <span>Vacation</span>
          </div>

          <h3 className="">
            <a href="">
              A True Horseman’s Tale Living For a Year on a Fresh.
            </a>
          </h3>
        </div>
      </div>
     <div className=" group wow fadeInUp md:w-[280px] h-[430px]  shadow-sm px-3 py-3">
        <div className="overflow-hidden relative">
          <a href="blog-details.html">
            <img
              src="https://arid-html.vercel.app/main-file/dist/assets/images/blog/b2-3.webp"
              className="group-hover:scale-105 duration-300  h-[300px]   md:w-[300px] w-[380px] flex justify-center items-center"
              alt=""
            />
          </a>
          <span className="absolute top-4 left-4  bg-white text-black text-sm px-4 py-2 inline-block font-medium">
            May 29, 2023
          </span>
        </div>

        <div className="pt-6">
          <div className="  font-medium">
            <span>---City Travel, </span> <span>Mountain</span>
          </div>

          <h3 className="">
            <a href="">
            Benefit from a 15% discount mak your reservations..
            </a>
          </h3>
        </div>
      </div>
     <div className=" group wow fadeInUp md:w-[280px] h-[430px]  shadow-sm px-3 py-3">
        <div className="overflow-hidden relative">
          <a href="blog-details.html">
            <img
              src="https://arid-html.vercel.app/main-file/dist/assets/images/blog/b2-4.webp"
              className="group-hover:scale-105 duration-300  h-[300px]   md:w-[300px] w-[380px] flex justify-center items-center"
              alt=""
            />
          </a>
          <span className="absolute top-4 left-4  bg-white text-black text-sm px-4 py-2 inline-block font-medium">
            June 10, 2023
          </span>
        </div>

        <div className="pt-6">
          <div className="  font-medium">
            <span>--- Hiking, </span> <span>Vacation</span>
          </div>

          <h3 className="">
            <a href="">
            Living For a Year on a Count Ryside Farm.
            </a>
          </h3>
        </div>
      </div>
     <div className=" group wow fadeInUp md:w-[280px] h-[430px]  shadow-sm px-3 py-3">
        <div className="overflow-hidden relative">
          <a href="blog-details.html">
            <img
              src="https://arid-html.vercel.app/main-file/dist/assets/images/blog/b2-2.webp"
              className="group-hover:scale-105 duration-300  h-[300px]   md:w-[300px] w-[380px] flex justify-center items-center"
              alt=""
            />
          </a>
          <span className="absolute top-4 left-4  bg-white text-black text-sm px-4 py-2 inline-block font-medium">
            April 12, 2024
          </span>
        </div>

        <div className="pt-6">
          <div className="  font-medium">
            <span>--- City Travel, </span> <span>Camping</span>
          </div>

          <h3 className="">
            <a href="">
            A Worldwide Tale – Living Abroad in a Van Traveling.
            </a>
          </h3>
        </div>
      </div>
     </div>
   
    </div>
  );
};

export default Blog;
