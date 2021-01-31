import React,{useRef,useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import Maintitle from '../title/title';
import "./nav.scss";
import { authService } from '../../../fbase';
import { useHistory } from "react-router-dom";

const Nav = ({ userobj }) => {
    // sign out handle
    const history = useHistory();
    const signout = () => {
        authService.signOut()
        history.push("/")
    }
    // small media menu handle
    const [checked,setChecked] = useState(false)
    const menuRef = useRef();
    const displayMenu = () => {
        if (!checked) {
            menuRef.current.style.opacity = "1";
            menuRef.current.style.transform = "translateX(0)";
            menuRef.current.style.zIndex = "3";
            setChecked(prev => !prev);
        } else {
            menuRef.current.style.opacity = "0";
            menuRef.current.style.transform = "translateX(100%)";
            menuRef.current.style.zIndex = "-1";
            setChecked(prev => !prev);
        }
    }
    return (
            <div className="nav">
                <Link
                    to="/"
                    className="nav__home"
                >
                    <Maintitle/>
                </Link>
                <button className="nav__bars" onClick={displayMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <button className="nav__user">
                    <img src={userobj.photoURL} alt={userobj.displayName} className="nav__user__profile" />
                    <i className="fas fa-caret-down nav__user__icon"></i>
                </button>
                <div className="nav__menu" ref={menuRef}>
                    <span className="nav__menu__profile">
                        <p className="nav__menu__profile__text">Signed in as</p>
                        <p className="nav__menu__profile__name">{userobj.displayName}</p>
                    </span>
                    <NavLink
                        to="/profile"
                        activeStyle={{
                            color: "#38ada9"
                        }}
                        className="nav__menu__seeprofile"
                    >Your Profile</NavLink>
                    <button onClick={signout} className="nav__menu__signout">Sign out</button>
                </div>
            </div>
    );
};

export default Nav;