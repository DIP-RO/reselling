import React from 'react';

const SamsungCard = ({ samsung, setProduct }) => {
    const { _id, productName, img } = samsung;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    
                    {
                        samsung?.status === 'verified' && <h1>
                            verified
                        </h1>
                    }
                    
                    <p>{_id}</p>
                    <div className="card-actions justify-end">

                        <label onClick={() => setProduct(samsung)} htmlFor="Booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SamsungCard;