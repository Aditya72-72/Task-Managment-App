import { Children, createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ( { children } ) => {
    const [ isLogged , setIsLogged ] = useState(false);

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext };  
