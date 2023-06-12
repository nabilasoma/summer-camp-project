import { useEffect, useState } from "react";
import ClassesPagesCard from "./ClassesPagesCard";


const ClassesPage = () => {
    const [myClasses, setMyClasses] = useState([]);

    useEffect(()=> {
        fetch('https://summer-camp-server-nabilasoma.vercel.app/approveClasses', {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => setMyClasses(data))

    }, [])
    return (
        <div className="">
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-10">
           {
                myClasses.map(myClass => <ClassesPagesCard key={myClass._id}
                
                myClass={myClass}
                ></ClassesPagesCard>)
            }
           </div>
        </div>
    );
};

export default ClassesPage;