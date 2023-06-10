import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";


const MyClasses = () => {
    const [myclasses, setMyclasses] = useState([]);
    const [selectedClass] = useCart();
    console.log(selectedClass);

    useEffect(() => {
        fetch('http://localhost:4000/addaclasses', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setMyclasses(data))
    }, []);

    const handleAddClass = item => {

    }


    return (
        <div className="w-full">
            <div className="flex justify-evenly items-center gap-12">
                <h3 className="text-2xl font-bold text-green-600">My Class</h3>
                <h3><button className="btn btn-outline">Total Enrolled Student <div className="badge">{selectedClass.length || 0}</div></button></h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myclasses.map((item, index) =>  <tr key={item._id}>
                            <th><button onClick={()=>handleAddClass(item)} className="btn btn-xs btn-success text-white">Book</button></th>
                            <td>{item.instructor}</td>
                            <td>{item.class_name}</td>
                            <td><button className="btn bg-green-400 text-white">{item.status}</button></td>
                            <td><button className="btn bg-green-400 text-white">Feedback</button></td>
                            <td><button className="btn bg-green-400 text-white">Update</button></td>
                            
                        </tr>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;