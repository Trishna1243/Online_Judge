import {
    createContext,
    useContext,
    useState
} from "react";


import {
    logoutUser
} from "../services/authService";



const AuthContext = createContext();



export function AuthProvider({children}){


    const [user,setUser] = useState(

        JSON.parse(

            localStorage.getItem("user")

        )

    );




    const login = (userData, token)=>{


        localStorage.setItem(

            "user",

            JSON.stringify(userData)

        );


        localStorage.setItem(

            "token",

            token

        );


        setUser(userData);


    };






    const logout = ()=>{


        logoutUser();


        setUser(null);


    };






    return(


        <AuthContext.Provider


            value={{

                user,

                setUser,

                login,

                logout

            }}


        >


            {children}


        </AuthContext.Provider>


    );


}




export const useAuth = ()=>useContext(AuthContext);