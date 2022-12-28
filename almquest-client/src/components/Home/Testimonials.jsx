import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 lg:px-32 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              What Our Users say
            </h1>

            <div className="flex mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-amber-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-amber-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-amber-500 rounded-full"></span>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="grid grid-rows-1 place-content-between p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “We have been in business for almost a decade now and the most
              morally derogatory problem that we had faced was the amount of
              food we had to throw away on a daily basis because we simply did
              not have the means to donate. But now with AlmQuest we can do that
              effortlessly.”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/g/c/p46886-164187619861dd0ae6a708c.jpg?tr=tr:n-medium"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Food Heaven
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Family Restaurant
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-1 place-content-between p-8 bg-amber-500 border border-transparent rounded-lg dark:bg-amber-600">
            <p className="leading-loose text-white">
              “AlmQuest will hopefully help a lot in social development.”.
            </p>

            <div className="flex items-end mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-amber-200"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-white">Jeny Doe</h1>
                <span className="text-sm text-amber-200">Tech Professional</span>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-1 place-content-between p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “We are a group of teachers at a High School in a remote area in
              the Nadia district of West Bengal, India. We have a lot of
              under-nourished population in the region surrroundingour school.
              Government provided food rations only help some and despite our
              best intention of feeding these people, we never had a food source
              to make that feasible. Well, now with AlmQuest we can do just
              that.”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://www.ngoregistration.org/wp-content/uploads/2014/07/non-government-organization-300x197.jpg"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  New Light{" "}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  A teacher-run NGO
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
