import { useEffect, useState } from "react";

import {
    getPracticeData
} from "../../services/practiceService";


import DailyChallenge from "../../components/practice/DailyChallenge/DailyChallenge";
import RecommendedProblems from "../../components/practice/RecommendedProblems/RecommendedProblems";
import StreakCard from "../../components/practice/StreakCard/StreakCard";
import BadgeProgress from "../../components/practice/BadgeProgress/BadgeProgress";


import "./PracticeArena.css";


function PracticeArena(){


    const [data,setData] = useState(null);

    const [loading,setLoading] = useState(true);



    useEffect(()=>{


        const fetchData = async()=>{


            try{


                const response = await getPracticeData();

                setData(response.data);


            }
            catch(error){

                console.log(error);

            }
            finally{

                setLoading(false);

            }


        };


        fetchData();


    },[]);




    if(loading){

        return <div>Loading Practice Arena...</div>;

    }





    return(


        <div className="practice-page">


            <h1>
                Practice Arena
            </h1>


            <div className="practice-grid">


                <StreakCard

                    streak={data?.streak || 0}

                />



                <DailyChallenge

                    problem={data?.dailyChallenge}

                />



                <BadgeProgress

                    progress={data?.badgeProgress || 0}

                />


            </div>




            <RecommendedProblems

                problems={data?.recommendedProblems || []}

            />


        </div>


    );


}


export default PracticeArena;