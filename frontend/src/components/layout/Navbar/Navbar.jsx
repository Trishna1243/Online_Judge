import "./Navbar.css";

import {
Bell,
ChevronDown
} from "lucide-react";

import {
useAuth
} from "../../../context/AuthContext";



function Navbar(){


const {user}=useAuth();



return(

<header className="navbar">


<div className="search-container">


<input

placeholder="Search problems, contests, users..."

/>


</div>





<div className="navbar-right">


<button className="nav-icon">

<Bell size={20}/>

</button>




<div className="profile">


<div className="avatar">

{

user?.name

?

user.name[0].toUpperCase()

:

"T"

}

</div>



<div className="profile-info">


<h4>

{

user?.name || "User"

}

</h4>



</div>



<ChevronDown size={18}/>



</div>



</div>



</header>


);


}



export default Navbar;