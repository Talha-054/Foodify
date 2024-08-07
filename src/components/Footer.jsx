import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-white flex flex-col justify-center items-center" style={{ height: '50vh', backgroundImage: 'linear-gradient(to top, red , black 75%)' }}>
            <div className="text-center">
                
                <p className="text-lg mb-2">Foodify Inc</p>
                <p className="text-sm">All rights reserved &copy; {new Date().getFullYear()}</p>
            </div>
            <div className="flex space-x-4 mt-2">
                
                <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-gray-400" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
