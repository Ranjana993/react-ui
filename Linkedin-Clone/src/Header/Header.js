import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
// import { Avatar } from '@material-ui/core';

function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption Icon={ChatIcon} title="Chat" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQGqjdgTMcI12g/profile-displayphoto-shrink_100_100/0/1624423195789?e=1632960000&v=beta&t=F1w6lekeZ0on7PkWuU-G2zEzIinXuPpwenDNB2dM6-g" title="Me" onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
