

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const AboutUs = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <section className="bg-gray-100 py-12 mt-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Yoga Institute</h2>
//           <Slider {...sliderSettings}>
//             <div>
//               <p className="text-gray-600 leading-relaxed">
//                 We are a premier yoga institute dedicated to promoting health, wellness, and inner peace through the practice of yoga. Our experienced instructors and serene studio environment create the perfect atmosphere for you to embark on your yoga journey.
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-600 leading-relaxed">
//                 At our institute, we offer a wide range of yoga classes suitable for all levels, from beginners to advanced practitioners. Whether you're looking to improve flexibility, reduce stress, or enhance your overall well-being, we have a class tailored to meet your needs.
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-600 leading-relaxed">
//                 Our passionate instructors are highly trained and dedicated to helping you achieve your goals. They provide personalized guidance, ensuring proper alignment and technique in every pose. You'll feel supported and encouraged as you progress in your practice.
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-600 leading-relaxed">
//                 Join our yoga community today and experience the transformative power of yoga. Start your journey towards a healthier mind, body, and spirit with us.
//               </p>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold text-green-500 mb-4">Welcome to Our Spiritual Home</h2>
        <p className="text-center text-red-800 font-bold">
        At Spiritual Home, we believe that true wellness comes from nourishing not only the body but also the mind and soul. Our yoga institute is dedicated to guiding individuals on a transformative journey towards holistic well-being. With a serene and welcoming environment, experienced instructors, and a diverse range of classes, Spiritual Home is your ultimate destination to embark on a path of self-discovery and inner transformation.
        </p>
        <div className="max-w-3xl mx-auto text-center">
         
          <Slider {...sliderSettings}>
            <div>
              <img src= "https://i.ibb.co/GPGNMSB/slide2.png" alt="Yoga Studio" className="my-8 mx-auto rounded-md shadow-md" />
            </div>
            <div>
              <img src="https://i.ibb.co/XZ2whvD/slider1.png" alt="Yoga Class" className="my-8 mx-auto rounded-md shadow-md" />
            </div>
            <div>
              <img src="https://i.ibb.co/XfQmMkY/slide6.png" alt="Yoga Instructors" className="my-8 mx-auto rounded-md shadow-md" />
            </div>
            <div>
              <img src= "https://i.ibb.co/mGdVF45/slide4.png" alt="Yoga Studio" className="my-8 mx-auto rounded-md shadow-md" />
            </div>
            <div>
              <img src="https://i.ibb.co/cLW4kMT/slide5.png" alt="Yoga Class" className="my-8 mx-auto rounded-md shadow-md" />
            </div>
            <div>
              <img src="https://i.ibb.co/XfQmMkY/slide6.png" alt="Yoga Instructors" className="my-8 mx-auto rounded-md shadow-md" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
