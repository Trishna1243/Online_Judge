import { useEffect, useState } from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";


import {
    getContestById,
    cancelContestRegistration
} from "../../services/contestService";


import "./ContestDetails.css";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";


function ContestDetails(){


    const {id} = useParams();


    const navigate = useNavigate();



    const [contest,setContest] = useState(null);


    const [loading,setLoading] = useState(true);






    useEffect(()=>{


        const fetchContest = async()=>{


            try{


                const res = await getContestById(id);


                setContest(

                    res.contest

                );


            }


            catch(error){


                console.log(error);


            }


            finally{


                setLoading(false);


            }


        };



        fetchContest();



    },[id]);









    const cancelRegistration = async()=>{


        try{


            await cancelContestRegistration(id);


            const res = await getContestById(id);


            setContest(

                res.contest

            );


        }


        catch(error){


            alert(

                error.response?.data?.message ||

                "Unable to cancel registration"

            );


        }


    };








    if(loading){


        return <h2>Loading...</h2>;


    }






    if(!contest){


        return <h2>Contest Not Found</h2>;


    }






    const enterContest = ()=>{


        navigate(

            `/contests/${id}/arena`

        );


    };







    return(


        <div className="contest-details-page">



            <div className="contest-details-card">





                <h1>

                    {contest.title}

                </h1>






                <span className="status">

    {contest.status}

</span>


<CountdownTimer

    startTime={contest.startTime}

    endTime={contest.endTime}

/>







                <p>

                    {contest.description}

                </p>








                <div className="info">


                    <p>

                    📅 Start:

                    <br/>

                    {

                    new Date(

                        contest.startTime

                    ).toLocaleString()

                    }

                    </p>





                    <p>

                    ⏰ End:

                    <br/>

                    {

                    new Date(

                        contest.endTime

                    ).toLocaleString()

                    }

                    </p>





                    <p>

                    👥 Participants:

                    {

                    contest.participants.length

                    }

                    </p>



                </div>









                {

                contest.isRegistered &&


                <div className="registered-box">


                    <h3>

                        You are registered ✓

                    </h3>


                </div>


                }









                {

                contest.status === "Upcoming" &&


                <div className="upcoming">


                    <h3>

                        Contest starts soon

                    </h3>


                    <p>

                        Problems will be available when the contest begins.

                    </p>


                </div>


                }









                <div className="contest-actions">





                    {

                    contest.status === "Live"

                    &&

                    contest.isRegistered

                    &&


                    <button

                    className="enter-button"

                    onClick={enterContest}

                    >

                        Enter Contest

                    </button>


                    }







                    <button

                    className="leaderboard-button"

                    onClick={()=>


                        navigate(

                            `/contests/${id}/leaderboard`

                        )


                    }

                    >

                        Leaderboard

                    </button>







                    {

                    contest.status === "Upcoming"

                    &&

                    contest.isRegistered

                    &&


                    <button

                    className="cancel-button"

                    onClick={cancelRegistration}

                    >

                        Cancel Registration

                    </button>


                    }



                </div>








            </div>


        </div>


    );


}



export default ContestDetails;