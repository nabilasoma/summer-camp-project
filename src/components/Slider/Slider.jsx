import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel>
                 <div>
                    <img src="https://i.ibb.co/1rSTsfJ/banner00.png" 
                    
                    />
                    {/* <p className="legend">Legend 1</p> */}
                  
                 </div>  
                <div>
                    <img src="https://i.ibb.co/YQ4805Z/banner000.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://i.ibb.co/G20m4h8/banner0000.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
    );
};

export default Slider;
