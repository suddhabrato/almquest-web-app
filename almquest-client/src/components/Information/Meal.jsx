import React from "react";
import meal from "../../assets/personainfo/meal.jpg";

const Meal = () => {

    return (
       
        <div className="mt-8 mb-8 rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
            <img className="object-cover w-full h-64" src={meal} alt="Article" />

            <div className="p-6">
                <div>
                    <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" tabIndex="0">What constitutes a Meal</p>
                    <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                        A <b>Meal</b> is the standard we used to define the quantity of donated food.
                        A meal is not defined by any rigid standards and is largely determined by the social, economic and geographic setting 
                        of the region involved. By qualitative standards, a meal is what can adequately be served to an individual as enough for 
                        one half of a day.
                    </p>
                </div>
            </div>
        </div>

    );
};
export default Meal;