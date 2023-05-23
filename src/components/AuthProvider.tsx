import React from "react";
import { useSessionStorage } from "usehooks-ts";

interface AuthContextType {
    user: any;
    login: (user: string, callback: VoidFunction) => void;
    logout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [user, setUser] = useSessionStorage<any>("user", null);

    let login = (newUser: string, callback: VoidFunction) => {
        console.log("this has to execute or else setUser will never be invoked")
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

export function useAuth() {
    return React.useContext(AuthContext);
}
