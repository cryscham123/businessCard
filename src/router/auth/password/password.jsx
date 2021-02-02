import React, {useState} from 'react';
import { authService } from "../../../service/fbase";
import "./password.scss";

const Password = ({ resetRef }) => {
    // handle reset form state
    const [resetEmail, setResetEmail] = useState("");
    const resetOnChange = e => {
        const { target: { value } } = e;
        setResetEmail(value);
    }
    //cancle
    const cancle = () => {
        resetRef.current.style.opacity = "0";
        resetRef.current.style.zIndex = "-1";
        resetRef.current.style.transform = "translateY(-10px)";
    }
    //send reset mail
    const reset = async (e) => {
        e.preventDefault();
        try {
            const data = await authService.sendPasswordResetEmail(resetEmail);
            window.alert("Check out your email");
            resetRef.current.style.opacity = "0";
            resetRef.current.style.zIndex = "-1";
            resetRef.current.style.transform = "translateY(-10px)";
        } catch (error) {
            window.alert(error.message);
        }
    }
    return (
        <div className="password" ref={resetRef}>
            <div className="password__header">
                <span className="password__header__title">Reset Password</span>
                <button
                    className="password__header__cancle"
                    onClick={cancle}
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <form className="password__form" onSubmit={reset}>
                <div className="password__form__email">
                    <label htmlFor="resetemail" className="password__form__email__label">
                        <i className="fas fa-user"></i>
                    </label>
                    <input
                        className="password__form__email__input"
                        id="resetemail"
                        type="email"
                        value={resetEmail}
                        placeholder="type your email"
                        required
                        onChange={resetOnChange}
                    />
                </div>
                <input
                    type="submit"
                    value="reset"
                    className="password__form__reset"
                />
            </form>
        </div>
    );
};

export default Password;