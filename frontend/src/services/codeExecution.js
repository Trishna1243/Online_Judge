import axios from "axios";


const API_URL =
    `${import.meta.env.VITE_API_URL}/compiler`;



export const runCode = async(data)=>{


    console.log(
        "RUN API DATA:",
        data
    );


    const response = await axios.post(

        `${API_URL}/run`,

        data

    );


    return response.data;

};





export const submitCode = async(data)=>{


    const token =
        localStorage.getItem("token");


    const response = await axios.post(

        `${API_URL}/submit`,

        data,

        {

            headers:{

                Authorization:
                    `Bearer ${token}`

            }

        }

    );


    return response.data;

};