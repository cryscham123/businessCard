import React from 'react';
import "./provider.scss";
import { firebaseInstance,authService } from "../../../fbase";

const Provider = () => {
    const googleLogin = async () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        try {
            const result = await authService.signInWithPopup(provider)
        } catch (error) {
            console.log(error.message);
        }
    }
    const githubLogin = async () => {
        const provider = new firebaseInstance.auth.GithubAuthProvider();
        try {
            const result = await authService.signInWithPopup(provider)
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="provider">
            <button
                className="provider__google"
                onClick={googleLogin}
            >
                <i className="fab fa-google"></i>
            </button>
            <button
                className="provider__github"
                onClick={githubLogin}
            >
                <i className="fab fa-github"></i>
            </button>
        </div>
    );
};

export default Provider;