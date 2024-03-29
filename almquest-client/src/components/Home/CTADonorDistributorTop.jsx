import React from "react";

const CTADonorDistributorTop = ({ pageRefs }) => {
  return (
    <section
      className="bg-white dark:bg-gray-900"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
    >
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center my-4 mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
          About Us
        </h2>

        <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
          Here on AlmQuest we bring two groups of people together - The ones who
          have excess food they can donate and the ones who have the opportunity
          and the scope to distribute that food to the under-priviledged and the
          ones in need.
        </p>

        <div className="mt-6">
          {/* <a
            href="/personainfo"
            className="inline-flex items-center justify-center w-full px-5 py-3 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
          >
            <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="mx-2">Check Out Some More</span>
          </a> */}

          <a
            href="/personainfo"
            className="inline-flex items-center justify-center w-full px-5 py-3 mt-4 overflow-hidden text-white transition-colors duration-300 bg-amber-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-amber-500 focus:ring focus:ring-amber-300 focus:ring-opacity-80"
          >
            <svg
              className="w-5 h-5 mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="mx-2">Check Out Some More</span>
          </a>
        </div>
      </div>

      {/* <div className="container lg:px-32 px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Join Us <span className="text-amber-500">In Our Quest</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          We provide this platform for bringing two kinds of people or
          organisation alike together who can fulfil each other's needs.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-amber-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col items-center">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 justify-center ring-gray-300"
                src="https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg"
                alt=""
              />

              <div className="mt-4 lg:mt-6 sm:mx-4 sm:mt-0">
                <h1 className="text-4xl text-center font-semibold text-gray-700 capitalize md:text-4xl dark:text-white group-hover:text-white">
                  Donor
                </h1>
              </div>


              <p className="mt-4 text-gray-800 text-center dark:text-gray-300 group-hover:text-gray-300">
                <p>You can be an <b>Individual</b> or an <b>Organisation</b> or a <b>Food Chain</b>.</p>
                <p> Take the first steps.<b> Join us as a Donor Now!</b></p>
                
              </p>
            </div>



          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-amber-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsTrmtki0LulwdZ0_yY70rNvRzs4xpOKGYA&usqp=CAU"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Distributor
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Individual or Organisation
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              nesciunt officia aliquam neque optio? Cumque facere numquam est.
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="#"
                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Reddit"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Github"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div> */}

      <section className="bg-white dark:bg-gray-900">
        <div className="container lg:px-28 py-10 mx-auto">
          <div className="text-center mx-6">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Join Us in <span className="text-amber-500">Our Quest</span>
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              We provide this platform for bringing two kinds of people or
              organisation alike together who can fulfil each other's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 mx-4 my-4 px-2 py-2">
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.pexels.com/photos/6994944/pexels-photo-6994944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <a href="/register">
                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white shadow dark:bg-gray-900  transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-amber-600 dark:border-gray-700 dark:hover:border-transparent dark:hover:bg-amber-500">
                  <p className="font-semibold text-gray-800 dark:text-white md:text-xl  group-hover:text-white">
                    Join us as a Donor Now!
                  </p>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm  group-hover:text-white">
                    You can be an Individual or an Organisation or a Food Chain.
                    <br /> Take the first steps.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <a href="/register">
                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white shadow dark:bg-gray-900  transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-amber-600 dark:border-gray-700 dark:hover:border-transparent dark:hover:bg-amber-500">
                  <p className="font-semibold text-gray-800 dark:text-white md:text-xl  group-hover:text-white">
                    Join us as a Distributor Now!
                  </p>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm  group-hover:text-white">
                    You can be an Individual or a Social Service Group or a NGO.
                    <br /> Take the first steps.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CTADonorDistributorTop;
