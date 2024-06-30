import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blog = useLoaderData();
    return (
        <div>
            <h3 className='text-5xl text-green-800'>{blog.category}</h3>
            <h3 className='text-5xl text-green-800'>hello from blog!</h3>
        </div>
    );
};

export default Blog;