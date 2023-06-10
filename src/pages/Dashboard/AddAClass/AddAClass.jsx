import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";


const AddAClass = () => {
    
    const {user} = useContext(AuthContext);
    

const handleAddClass = event => {
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const instructor = user?.displayName;
    const email = user?.email;
    const seats = form.seats.value;
    const price = form.price.value;
    const status = form.status.defaultValue;

// image upload
   const image = form.image.files[0];
   console.log(form.image.files);
   const formData = new FormData();
   formData.append('image', image)

   const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_key}`

   fetch(url, {
    method: "POST",
    body: formData,
   })
   .then(res => res.json())
   .then(imageData => {
    if(imageData.success){
        const imgUrl = imageData.data.display_url
        console.log(imgUrl)
        const order = {
            class_name: name,
            image: imgUrl,
            instructor,
            email,
            seats,
            price: parseFloat(price),
            status
        }
        
        fetch('http://localhost:4000/addaclasses', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Inserted Data',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    
    }
    
   });

   
};

    return (
        <div className="w-full">

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-purple-700">Add Class</h3>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddClass}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Class Name" className="input input-bordered border-purple-700" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="file" name="image" placeholder="image" className="input input-bordered border-purple-700 w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor</span>
                                </label>
                                <input type="text" name="instructor" defaultValue={user?.displayName} placeholder="Instructor Name" className="input input-bordered border-purple-700" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered border-purple-700" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="number" name="seats" placeholder="Available Seats" className="input input-bordered border-purple-700" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered border-purple-700" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <input type="text" name="status" defaultValue={'pending'} placeholder="Status" className="input input-bordered border-purple-700" />
                            </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-purple-400 text-purple-900 font-bold" type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAClass;