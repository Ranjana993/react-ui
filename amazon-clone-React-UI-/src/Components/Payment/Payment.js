import React from 'react'
import { Link } from 'react-router-dom'
import CheckOut from '../Checkout/CheckOut'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider'
import "./Payment.css"

const Payment = () => {
    const [{ user, basket }, dispatch] = useStateValue()
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout {<Link to="/checkout">{basket.length} Items </Link>}
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Details</h3>
                    </div>
                    <div className="payments__detail">
                        <p>{user.email}</p>
                        <p>12345 React Lane</p>
                        <p>Calfornia Los</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review  item and delivery </h3>
                    </div>
                    <div className="payment__items">
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
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Methods....</h3>
                    </div>
                    <div className="payment__detail">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment