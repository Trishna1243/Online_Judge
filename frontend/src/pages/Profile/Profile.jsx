import { useEffect, useState } from "react";

import "./Profile.css";

import {
    getProfile
} from "../../services/profileService";



function Profile(){


    const [profile,setProfile] = useState(null);



    useEffect(()=>{


        const fetchProfile = async()=>{


            try{


                const res = await getProfile();



                console.log(
                    "PROFILE RESPONSE:",
                    res.data
                );



                setProfile(

                    res.data.user

                );



            }


            catch(error){


                console.log(
                    "PROFILE ERROR:",
                    error
                );


            }


        };



        fetchProfile();



    },[]);






    if(!profile){


        return(

            <div className="loading">

                Loading Profile...

            </div>

        );


    }







    return(


        <div className="profile-page">



            <div className="profile-header">


                <h1>

                    {profile.name}

                </h1>


                <p>

                    {profile.email}

                </p>


            </div>







            <div className="profile-stats">


                <div className="profile-card">

                    <span>
                        Points
                    </span>


                    <h2>

                        {profile.points || 0}

                    </h2>


                </div>





                <div className="profile-card">

                    <span>
                        Current Streak
                    </span>


                    <h2>

                        🔥 {profile.streak || 0}

                    </h2>


                </div>





                <div className="profile-card">

                    <span>
                        Problems Solved
                    </span>


                    <h2>

                        {profile.solvedProblems?.length || 0}

                    </h2>


                </div>





                <div className="profile-card">

                    <span>
                        Badges
                    </span>


                    <h2>

                        {profile.badges?.length || 0}

                    </h2>


                </div>



            </div>








            <h2 className="section-title">

                Difficulty Progress

            </h2>








            <div className="solved-section">



                <div className="solve-card">

                    <h3>
                        Easy
                    </h3>


                    <p>

                        {profile.easySolved || 0}

                    </p>


                </div>






                <div className="solve-card">

                    <h3>
                        Medium
                    </h3>


                    <p>

                        {profile.mediumSolved || 0}

                    </p>


                </div>






                <div className="solve-card">

                    <h3>
                        Hard
                    </h3>


                    <p>

                        {profile.hardSolved || 0}

                    </p>


                </div>



            </div>







            <div className="badges-section">


                <h2>
                    Badges
                </h2>



                <div className="badges-container">


                    {

                    profile.badges?.length > 0

                    ?

                    profile.badges.map((badge,index)=>(

                        <div
                            className="badge-card"
                            key={index}
                        >

                            🏆 {badge}

                        </div>


                    ))

                    :

                    <p>
                        No badges earned yet
                    </p>

                    }



                </div>



            </div>






        </div>


    );


}



export default Profile;