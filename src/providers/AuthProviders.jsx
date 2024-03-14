import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useState } from "react";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const newUser = (name, email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        setUser,
        setLoading,
        newUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;