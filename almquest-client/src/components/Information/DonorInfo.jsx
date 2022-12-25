import React from "react";


const DonorInfo = () => {

    return (
       
        <div className="mt-8 mb-8 rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
            <img className="object-cover w-full h-64" src="https://images.pexels.com/photos/14760399/pexels-photo-14760399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Article" />

            <div className="p-6">
                <div>
                    <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" tabIndex="0">Who is a Donor</p>
                    <p className="mt-2 text-md text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                </div>
            </div>
        </div>

    );
};
export default DonorInfo;