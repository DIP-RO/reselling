import React from 'react';

const AddsCard = ({adds,setProduct}) => {
 const {mail,productName} = adds;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">{mail}</h2>
            <p>{productName}</p>
            <div className="card-actions justify-end">
                <button onClick={ () => setProduct(adds)} htmlFor="Booking-modal" className="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
    );
};

export default AddsCard;