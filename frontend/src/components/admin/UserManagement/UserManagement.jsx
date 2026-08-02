import "./UserManagement.css";


const users=[

{
name:"Arjun",
role:"User",
status:"Active"
},

{
name:"Priya",
role:"Admin",
status:"Active"
},

{
name:"Rahul",
role:"User",
status:"Blocked"
}

];


function UserManagement(){

return(

<div className="management-card">


<div className="card-header">

<h2>
Users
</h2>


<button>
Manage
</button>


</div>



{

users.map((user,index)=>(


<div 
className="user-row"
key={index}
>


<div>

<h3>
{user.name}
</h3>


<p>
{user.role}
</p>


</div>


<span>
{user.status}
</span>


</div>


))

}


</div>

);

}


export default UserManagement;