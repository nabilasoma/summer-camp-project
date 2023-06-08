import About from "../../../components/About/About";
import Popular from "../../../components/Popular/Popular";
import Slider from "../../../components/Slider/Slider";
import SixInstructros from "../SixInstructors/SixInstructros";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Popular></Popular>
            <SixInstructros></SixInstructros>
            <About></About>
            
        </div>
    );
};

export default Home;