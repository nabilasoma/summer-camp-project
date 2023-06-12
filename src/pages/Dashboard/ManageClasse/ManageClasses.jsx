import { useEffect, useState } from "react";


const ManageClasses = () => {
    const [manageAdmin, setManageAdmin] = useState([]);
    const [status, setStatus] = useState('Pending');
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        fetch('https://summer-camp-server-nabilasoma.vercel.app/addaclasses', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                setManageAdmin(data)
            })
    }, [])

const handlePending = () => {
    setStatus('Pending');
    setIsDisabled(true);
}

    const handleApprove = () => {
        setStatus('Approved');
        setIsDisabled(true);
    };

    const handleDeny = () => {
        setStatus('Denied');
        setIsDisabled(true);
    };


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
                            <td><button onClick={handlePending} disabled={isDisabled} className="btn btn-xs" >
                                Pending
                            </button></td>
                            <td>
                                <button onClick={handleApprove} disabled={isDisabled} className="text-green-500 btn btn-xs">Approve</button>
                                <button onClick={handleDeny} disabled={isDisabled} className="text-red-600 mt-0 btn btn-xs">Deny</button>
                                {/* <button

                             className="text-yellow-600 odd:mt-0 btn btn-xs">
                                Feedback
                                </button> */}

                                {/* Open the modal using ID.showModal() method */}
                                <button className="btn btn-xs" onClick={() => window.my_modal_2.showModal()}>Feedback</button>
                                <dialog id="my_modal_2" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click outside to close</p>
                                    </form>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>


                            </td>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;