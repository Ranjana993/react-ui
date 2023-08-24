import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Sidebar from './SideBar/Sidebar';
import { login, logout, selectUser } from "./features/userSlice"
import Login from './Login/Login';
import { auth } from './firebase';
import Widget from './Widget/Widget';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl
          }));
      }
      else {
        dispatch(logout());
      }
    })
  }, []);


  return (
    <div className="App">
      <Header />
      {
        !user ? (
          <Login />
        ) : <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      }
    </div>
  );
}

export default App;
