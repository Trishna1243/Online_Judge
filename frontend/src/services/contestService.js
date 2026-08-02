import api from "./api";


export const getContests=async()=>{


const response=await api.get(

"/contests"

);


return response.data;


};