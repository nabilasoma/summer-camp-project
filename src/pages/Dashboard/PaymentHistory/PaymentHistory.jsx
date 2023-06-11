import { useEffect, useState } from "react";


const PaymentHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-nabilasoma.vercel.app/payments', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                setHistory(data)
            })
    }, [])

    console.log(history)

    return (
        <div>
            <h3 className="text-center text-green-600 font-bold mb-12">Payment History</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-green-400">
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Quantity</th>
                            <th>Prece</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) =>  <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.date}</td>
                            <td>{item.email}</td>
                            <td>{item.transactionId}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;