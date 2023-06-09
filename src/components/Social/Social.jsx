import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Social = () => {
    const {googleSign} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoUrl}
            fetch('http://localhost:4000/users', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    navigate(from, {replace: true})
                }
            })
            navigate(from, {replace: true})

        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="mx-auto text-center">
            <button onClick={handleGoogleSign} className="btn btn-round btn-success">
            <FaGoogle></FaGoogle>
        </button>
        </div>
    );
};

export default Social;