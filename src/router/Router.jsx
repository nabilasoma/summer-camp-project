import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import PrivateRoute from '../router/PrivateRoute'
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import ManageClasses from "../pages/Dashboard/ManageClasse/ManageClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import MyEnrolled from "../pages/Dashboard/MyEnrolled/MyEnrolled";
import Payment from "../Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'instructor',
                element: <InstructorPage></InstructorPage>
            }, {
                path: 'classesPage',
                element: <ClassesPage></ClassesPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: 'myselectedclass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'myenrolled',
                element: <MyEnrolled></MyEnrolled>
            }, 
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            }
        ]
    }
   
])

export default router;