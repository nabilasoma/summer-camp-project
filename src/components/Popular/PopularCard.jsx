import { motion } from "framer-motion"
import { useState } from "react";

const PopularCard = ({singleData}) => {
    const [rotate, setRotate] = useState(false);

    const {picture, studentNumber} = singleData;
    console.log(singleData)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <motion.div
             animate={{ rotate : rotate ? 360 : 0}}
             onClick={()=>{setRotate(!rotate)}}
            >
           <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
           
                <h2 className="card-title">
                    Total Students: {studentNumber}
                </h2>
              
                <div className="card-actions justify-end">
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
            </motion.div>
        </div>
    );
};

export default PopularCard;