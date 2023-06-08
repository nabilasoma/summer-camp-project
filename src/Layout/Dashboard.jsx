import { Link, Outlet } from "react-router-dom";
import { FaHome, FaUserFriends, FaWallet} from 'react-icons/fa';


const Dashboard = () => {
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
                    {/* Sidebar content here */}
                    <li><Link to='dashboard/studenthome' className="hover:bg-white"><FaHome></FaHome>Students Home</Link></li>
                   <li><Link to='/dashboard/myselectedclass' className="hover:bg-white"><FaUserFriends></FaUserFriends>My Selected Class</Link></li>
                   <li><Link to='/dashboard/enrolledclass' className="hover:bg-white"><FaWallet></FaWallet>My Enrolled Classes</Link></li>
                   <div className="divider"></div>
                   <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
                   <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
                   <li><Link to='/' className="hover:bg-white"><FaHome></FaHome>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;