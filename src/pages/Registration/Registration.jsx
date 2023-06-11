
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import Social from "../../components/Social/Social";



const Registration = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email, photo: data.photoUrl}
                        fetch('https://summer-camp-server-nabilasoma.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User create successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoUrl", { required: true })} placeholder="photo url" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-red-600">This field is required</span>}
                        </div>
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
                            <input type="password" name="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be minimum 6 character</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">password must be one uppercase one special character</span>}


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="SignUp" />
                        </div>
                    </form>

                    <p><small>Already have an account? Please</small><Link to='/login'><small>Login</small></Link></p>
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Registration;