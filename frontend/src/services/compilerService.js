import api from "./api";



// RUN CODE

export const runCode = async(data)=>{


    const response = await api.post(

        "/compiler/run",

        data

    );


    return response.data;


};





// SUBMIT CODE

export const submitCode = async(data)=>{


    const response = await api.post(

        "/compiler/submit",

        data

    );


    return response.data;


};