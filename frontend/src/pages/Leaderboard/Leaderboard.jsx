import {useEffect,useState} from "react";

import {
getLeaderboard
} from "../../services/leaderboardService";


function Leaderboard(){


const [users,setUsers]=useState([]);



useEffect(()=>{


getLeaderboard()

.then(res=>{

setUsers(res.leaderboard);

});


},[]);





return(


<div>


<h1>
Leaderboard
</h1>



{

users.map((user,index)=>(


<div key={index}>


#{index+1} {user.name}

- Solved {user.solved}



</div>


))


}



</div>


);


}



export default Leaderboard;