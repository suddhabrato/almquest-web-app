import React from "react";
import distributor from "../../assets/personainfo/distributor.jpg"

const DistributorInfo = () => {

    return (
       
        <div className="mt-8 mb-8 rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
            <img className="object-cover w-full h-64" src={distributor} alt="Article" />

            <div className="p-6">
                <div>
                <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" tabIndex="0">Who is a Distributor</p>
                    <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                        A Distributor is an individual or a NGO or any other other organisation with the resources
                        and objective to distribute food in under-priviledged regions where such donations will
                        have the highest amount of impact. A Distributor will have the capacity to receive and distribute food the way
                        he deems fit and update his status every step of the way.
                    </p>
                </div>
            </div>
        </div>

    );
};
export default DistributorInfo;