import { Link } from "react-router-dom";
import logo from '../../assets/images-removebg-preview.png'
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const navOption = <>
    <li><Link>Home</Link></li>
    <li><Link>Instructors</Link></li>
    <li><Link>Classes</Link></li>
    <li><Link>Dashboard</Link></li>
    
    </>
    return (
       <div className="max-w-7xl mx-auto">
         <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img style={{height: '70px', width: '70px'}} src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn"><FaUserAlt></FaUserAlt></a>
                {/* <img style={{widows: '20px', height: '20px'}} src= alt="" /> */}
            </div>
        </div>
       </div>
    );
};

export default Navbar;