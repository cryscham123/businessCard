import React from 'react';
import { authService } from '../../fbase';
import { useHistory } from "react-router-dom";
import "./profile.scss";

const Profile = ({ userobj }) => {
    const history = useHistory();
    const signout = async() => {
        await authService.signOut()
        history.push("/")
    }
    return (
        <div className="profile">
            <span>Hi,{userobj.displayName}</span>
            <button onClick={signout}>Sign out</button>
        </div>
    );
};

export default Profile;