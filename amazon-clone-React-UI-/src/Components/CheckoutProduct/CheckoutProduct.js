import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../StateProvider'




const CheckoutProduct = ({ image, title, id, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()
    
    const removefromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkout__product_img' src={image} alt="" />

            <div className="checkout__product__info">
                <p className='checkout__product__title'>{title}</p>
                <p className='checkout__product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout__product__rating'>
                    {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removefromBasket}>remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct