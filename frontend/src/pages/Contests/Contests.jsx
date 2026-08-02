import {useEffect,useState} from "react";

import {
getContests
} from "../../services/contestService";



function Contests(){


const [contests,setContests]=useState([]);



useEffect(()=>{


getContests()

.then(res=>{

setContests(res.contests);

});


},[]);




return(


<div>


<h1>
Contests
</h1>


{

contests.map((contest,index)=>(


<div key={index}>


{contest.title}

<br/>

{contest.status}


</div>


))


}



</div>


);


}


export default Contests;