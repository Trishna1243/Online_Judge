import axios from "axios";


const API_URL = "http://localhost:5000/api/auth";



// REGISTER USER
export const registerUser = async (userData)=>{


    const response = await axios.post(

        `${API_URL}/register`,

        userData

    );


    return response.data;

};




// LOGIN USER
export const loginUser = async (userData)=>{


    const response = await axios.post(

        `${API_URL}/login`,

        userData

    );


    return response.data;

};




// LOGOUT

export const logoutUser = ()=>{


    localStorage.removeItem("token");


    localStorage.removeItem("user");


};




// GET CURRENT USER

export const getCurrentUser = ()=>{


    return JSON.parse(

        localStorage.getItem("user")

    );


};