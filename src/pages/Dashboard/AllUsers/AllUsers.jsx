import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:4000/users')
        return res.json()
    })


    const handleMakeAdmin = id => {
        fetch(`http://localhost:4000/users/admin/${id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Made Admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = id => {
        fetch(`http://localhost:4000/users/instructor/${id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Made Instructor',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div>
            <h2 className='text-2xl font-semibold text-purple-500'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>  <tr key={user._id}>

                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user._id)} className='btn bg-purple-500 py-2 flex justify-center items-center text-white'>Make Admin</button>}</td>
                                <td>{user.role == 'instructor'? 'Instructor' : <button onClick={()=>handleMakeInstructor(user._id)} className='btn bg-purple-500 py-2 flex justify-center items-center text-white'>Make Instructor</button>}</td>
                            </tr>)
                        }
                       
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;