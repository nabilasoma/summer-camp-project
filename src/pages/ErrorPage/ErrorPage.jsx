
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto text-center text-3xl text-blue-500 font-bold'>
            <h1>Oops!!!</h1>
            <p className='text-4xl text-yellow-400'>404</p>
            <img className='mx-auto mt-6' style={{width: '450px'}} src="https://i.ibb.co/WVthF6v/error.jpg" alt="Error" />
            <p className='mt-12'>
                We're sorry, Please check the URL<br />
                 or navigate back to <br /><Link to='/'><button className='mt-2 btn btn-warning'>Home</button></Link>
            </p>
        </div>
    );
};

export default ErrorPage;