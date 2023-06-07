import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {

    const [eyeClick, setEyeClick] = useState(false);

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleEyeClick = () => {
        setEyeClick(!eyeClick)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="">
                    </h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: true
                            })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex justify-center items-center">
                                <input type={(eyeClick === false ? "password" : "text")} name="password" {...register("password", {
                                    required: true,

                                })} placeholder="password" className="input input-bordered" />
                               
                                <p className="-ml-6">
                                {
                                (eyeClick === false) ? <FaEyeSlash onClick={handleEyeClick}></FaEyeSlash> : <FaEye onClick={handleEyeClick}></FaEye>
                               }
                                </p>
                            </div>
                            {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be minimum 6 character</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">password must be one uppercase one special character</span>}


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="Login" />
                        </div>
                    </form>

                    <p><small>New to this site? Please</small><Link to='/registration'><small>Registration</small></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;