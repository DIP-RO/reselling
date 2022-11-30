import React, { useEffect, useState } from 'react';
import BookingModal from '../Modal/BookingModal';
import VivoCard from './VivoCard';

const Samsung = () => {
    const [samsungs, setSamsung] = useState([]);

    const [product, setProduct] = useState([]);
//  console.log(product);
    useEffect(() => {
        fetch('http://localhost:5000/product/vivo')
            .then((response) => response.json())
            .then((data) => setSamsung(data));


    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                samsungs.map(samsung => <VivoCard


                    key={samsung._id}
                    samsung={samsung}
                    setProduct={setProduct}
                ></VivoCard>)



            }

           
                <BookingModal
            product={product}
            
            ></BookingModal>
            

        </div>
    );
};

export default Samsung;