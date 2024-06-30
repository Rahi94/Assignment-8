import React from 'react';
import { json } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/hfNSD3B/download-56.jpg"
                    className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold mb-8">Books to Freshen up your bookshelf!</h1>
                   
                    <Link to='/listedbooks' className="btn border-0 text-white btn-primary bg-green-500">View the list</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;