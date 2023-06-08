import { useEffect, useState } from "react";
import SixInstructorsCard from "./SixInstructorsCard";


const SixInstructros = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/instructors', {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div>
            <h3 className="text-3xl font-bold text-red-800 text-center mt-8 mb-6">Our Popular Instructors</h3>
            <hr className="w-1/2 text-center mx-auto font-bold"/>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container mt-8">
           {
                instructors.slice(0,6).map(instructor => <SixInstructorsCard key={instructor._id}
                instructor={instructor}
                ></SixInstructorsCard>)
            }
           </div>
        </div>
    );
};

export default SixInstructros;