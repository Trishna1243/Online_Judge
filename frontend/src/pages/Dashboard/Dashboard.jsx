import { useEffect, useState } from "react";

import {
    CheckCircle,
    Code2,
    Target,
    Flame
} from "lucide-react";

import "./Dashboard.css";

import {
    getDashboard
} from "../../services/dashboardService";



function Dashboard(){


    const [data,setData] = useState(null);



    useEffect(()=>{


        getDashboard()

        .then((res)=>{

            setData(res.data);

        })

        .catch((err)=>{

            console.log(err);

        });



    },[]);





    if(!data){

        return (

            <div className="loading">

                Loading Dashboard...

            </div>

        );

    }






    return(


        <div className="dashboard-page">



            <div className="dashboard-header">


                <h1>

                    Dashboard

                </h1>


                <p>

                    Track your coding progress and improve your skills.

                </p>


            </div>







            <div className="stats-container">



                <div className="stat-card">


                    <div className="icon-box">

                        <CheckCircle/>

                    </div>


                    <div>

                        <span>
                            Problems Solved
                        </span>

                        <h2>
                            {data.solved || 0}
                        </h2>

                    </div>


                </div>







                <div className="stat-card">


                    <div className="icon-box">

                        <Code2/>

                    </div>


                    <div>

                        <span>
                            Submissions
                        </span>


                        <h2>
                            {data.submissions || 0}
                        </h2>


                    </div>


                </div>








                <div className="stat-card">


                    <div className="icon-box">

                        <Target/>

                    </div>



                    <div>

                        <span>
                            Accuracy
                        </span>


                        <h2>
                            {data.accuracy || 0}%
                        </h2>


                    </div>


                </div>








                <div className="stat-card">


                    <div className="icon-box">

                        <Flame/>

                    </div>



                    <div>

                        <span>
                            Current Streak
                        </span>


                        <h2>
                            {data.streak || 0} Days
                        </h2>


                    </div>


                </div>



            </div>









            <h2 className="section-title">

                Recent Submissions

            </h2>







            <div className="submission-container">


            {

                data.recentSubmissions.length === 0

                ?

                <p>
                    No submissions yet. Start solving problems!
                </p>


                :

                data.recentSubmissions.map((submission)=>(


                    <div

                    className="submission-card"

                    key={submission._id}

                    >



                        <div>


                            <h3>

                            {
                                submission.problem?.title ||
                                "Problem"
                            }

                            </h3>


                            <p>

                            {submission.language}

                            </p>


                        </div>





                        <span

                        className={

                            submission.verdict === "Accepted"

                            ?

                            "accepted"

                            :

                            "failed"

                        }

                        >

                            {submission.verdict}


                        </span>





                    </div>


                ))


            }


            </div>





        </div>


    );

}



export default Dashboard;