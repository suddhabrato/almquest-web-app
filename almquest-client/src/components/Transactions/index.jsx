import React from "react";

const Transactions = () => {
  const Package = {
    _id: "63a69de12d697bc12a0a06ce",
    status: "Paired",
  };
  return (
    <section className="mx-4">
      <div className="my-16 rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h2 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            Package Details
          </h2>
          <button className="mx-2 mt-4 rounded-full max-w-full px-4 py-1.5 border-2 border-blue-500 dark:border-blue-400">
            <p className="text-blue-500 dark:text-blue-400 truncate font-semibold tracking-wide">
              Status: {Package.status}
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <button className="mt-2 rounded-full max-w-full px-4 py-1.5 bg-gray-50 dark:bg-gray-800 shadow-md">
            <p className="text-gray-500 dark:text-gray-400 truncate">
              Package ID: {Package._id}
            </p>
          </button>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>

        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="text-xl font-medium text-blue-600 dark:text-blue-300"
            tabIndex="0"
            role="link"
          >
            John Doe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
