import { createContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const loginAction = (userData) => {
        setUser(userData)
    }

    const logoutAction = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loginAction, logoutAction }}>
            {children}
        </AuthContext.Provider>
    )

}