import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blogs = () => {

    const blogs = useLoaderData()


    return (
        <div className="grid justify-center items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-8">


            {
                blogs.map(blog => (<SingleBlog blog={blog} key={blog.id} />))
            }
        </div>
    );
};

export default Blogs;