import { motion } from "framer-motion";
import ScrollAnimation from "../Component/ScrollAnimation/ScrollAnimation";

const Team = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <ScrollAnimation>
                    <div className="h-32 w-32">
                      <img
                        src="https://arid-html.vercel.app/main-file/dist/assets/images/touriest/testi-avater-2.webp"
                        alt
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="px-6 mt-16">
                  <ScrollAnimation>
                    <div className="font-bold text-3xl text-center pb-1">
                      Andres Berlin
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation>
                    <p className="text-gray-800 text-sm text-center">
                      Chief Executive Officer
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      The CEO&apos;s role in raising a company&apos;s corporate
                      IQ is to establish an atmosphere that promotes knowledge
                      sharing and collaboration.
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                              ry={5}
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <ScrollAnimation>
                    <div className="h-32 w-32">
                      <img
                        src="https://arid-html.vercel.app/main-file/dist/assets/images/touriest/testi-avater-3.webp"
                        alt
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="px-6 mt-16">
                  <ScrollAnimation>
                    <div className="font-bold text-3xl text-center pb-1">
                      Silene Tokyo
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <p className="text-gray-800 text-sm text-center">
                      Product Design Head
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      The emphasis on innovation and technology in our companies
                      has resulted in a few of them establishing global
                      benchmarks in product design and development.
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                              ry={5}
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <ScrollAnimation>
                    <div className="h-32 w-32">
                      <img
                        src="https://arid-html.vercel.app/main-file/dist/assets/images/touriest/testi-avater.webp"
                        alt
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="px-6 mt-16">
                  <ScrollAnimation>
                    <div className="font-bold text-3xl text-center pb-1">
                      Johnson Stone
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <p className="text-gray-800 text-sm text-center">
                      Manager Development
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      Our services encompass the assessment and repair of
                      property damage caused by water, fire, smoke, or mold. We
                      can also be a part of the restoration.
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#84cc16"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                              ry={5}
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
