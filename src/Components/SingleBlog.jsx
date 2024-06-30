import React from 'react';

const SingleBlog = ({blog}) => {
    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <h2 className="card-title">
                       hello!

                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex justify-between'>
                        <p>Fiction</p>
                        <div className='flex gap-3'>
                            <p>5.00</p>
                            <p>rating</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default SingleBlog;