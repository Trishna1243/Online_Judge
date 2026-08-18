import { NavLink } from "react-router-dom";

import "./Sidebar.css";



function Sidebar(){


    const user = JSON.parse(

        localStorage.getItem("user")

    );



    return(


        <div className="sidebar">






            <div className="sidebar-logo">


                <div className="logo-box">


                    &lt;/&gt;


                </div>



                <div>


                    <h2>

                        CodeArena

                    </h2>


                    <p>

                        Developer Platform

                    </p>


                </div>



            </div>









            <div className="sidebar-group">


                <span className="sidebar-title">

                    MAIN

                </span>






                <NavLink

                to="/dashboard"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Dashboard

                </NavLink>







                <NavLink

                to="/problems"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Problems

                </NavLink>







                <NavLink

                to="/practice"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Practice Arena

                </NavLink>







                <NavLink

                to="/contests"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Contests

                </NavLink>







                <NavLink

                to="/leaderboard"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Leaderboard

                </NavLink>








                <NavLink

                to="/community"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Community

                </NavLink>





            </div>












            <div className="sidebar-group">


                <span className="sidebar-title">

                    TOOLS

                </span>







                <NavLink

                to="/ai"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    AI Assistant

                </NavLink>








                <NavLink

                to="/profile"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Profile

                </NavLink>









                {


                    user?.role === "admin"

                    &&


                    <NavLink

                    to="/admin"

                    className={({isActive})=>

                        isActive

                        ?

                        "sidebar-item active"

                        :

                        "sidebar-item"

                    }

                    >

                        Admin

                    </NavLink>


                }






            </div>









            <div className="sidebar-footer">





                <NavLink

                to="/settings"

                className={({isActive})=>

                    isActive

                    ?

                    "sidebar-item active"

                    :

                    "sidebar-item"

                }

                >

                    Settings

                </NavLink>







                <NavLink

                to="/login"

                className="sidebar-item"

                >

                    Logout

                </NavLink>







            </div>







        </div>



    );


}



export default Sidebar;