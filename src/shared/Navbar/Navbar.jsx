import { Link } from "react-router-dom";
import logo from '../../assets/images-removebg-preview.png'
import { FaUserAlt } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    

    const {user, logOut} = useContext(AuthContext);
    const navOption = <>
    <li><Link>Home</Link></li>
    <li><Link to='/instructor'>Instructors</Link></li>
    <li><Link to='/classesPage'>Classes</Link></li>
    </>

    const handleLogout = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.log(error)
        })
    }

   
    return (
       <div className=" mx-auto">
         <div className="navbar fixed bg-black bg-opacity-20 text-white font-bold z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl -mt-3">
                    <p>Spiritual Home</p>
                    <img style={{height: '70px', width: '70px'}} src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <>
                    <Link to='/dashboard' className="mr-2">Dashboard</Link>
                    <a className="btn"><FaUserAlt></FaUserAlt></a>
                    <Link><button onClick={handleLogout} className="btn btn-ghost btn-sm">Logout</button></Link>
                    </> : 
                   <Link to='/login'> <button className="btn btn-ghost btn-sm">Login</button></Link>
                 
                }
                
                {/* <img style={{widows: '20px', height: '20px'}} src= alt="" /> */}
            </div>
        </div>
       </div>
    );
};

export default Navbar;