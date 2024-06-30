import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Blog = () => {
    const blog = useLoaderData();
   
   console.log(blog)
    
    
    return (
        <div>
            <h3 className='text-5xl text-green-800'>hi:{blog.author}</h3>
            <h3 className='text-5xl text-green-800'>hello from blog!</h3>
            <h3 className='text-5xl text-green-800'>hello from blog!</h3>
        </div>
    );
};

export default Blog;