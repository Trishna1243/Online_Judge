import api from "./api";


export const askAI = async(question)=>{


    const response = await api.post(

        "/ai",

        {
            question
        }

    );


    return response.data;


};