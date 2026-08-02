import {useEffect,useState} from "react";

import "./Profile.css";

import {
getProfile
} from "../../services/userService";



function Profile(){


const [user,setUser]=useState(null);



useEffect(()=>{


getProfile()

.then(res=>{

setUser(res.user);

})


.catch(console.log);



},[]);





if(!user)

return <h2>Loading...</h2>;




return(


<div className="profile-page">


<h1>
Profile
</h1>


<div className="profile-card">


<h2>
{user.name}
</h2>


<p>
{user.email}
</p>


<p>
Role : {user.role}
</p>



</div>


</div>


);


}


export default Profile;