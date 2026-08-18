import api from "./api";


// Normal AI Chat

export const askAI = async(question)=>{

    const response = await api.post(

        "/ai",

        {
            question
        }

    );


    return response.data;

};





// AI Hint

export const getAIHint = async(problem, code)=>{


    const response = await api.post(

        "/ai/hint",

        {
            problem,
            code
        }

    );


    return response.data;

};





// AI Code Review

export const reviewCode = async(problem, code)=>{


    const response = await api.post(

        "/ai/review",

        {
            problem,
            code
        }

    );


    return response.data;

};