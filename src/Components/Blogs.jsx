import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blogs = () => {

    const blogs = useLoaderData()


    return (
        <div>


            {
                blogs.map(blog => (<SingleBlog blog={blog} key={blog.id} />))
            }
        </div>
    );
};

export default Blogs;