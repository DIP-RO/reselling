import React from 'react';

const MyProductCard = ({ Product }) => {
    const {productName} = Product;

    const handleAddAdds = (Product) => {
        // console.log("riyadh");
        console.log(Product);
        fetch('http://localhost:5000/adds', {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(Product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleAddAdds(Product)}>Adds</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;