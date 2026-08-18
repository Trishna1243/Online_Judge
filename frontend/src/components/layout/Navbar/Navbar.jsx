import "./Navbar.css";

import { useAuth } from "../../../context/AuthContext";


function Navbar(){

    const { user } = useAuth();



    return(

        <nav className="navbar">



            <input

                className="search-bar"

                placeholder="Search problems, contests, users..."

            />





            <div className="navbar-user">



                <div className="user-avatar">

                    {
                        user?.name
                        ?
                        user.name.charAt(0).toUpperCase()
                        :
                        "U"
                    }

                </div>





                <span>

                    {
                        user?.name ||
                        "User"
                    }

                </span>



            </div>




        </nav>


    );

}


export default Navbar;