import { useEffect,useState } from "react";

import api from "../../../services/api";

import "./UserManagement.css";



function UserManagement(){


const [users,setUsers]=useState([]);




useEffect(()=>{


fetchUsers();


},[]);







const fetchUsers=async()=>{


try{


const response = await api.get(

"/admin/users"

);



setUsers(

response.data.users

);



}

catch(error){


console.log(error);


}


};









const suspendUser=async(id)=>{


try{


await api.put(

`/admin/users/${id}/suspend`

);



fetchUsers();


}

catch(error){


console.log(error);


}


};










const removeUser=async(id)=>{


try{


await api.delete(

`/admin/users/${id}`

);



fetchUsers();


}

catch(error){


console.log(error);


}


};











return(


<div className="management-card">


<div className="card-header">


<h2>

Users

</h2>


</div>







{

users.map(user=>(


<div

className="user-row"

key={user._id}

>



<div>


<h4>

{user.name}

</h4>


<p>

{user.email}

</p>


<p>

Role: {user.role}

</p>


<p>

Status:

{" "}

{

user.isBlocked

?

"Blocked"

:

"Active"

}

</p>


</div>







<div>


<button

onClick={()=>suspendUser(user._id)}

>

Suspend

</button>




<button

onClick={()=>removeUser(user._id)}

>

Delete

</button>



</div>






</div>


))


}





</div>


);


}


export default UserManagement;