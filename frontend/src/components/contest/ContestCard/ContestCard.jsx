import { useNavigate } from "react-router-dom";

import "./ContestCard.css";



function ContestCard({

    id,

    title,

    date,

    duration,

    participants,

    status,

    isRegistered,

    onJoin,

    onCancel

}){


    const navigate = useNavigate();





    const openContest = ()=>{


        navigate(

            `/contests/${id}`

        );


    };







    return(


        <div

        className="contest-card"

        onClick={openContest}

        >



            <div className="contest-header">



                <h2>

                    {title}

                </h2>




                <span className="contest-status">

                    {status}

                </span>



            </div>







            <p>

                📅 {date}

            </p>



            <p>

                ⏱️ {duration}

            </p>



            <p>

                👥 {participants} Participants

            </p>







            {

                isRegistered

                ?

                <>


                    <button

                    className="contest-button"

                    onClick={(e)=>{


                        e.stopPropagation();


                    }}

                    >

                        Registered ✓

                    </button>






                    <button

                    className="contest-button cancel"

                    onClick={(e)=>{


                        e.stopPropagation();


                        onCancel();


                    }}

                    >

                        Cancel Registration

                    </button>


                </>


                :



                <button

                className="contest-button"

                onClick={(e)=>{


                    e.stopPropagation();


                    onJoin();


                }}

                >

                    Register Now

                </button>


            }





        </div>


    );


}



export default ContestCard;