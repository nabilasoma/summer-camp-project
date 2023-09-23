import imagesOne from '../../../public/images/imageOne.png';
import imageTwo from '../../../public/images/imageTwo.png';
import imageThree from '../../../public/images/imageThree.png'
import imageFour from '../../../public/images/imageFour.png';
import imageFive from '../../../public/images/imageFive.png';
import imageSix from '../../../public/images/imageSix.png';


const OurInstitute = () => {
    return (
       <div className='mt-12 mb-8'>
          <h3 className='text-3xl font-bold text-gray-800 text-center mb-8'>More Instructors</h3>
         <div>
          
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
            <div className="card w-96 glass">
        <figure><img src={imagesOne} alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">Jhon hack</h2>
        <p>Lead group yoga sessions, tailored to various skill levels and styles, including Hatha, Vinyasa, or Ashtanga.</p>
        <div className="card-actions">
        <button className="px-6 bg-slate-600 text-white text-center">Read More</button>
        </div>
        </div>
        </div>

        <div className="card w-96 glass">
        <figure><img src={imageTwo} alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">Paulo Koelho</h2>
        <p>Instruct students in proper yoga techniques, asanas (postures), and breathing exercises. Demonstrate poses and assist with adjustments as needed.</p>
        <div className="card-actions">
        <button className="px-6 bg-slate-600 text-white text-center">Read More</button>
        </div>
        </div>
        </div>

        <div className="card w-96 glass">
        <figure><img className='object-fill' src={imageThree} alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">Narangi Naif</h2>
        <p>Ensure students' safety by maintaining proper alignment and providing modifications for individuals with different abilities or limitations.</p>
        <div className="card-actions">
        <button className="px-6 bg-slate-600 text-white text-center">Read More</button>
        </div>
        </div>
        </div>

        </div>

        <div className='mt-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container'>
        <div className="card w-96 glass">
        <figure><img className='object-fill' src={imageFour} alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">Hiala Hoaf</h2>
        <p>Foster a welcoming and inclusive class atmosphere, promoting a sense of community and tranquility.</p>
        <div className="card-actions">
        <button className="px-6 bg-slate-600 text-white text-center">Read More</button>
        </div>
        </div>
        </div>

        <div className="card w-96 glass">
        <figure><img className='object-fill' src={imageFive} alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">Jarudri Modi</h2>
        <p>Offer personalized guidance, meditation, and breathing exercises to address students' specific needs and goals.</p>
        <div className="card-actions">
        <button className="px-6 bg-slate-600 text-white text-center">Read More</button>
        </div>
        </div>
        </div>

        <div className="card w-96 glass">
        <figure><img className='object-fill' src={imageSix} alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">Angkara lauf</h2>
        <p>Share insights into yoga philosophy, anatomy, and holistic well-being to deepen students' understanding.</p>
        <div className="card-actions">
        <button className="px-6 bg-slate-600 text-white text-center">Read More</button>
        </div>
        </div>
        </div>
        </div>
        </div>
       </div>
    );
};

export default OurInstitute;