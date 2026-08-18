import api from "./api";


// Get all community posts
export const getCommunityPosts = async()=>{

    const response = await api.get(
        "/community"
    );

    return response.data;

};



// Get single community post
export const getCommunityPost = async(id)=>{

    const response = await api.get(
        `/community/${id}`
    );

    return response.data;

};



// Alias (in case another file uses this name)
export const getCommunityPostById = async(id)=>{

    const response = await api.get(
        `/community/${id}`
    );

    return response.data;

};



// Get comments
export const getComments = async(id)=>{

    const response = await api.get(
        `/community/${id}/comments`
    );

    return response.data;

};



// Add comment
export const addComment = async(id,content)=>{

    const response = await api.post(
        `/community/${id}/comments`,
        {
            content
        }
    );

    return response.data;

};



// Vote post
export const votePost = async(id)=>{

    const response = await api.post(
        `/community/${id}/vote`
    );

    return response.data;

};