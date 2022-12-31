import React from "react";
import donor from "../../assets/personainfo/donor.jpg";

const DonorInfo = () => {

    return (
       
        <div className="mt-8 mb-8 rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
            <img className="object-cover w-full h-64" src={donor} alt="Article" />

            <div className="p-6">
                <div>
                    <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" tabIndex="0">Who is a Donor</p>
                    <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                        A donor is an individual or an institution such as a restaurant or a food Chain
                        who may have excess food they can give away which otherwise might have been wasted.
                        A Donor can also be someone who wishes to donate the excess food that will be leftover 
                        to after a big occassion such as a wedding, or an office event.
                    </p>
                </div>
            </div>
        </div>

    );
};
export default DonorInfo;