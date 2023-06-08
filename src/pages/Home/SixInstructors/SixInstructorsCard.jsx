

const SixInstructorsCard = ({ instructor }) => {
    const {image, email, name}= instructor;
    console.log(instructor);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                    {/* <div className="badge badge-secondary"></div> */}
                </h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
        </div>
    );
};

export default SixInstructorsCard;