import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import MySliderBanner from "../components/Slider/MySliderBanner";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MySliderBanner></MySliderBanner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;