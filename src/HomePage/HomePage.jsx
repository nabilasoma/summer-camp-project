import { useState } from "react";
import AboutUs from "../components/About/About";
import Popular from "../components/Popular/Popular";
import Slider from "../components/Slider/Slider";
import SixInstructros from "../pages/Home/SixInstructors/SixInstructros";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";


const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        setIsDarkMode(!isDarkMode);
      };

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
                <Popular></Popular>
                <SixInstructros></SixInstructros>
                <AboutUs></AboutUs>
                <Footer></Footer>
                <div className="text-center mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleModeToggle}
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;