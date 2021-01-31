import React, {useState,useRef} from 'react';
import Maintitle from "../../../components/header/title/title";
import { authService } from "../../../fbase";
import Password from '../password/password';
import Provider from '../provider/provider';
import "./login.scss";

const Login = () => {
    // account state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isNewAccount, setIsNewAccount] = useState(false);
    const resetRef = useRef();
    const onChange = e => {
        const { target: { value, name } } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    // login handle
    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            let data
            if (isNewAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email,password
                )
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
    //toggle
    const toggle = () => setIsNewAccount(prev => !prev);
    //find password
    const displayReset = () => {
        resetRef.current.style.opacity = "1";
        resetRef.current.style.zIndex = "3";
        resetRef.current.style.transform = "translateY(10px)";
    }
    return (
        <>
        <div className="loginheader">
            <Maintitle />
        </div>
        <div className="login">
            <h1 className="login__title">Login</h1>
            <form className="login__form" onSubmit={onSubmit}>
                <div className="login__form__email">
                    <label htmlFor="email" className="login__form__email__label">
                        <i className="fas fa-user"></i>
                    </label>
                    <input
                        className="login__form__email__input"
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="email"
                        required
                        onChange={onChange}
                    />
                </div>
                <div className="login__form__password">
                    <label htmlFor="password" className="login__form__password__label">
                        <i className="fas fa-lock"></i>
                    </label>
                    <input
                        className="login__form__password__input"
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        required
                        onChange={onChange}
                    />
                </div>
                <input
                    className="login__form__submit"
                    id="submit"
                    type="submit"
                    value={isNewAccount ? "Create Account" : "Sign in"}
                />
            </form>
            <div className="login__btn">
                <button
                    className="login__btn__toggle"
                    onClick={toggle}
                >
                    {isNewAccount ? "...you have account?" : "...you have no account?"}
                </button>
                <button
                    className="login__btn__find"
                    onClick={displayReset}
                >
                    ...forgot password?
                </button>
            </div>
                <Password resetRef={resetRef} />
                <Provider />
            </div>
        </>
    );
};

export default Login;