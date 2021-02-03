import React,{memo, useRef,useState} from 'react';
import { Link } from 'react-router-dom';
import Maintitle from '../title/title';
import "./nav.scss";
import { authService } from '../../../service/fbase';
import { useHistory } from "react-router-dom";

const Nav = memo(({ userobj }) => {
    // sign out handle
    const history = useHistory();
    const signout = e => {
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
    // menu handle
    const [mchecked,setMChecked] = useState(false)
    const mmenuRef = useRef();
    const displayMMenu = () => {
        if (!mchecked) {
            mmenuRef.current.style.opacity = "1";
            mmenuRef.current.style.transform = "translateY(10%)";
            mmenuRef.current.style.zIndex = "3";
            setMChecked(prev => !prev);
        } else {
            mmenuRef.current.style.opacity = "0";
            mmenuRef.current.style.transform = "translateY(-150%)";
            mmenuRef.current.style.zIndex = "-1";
            setMChecked(prev => !prev);
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
            
                <button className="nav__user" onClick={displayMMenu}>
                    <img src={userobj.photoURL} alt={userobj.displayName} className="nav__user__profile" />
                    <i className="fas fa-caret-down nav__user__icon"></i>
                </button>
            
                <div className="nav__menu" ref={mmenuRef}>
                    <span className="nav__menu__profile">
                        <p className="nav__menu__profile__text">Signed in as</p>
                        <p className="nav__menu__profile__name">{userobj.displayName}</p>
                    </span>
                    <button onClick={signout} className="nav__menu__signout">Sign out</button>
                </div>
                <div className="nav__smallMenu" ref={menuRef}>
                    <button onClick={signout} className="nav__smallMenu__signout">Sign out</button>
                </div>
            </div>
    );
})

export default Nav;