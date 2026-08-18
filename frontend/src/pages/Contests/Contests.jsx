import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getContests,
    joinContest
} from "../../services/contestService";

import "./Contests.css";


function Contests(){

    const [contests,setContests] = useState([]);

    const navigate = useNavigate();



    useEffect(()=>{

        loadContests();

    },[]);



    const loadContests = async()=>{

        try{

            const res = await getContests();

            console.log(
                "CONTEST RESPONSE:",
                res
            );


            setContests(
                res.contests || []
            );

        }

        catch(error){

            console.log(error);

        }

    };





    const handleJoin = async(id)=>{

        try{

            await joinContest(id);


            alert(
                "Contest joined successfully"
            );


            loadContests();


        }

        catch(error){

            alert(
                error.response?.data?.message ||
                "Cannot join contest"
            );

        }

    };





    return(

        <div className="contest-page">



            <div className="contest-header">

                <h1>
                    🏆 Contests
                </h1>


                <p>
                    Participate in contests and compete with other developers.
                </p>


            </div>





            <div className="contest-container">


            {
                contests.length === 0

                ?

                (

                    <h2>
                        No contests available
                    </h2>

                )


                :

                (

                    contests.map((contest)=>(


                        <div
                        className="contest-card"
                        key={contest._id}
                        >



                            <div className="contest-info">


                                <h2>
                                    {contest.title}
                                </h2>


                                <p>
                                    Duration: 
                                    {
                                        contest.duration || "N/A"
                                    }
                                </p>


                                <p>
                                    Participants:
                                    {
                                        contest.participants?.length || 0
                                    }
                                </p>


                            </div>






                            <div className="contest-action">


                                <span

                                className={
                                    contest.status === "Live"
                                    ?
                                    "live"
                                    :
                                    "upcoming"
                                }

                                >

                                    {contest.status}

                                </span>






                                {
                                    contest.status === "Completed"

                                    ?

                                    (

                                        <button

                                        onClick={()=>navigate(
                                            `/contests/${contest._id}`
                                        )}

                                        >

                                            View

                                        </button>

                                    )


                                    :


                                    contest.isRegistered

                                    ?

                                    (

                                        <button

                                        onClick={()=>navigate(
                                            `/contests/${contest._id}`
                                        )}

                                        >

                                            View

                                        </button>

                                    )


                                    :


                                    (

                                        <button

                                        onClick={()=>handleJoin(
                                            contest._id
                                        )}

                                        >

                                            {
                                                contest.status === "Live"
                                                ?
                                                "Join"
                                                :
                                                "Register"
                                            }

                                        </button>

                                    )

                                }




                            </div>




                        </div>


                    ))

                )

            }



            </div>


        </div>


    );


}


export default Contests;