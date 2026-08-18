import { useEffect,useState } from "react";

import {
    useParams
} from "react-router-dom";

import {
    getContestLeaderboard
} from "../../services/contestService";

import "./ContestLeaderboard.css";



function ContestLeaderboard(){

    const {id}=useParams();


    const [leaderboard,setLeaderboard]=useState([]);

    const [loading,setLoading]=useState(true);



    useEffect(()=>{


        const fetchLeaderboard=async()=>{

            try{


                const res=await getContestLeaderboard(id);


                console.log(
                    "LEADERBOARD RESPONSE:",
                    res
                );


                setLeaderboard(
                    res.leaderboard || []
                );


            }


            catch(error){

                console.log(error);

            }


            finally{

                setLoading(false);

            }


        };


        fetchLeaderboard();


    },[id]);






    if(loading){

        return <h2>Loading Leaderboard...</h2>;

    }






    return(


        <div className="leaderboard-page">


            <div className="leaderboard-card">


                <h1>
                    🏆 Contest Leaderboard
                </h1>




                {
                    leaderboard.length===0

                    ?

                    <h3>
                        No participants yet
                    </h3>


                    :


                    <table>


                        <thead>

                            <tr>

                                <th>
                                    Rank
                                </th>

                                <th>
                                    User
                                </th>

                                <th>
                                    Solved
                                </th>

                                <th>
                                    Penalty
                                </th>

                            </tr>

                        </thead>





                        <tbody>


                        {
                            leaderboard.map(
                                (participant,index)=>(


                                    <tr key={index}>


                                        <td>
                                            {index+1}
                                        </td>




                                        <td>

                                            {
                                                participant.user?.name ||
                                                "Unknown User"
                                            }

                                        </td>





                                        <td>

                                            {
                                                participant.solvedProblems || 0
                                            }

                                        </td>





                                        <td>

                                            {
                                                participant.penalty || 0
                                            }

                                        </td>



                                    </tr>


                                )
                            )
                        }


                        </tbody>


                    </table>

                }



            </div>


        </div>


    );


}


export default ContestLeaderboard;