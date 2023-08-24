import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';
import { useNavigate } from 'react-router-dom';



const Subtotal = () => {
    const history = useNavigate()
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='subtitles'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>${value}3</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order Contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
            />
            <button onClick={(e)=> history('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal