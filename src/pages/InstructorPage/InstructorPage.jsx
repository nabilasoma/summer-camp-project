import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const InstructorPage = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-nabilasoma.vercel.app/instructors', {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
           {
                instructors.map(singleInstructor => <InstructorCard key={singleInstructor._id}
                singleInstructor={singleInstructor}
                ></InstructorCard>)
            }
           </div>
        </div>
    );
};

export default InstructorPage;