import api from "./api";



export const getPracticeData = async()=>{


    const response = await api.get(
        "/practice"
    );


    return response.data;


};