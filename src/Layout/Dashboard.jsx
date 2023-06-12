import { Link, Outlet } from "react-router-dom";
import { FaHome, FaSchool, FaUserFriends, FaUsers, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
               
            <ul className="menu p-4 w-80 h-full bg-purple-200 text-purple-800 font-bold">
                {isAdmin ? ( <>
                    <li><Link to='dashboard/studenthome' className="hover:bg-white"><FaHome></FaHome>Admin Home</Link></li>
                     <li><Link to='/dashboard/manageclasses' className="hover:bg-white"><FaSchool></FaSchool>Manage Classes</Link></li>
                     <li><Link to='/dashboard/allusers' className="hover:bg-white"><FaUsers></FaUsers>Manage Users</Link></li>
                
                </>
                     
                ) : (
                    isInstructor ? ( <>
                        <li><Link to='dashboard/Instructorhome' className="hover:bg-white"><FaHome></FaHome>Instructor Home</Link></li>
                        <li><Link to='/dashboard/addaclass' className="hover:bg-white"><FaSchool></FaSchool>Add A Class</Link></li>
                        <li><Link to='/dashboard/myclasses' className="hover:bg-white"><FaUsers></FaUsers>My Classes</Link></li>

                    </>
                        
                    ) : ( <>
                     <li><Link to='dashboard/studenthome' className="hover:bg-white"><FaHome></FaHome>Student Home</Link></li>
                        <li><Link to='/dashboard/myselectedclass' className="hover:bg-white"><FaSchool></FaSchool>My Selected Class</Link></li>
                        <li><Link to='/dashboard/myenrolled' className="hover:bg-white"><FaUsers></FaUsers>My Enrolled Class</Link></li>
                        <li><Link to='/dashboard/paymenthistory' className="hover:bg-white"><FaWallet></FaWallet>Payment History</Link></li>
                    
                    </>
                       
                    )
                )}
                 <div className="divider"></div>
                    <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
             </ul>
            </div>
        </div>
    );
};

export default Dashboard;





 {/* <ul className="menu p-4 w-80 h-full bg-purple-200 text-purple-800 font-bold">
                    {
                        isAdmin ? <>
                            <li><Link to='dashboard/studenthome' className="hover:bg-white"><FaHome></FaHome>Admin Home</Link></li>
                            <li><Link to='/dashboard/myselectedclass' className="hover:bg-white"><FaSchool></FaSchool>Manage Classes</Link></li>
                            <li><Link to='/dashboard/allusers' className="hover:bg-white"><FaUsers></FaUsers>Manage Users</Link></li>

                        </> : <>
                            <li><Link to='dashboard/studenthome' className="hover:bg-white"><FaHome></FaHome>Students Home</Link></li>
                            <li><Link to='/dashboard/myselectedclass' className="hover:bg-white"><FaUserFriends></FaUserFriends>My Selected Class</Link></li>
                            <li><Link to='/dashboard/enrolledclass' className="hover:bg-white"><FaWallet></FaWallet>My Enrolled Classes</Link></li>

                        </>
                    }


                    <div className="divider"></div>
                    <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
                </ul> */}