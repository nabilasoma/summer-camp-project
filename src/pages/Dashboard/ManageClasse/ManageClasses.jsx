import { useEffect, useState } from "react";


const ManageClasses = () => {
    const [manageAdmin, setManageAdmin] = useState([]);
    const [items, setItems] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/addaclasses', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                setManageAdmin(data)
            })
    }, [])

 
const handleApprove = () => {
    setItems(true)
}


    return (
        <div>
            <h3 className="text-center text-purple-500 font-bold ">Manage Classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-green-400 text-white">
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageAdmin.map((item, index) => <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>

                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.class_name}</td>
                            <td>{item.instructor}</td>
                            <td>{item.email}</td>
                            <td>{item.seats}</td>
                            <td>{item.price}</td>
                            <td><button className="btn btn-xs" onClick={()=>handleApprove(item._id)}>
                            {items ? 'Pending' : 'Approve'}
                                </button></td>
                            <td>
                            <button className="text-green-500 btn btn-xs">Approve</button>
                            <button className="text-red-600 mt-0 btn btn-xs">Deny</button>
                            <button className="text-yellow-600 odd:mt-0 btn btn-xs">Pending</button>
                            </td>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;