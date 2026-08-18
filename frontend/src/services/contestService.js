import api from "./api";



// GET ALL CONTESTS

export const getContests = async()=>{


    const response = await api.get(

        "/contests",

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};





// GET SINGLE CONTEST

export const getContestById = async(contestId)=>{


    const response = await api.get(

        `/contests/${contestId}`,

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};






// JOIN CONTEST

export const joinContest = async(contestId)=>{


    const response = await api.post(

        `/contests/${contestId}/join`,

        {},

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};






// CANCEL REGISTRATION

export const cancelContestRegistration = async(contestId)=>{


    const response = await api.delete(

        `/contests/${contestId}/cancel`,

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};







// CONTEST LEADERBOARD

export const getContestLeaderboard = async(contestId)=>{


    const response = await api.get(

        `/contests/${contestId}/leaderboard`,

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};






// CONTEST ARENA

export const getContestArena = async(contestId)=>{


    const response = await api.get(

        `/contests/${contestId}/arena`,

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};






// SUBMISSIONS

export const getContestSubmissions = async(contestId)=>{


    const response = await api.get(

        `/contests/${contestId}/submissions`,

        {
            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }
        }

    );


    return response.data;


};