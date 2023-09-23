import 'react-slideshow-image/dist/styles.css';
import { Slide, Fade, Zoom } from 'react-slideshow-image';




const sliderImage = [
    {
        url: "https://i.ibb.co/1rSTsfJ/banner00.png",
    },
    {
        url: "https://i.ibb.co/YQ4805Z/banner000.png",
    },
    {
        url: "https://i.ibb.co/G20m4h8/banner0000.png",
    }
];

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "800px",
    backgroundSize: "cover"

};

const spanStyle = {
    fontSize: "20px",
    color: "#000000",
    background: "#efefef"
}

const MySliderBanner = () => {
    return (
        <div className="slide-container mb-16">
            <Slide>
                {
                    sliderImage.map((image, index) => (
                        <div key={index}>
                            <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                            <span className=''>{image.caption}</span>
                            </div>
                        </div>
                    ))
                }
            </Slide>
        </div>
    );
};

export default MySliderBanner;