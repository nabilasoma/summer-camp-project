import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://i.ibb.co/yqLDyLg/slider3.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://i.ibb.co/8cRzGtr/slider1.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://i.ibb.co/pvLT1fF/slide2.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
    );
};

export default Slider;