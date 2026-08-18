import api from "./api";




// GET ALL PROBLEMS WITH SEARCH FILTER PAGINATION

export const getProblems = async(filters={})=>{


    const {

        page = 1,

        search = "",

        difficulty = "",

        tag = ""

    } = filters;





    const response = await api.get(

        "/problems",

        {

            params:{


                page,


                limit:10,


                search,


                difficulty,


                tag


            }


        }

    );





    console.log(

        "PROBLEM API RESPONSE:",

        response.data

    );





    return response.data;


};








// GET RANDOM PROBLEM

export const getRandomProblem = async()=>{


    const response = await api.get(

        "/problems/random"

    );





    return response.data;


};








// GET SINGLE PROBLEM

export const getProblemById = async(id)=>{


    const response = await api.get(

        `/problems/${id}`

    );





    return response.data;


};








// ADD FAVORITE

export const addFavoriteProblem = async(id)=>{


    const response = await api.post(

        `/problems/${id}/favorite`

    );





    return response.data;


};








// REMOVE FAVORITE

export const removeFavoriteProblem = async(id)=>{


    const response = await api.delete(

        `/problems/${id}/favorite`

    );





    return response.data;


};


export const getPracticeData = async()=>{


    const response = await api.get(

        "/problems/practice"

    );


    return response.data;


};