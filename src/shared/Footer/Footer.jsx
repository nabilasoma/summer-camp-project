

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <img src="" alt="Logo" className="w-24" />
                        <p className="mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lorem odio. Aliquam cursus ac lacus vel mattis.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <p className="text-gray-400">123 Street, City</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                        <p className="text-gray-400">Email: info@example.com</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Classes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Schedule</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; 2023 Yoga Institute. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;