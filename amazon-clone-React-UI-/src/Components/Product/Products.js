import React from 'react'
import "./Products.css"
import { useStateValue } from '../StateProvider'

const Products = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()
    // console.log('this is basket', basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='products'>
            <div className="products__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__Rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Products