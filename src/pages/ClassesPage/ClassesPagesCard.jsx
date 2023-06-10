import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";


const ClassesPagesCard = ({ myClass }) => {
    const { image, name, instructor, seats, price, _id } = myClass;
    console.log(myClass);
    const [disabled, setDisabled] = useState(false);
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
     const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
 

    
   
    const handleAddToCart = myClass => {
        console.log(myClass)
        if(isAdmin && isInstructor){
            setDisabled(true);
        }
        if(user && user.email){
            const selectedClass = {classId: _id, name, image, price, email: user?.email}
            fetch('http://localhost:4000/selectedClasses', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added Your Selected Class',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to enroll',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',  {state: {from: location}})
                }
              })
        }
    }
   
   

    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-16">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-green-900">{name}</h2>
                <h3 className="text-xl font-bold text-red-800">Instructor: {instructor}</h3>
                <p className="font-bold">Total Seat: {seats}</p>
                <p className="font-bold">Price: ${price}</p>
                <div className="card-actions">
                    <button disabled={false} onClick={()=>handleAddToCart(myClass)} className="btn btn-success">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPagesCard;