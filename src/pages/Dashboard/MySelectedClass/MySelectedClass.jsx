import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const [selectedClass, refetch] = useCart()
    console.log(selectedClass);
    const total = selectedClass.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/selectedClasses/${item._id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
    }
    return (
        <div className="text-center w-full">
            <div className="flex justify-evenly items-center text-center gap-16 h-10">
                <h3 className="text-xl font-bold text-green-500">Total Selected Class: {selectedClass.length}</h3>
                <h3 className="text-xl font-bold text-green-500">Total price: ${total}</h3>
                <button className="btn text-purple-800 font-bold btn-sm btn-success">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table font-bold">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>#</th>
                            <th>Classes</th>
                            <th>Yoga Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((item, index) =>   <tr key={item._id}>
                                
                                <td>{index + 1} </td>
                                <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm font-bold">{item.name}</span>
                                </td>
                                <td className="font-bold">${item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item)} className="bg-purple-400 text-white btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                               
                            </tr>)
                        }
                      
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;