import React from 'react'
import "./CheckOut.css"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider'
// import Subtotal from './Components/Subtotal/Subtotal'
import Subtotal from "../Subtotal/Subtotal"

const CheckOut = () => {
    const [{ basket , user }, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/MiniART-Jun/Women-Deals-Unrec-1500-Eng._CB636318050_.jpg" alt="" />
                <div className='checkout__title'>
                <h3> Hello {user.email}</h3>
                    <h2>
                        Your Shopping Basket
                    </h2>
                    {
                        basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                    {/* CheckOut Product */}
                </div>
            </div>
            <div className="checkout__right">
                {/* <Subtotal/> */}
                <Subtotal />
            </div>
        </div>
    )
}

export default CheckOut