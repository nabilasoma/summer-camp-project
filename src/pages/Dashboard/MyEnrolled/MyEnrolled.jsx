import { useEffect, useState } from "react";


const MyEnrolled = () => {
    const [myEnrolled, setMyEnrolled] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-nabilasoma.vercel.app/payments', {method: "GET"})
        .then(res => res.json())
        .then(data => {
            setMyEnrolled(data)
        })
    }, [])

    return (
        <div>
            <h3 className="text-center text-purple-500 font-bold text-2xl mb-12">My Enrolled Class</h3>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className="bg-green-500">
      <tr>
        <th>#</th>
        <th>Asana's Names</th>
        <th>quantity</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {myEnrolled.map((item, index) =>  <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item.itemNames}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
      </tr>
   )}
     
      
    </tbody>
  </table>
</div>
       
        </div>
    );
};

export default MyEnrolled;