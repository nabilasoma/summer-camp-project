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