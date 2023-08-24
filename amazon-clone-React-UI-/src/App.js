import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CheckOut from './Components/Checkout/CheckOut';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './Components/StateProvider';
import Footer from './Components/Footer/Footer';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51L95AUSDT0f8yzZMy3Bp1P7G7o7X2LD6ONYN3MmC6BbOQwWUeJyGLRX3RJf5u8SMgbwNFhTZkQhhTqjXmz6W4exi00XF7wC0Fs')

const App = () => {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    onAuthStateChanged(auth, (AuthUser) => {
      console.log(" the User is here 😋", AuthUser);
      if (AuthUser) {
        // 
        dispatch({
          type: "SET_USER",
          user: AuthUser
        })
      } else {
        // 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

  }, [])
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/checkout' element={<CheckOut />} />
            <Route exact path='/payment' element={<Elements stripe={promise}><Payment /></Elements>} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </>


  );
}

export default App;
