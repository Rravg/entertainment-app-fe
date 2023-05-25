import React from "react";
import { useSessionStorage } from "usehooks-ts";

interface AuthContextType {
    user: any;
    login: (user: string, callback: VoidFunction) => void;
    logout: (callback: VoidFunction) => void;
}

// Creats Context
let AuthContext = React.createContext<AuthContextType>(null!);

// AuthContext Provider
export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [user, setUser] = useSessionStorage<any>("user", null);

    let login = (newUser: string, callback: VoidFunction) => {
        setUser(newUser);
        callback();
    };

    let logout = (callback: VoidFunction) => {
        setUser(null);
        callback();
    };

    let value = { user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Exports Auth hook to change AuthContext value
export function useAuth() {
    return React.useContext(AuthContext);
}
