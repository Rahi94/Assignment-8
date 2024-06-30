import React from 'react';

const SingleBlog = ({ blog }) => {
    const { bookName, image, author, review, rating, yearOfPublishing, category,tags } = blog;
    return (
        <div className='mb-12'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-start text-green-500 ">
                        <div className="badge badge-outline bg-slate-100 border-0 font-bold p-4">Fashion</div>
                        <div className="badge badge-outline bg-slate-100 border-0 font-bold p-4">Products</div>
                    </div>
                    <h2 className="card-title">
                        {bookName}

                    </h2>
                    <p>By: {author}</p>
                    <div className='flex justify-between'>
                        <p>{category}</p>
                        <div className='flex gap-3'>

                            <p>{rating}</p>
                            {/* rating */}
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SingleBlog;