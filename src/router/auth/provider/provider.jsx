import React from 'react';
import "./provider.scss";

const Provider = ({ onAuth }) => {
    const authLogin = e => {
        let { target: { name } } = e;
        onAuth.login("provider", name);
    }
    return (
        <div className="provider">
            <button
                className="provider__google"
                name="Google"
                onClick={authLogin}
            >
                <i className="fab fa-google provider__google__icon"></i>
            </button>
            <button
                className="provider__github"
                name="Github"
                onClick={authLogin}
            >
                <i className="fab fa-github provider__github__icon"></i>
            </button>
        </div>
    );
};

export default Provider;