import React from "react";
import DistributorInfo from "./DistributorInfo";
import DonorInfo from "./DonorInfo";
import Meal from "./Meal";


const PersonaInfo = () => {
    return(
        <div>
            <DonorInfo/>
            <DistributorInfo/>
            <Meal/>
        </div>
    );
};
export default PersonaInfo;
