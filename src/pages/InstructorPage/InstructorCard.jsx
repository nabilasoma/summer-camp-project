

const InstructorCard = ({ singleInstructor }) => {
    console.log(singleInstructor)
    const { name, image, email } = singleInstructor;
    return (
        <div className="card w-96 h-[200] bg-base-100 shadow-xl mt-20">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
            </div>
            <figure><img src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default InstructorCard;