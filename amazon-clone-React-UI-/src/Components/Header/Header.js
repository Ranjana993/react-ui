import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { signOut, getAuth } from 'firebase/auth';



const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()
const auth = getAuth()
    const handleSignInAuthentication = () => {
        if(user){
            signOut(auth)
        }
    }


    return (
        <div className="header">
            <Link to="/">
                <img className='header__logo' src="https://www.esyon.de/wp-content/uploads/2016/11/Amazon-Logo-wei%C3%9F.png" alt="" />
            </Link>

            <div className="header__Search">
                <input type="text"
                    className='Search__Input'
                />
                <SearchIcon className='Header__SearchIcon' />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleSignInAuthentication} className="header__Option">
                        <span className="headerOptionOne">Hello</span>
                        <span className="headerOptionTwo">{user ? "Sign Out " : "Sign In"}</span>
                    </div>
                </Link>

                <div className="header__Option">
                    <span className="headerOptionOne">Return</span>
                    <span className="headerOptionTwo">Orders</span>
                </div>
                <div className="header__Option">
                    <span className="headerOptionOne">Your</span>
                    <span className="headerOptionTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__OptionlineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header