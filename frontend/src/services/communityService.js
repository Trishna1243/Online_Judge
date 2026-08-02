import api from "./api";


export const getCommunityPosts = async()=>{


    const response = await api.get(

        "/community"

    );


    return response.data;


};