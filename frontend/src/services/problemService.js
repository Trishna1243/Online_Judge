import api from "./api";



// GET ALL PROBLEMS

export const getProblems = async()=>{


    const response = await api.get(
        "/problems"
    );


    console.log("PROBLEM API RESPONSE:", response.data);


    return response.data;

};




// GET SINGLE PROBLEM

export const getProblemById = async(id)=>{


    const response = await api.get(

        `/problems/${id}`

    );


    return response.data;


};