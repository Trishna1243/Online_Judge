import { useEffect, useState } from "react";

import {
    getLeaderboard
} from "../../services/leaderboardService";

import "./Leaderboard.css";



function Leaderboard(){


    const [users,setUsers] = useState([]);




    useEffect(()=>{


        getLeaderboard()

        .then((res)=>{


            console.log(res);


            setUsers(

                res.leaderboard || []

            );


        })


        .catch((err)=>{


            console.log(err);


        });



    },[]);







    return(


        <div className="leaderboard-page">



            <div className="leaderboard-header">


                <h1>

                    🏆 Leaderboard

                </h1>



                <p>

                    Compete with developers and track your coding progress.

                </p>


            </div>









            <div className="leaderboard-card">


                {

                    users.length === 0 ?


                    (

                        <p>

                            No users found

                        </p>


                    )


                    :


                    (

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
                                    Problems Solved
                                </th>


                                <th>
                                    Points
                                </th>


                            </tr>


                        </thead>







                        <tbody>


                        {

                            users.map((user,index)=>(


                                <tr key={user._id}>


                                    <td>


                                        {

                                            index === 0

                                            ?

                                            "🥇"

                                            :

                                            index === 1

                                            ?

                                            "🥈"

                                            :

                                            index === 2

                                            ?

                                            "🥉"

                                            :

                                            `#${index+1}`

                                        }


                                    </td>





                                    <td>


                                        <strong>

                                            {user.name}

                                        </strong>


                                    </td>







                                    <td>

                                        {user.solved || 0}

                                    </td>







                                    <td>


                                        ⭐ {user.points || 0}


                                    </td>





                                </tr>


                            ))

                        }


                        </tbody>



                    </table>


                    )

                }



            </div>




        </div>


    );

}



export default Leaderboard;