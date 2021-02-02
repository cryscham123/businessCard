import { authService, firebaseInstance } from "./fbase";

class handleAuth{
    login(type, value) {
        if (type === "provider") {
            this.providerLogin(value);
        } else if (type === "emailCreate") {
            this.emailCreate(value);
        } else if (type === "emailLogin") {
            this.emailLogin(value);
        }
    }
    emailCreate = async (value) => {
        try {
            const data = await authService.createUserWithEmailAndPassword(value[0], value[1]);
            return data
        } catch (error) {
            window.alert(error.message);
        }

    }
    emailLogin = async (value) => {
        try {
            const data = await authService.signInWithEmailAndPassword(value[0], value[1]);
            return data
        } catch (error) {
            window.alert(error.message);
        }
    }
    providerLogin = async(value) => {
        const authProvider = new firebaseInstance.auth[`${value}AuthProvider`]();
        try {
            const data = await authService.signInWithPopup(authProvider);
            return data
        } catch (error) {
            window.alert(error.message);
        }
    }
}

export default handleAuth;