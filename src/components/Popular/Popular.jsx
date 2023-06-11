import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";


const Popular = () => {
    const [popularClass, setPopularClass] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/classes', {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => setPopularClass(data))
    },[])

    return (
        <div className="mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto container mb-4 gap-10">
                
            {
                popularClass.slice(0, 6).map(singleData => <PopularCard key={singleData._id}
                singleData={singleData}
                ></PopularCard>)
            }
            </div>
        </div>
    );
};

export default Popular;