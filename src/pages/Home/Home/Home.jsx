import About from "../../../components/About/About";
import OurInstitute from "../../../components/Popular/OurInstitute";
import Popular from "../../../components/Popular/Popular";
import SixInstructros from "../SixInstructors/SixInstructros";


const Home = () => {
    return (
        <div>
            <Popular></Popular>
            <SixInstructros></SixInstructros>
            <About></About>
            <OurInstitute></OurInstitute>
        </div>
    );
};

export default Home;