import React from 'react';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Blogs from '../Components/Blogs';

const Home = () => {
    return (
        <div>
         
           
           <div className='w-3/4 mx-auto mt-16'>
           <Hero />
           </div>
           <div className='mt-20'>
            <h3 className='font-bold text-4xl text-center mb-12'>Books</h3>

            <Blogs />
           </div>
           
        </div>
    );
};

export default Home;