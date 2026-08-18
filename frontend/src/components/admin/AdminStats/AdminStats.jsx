import { useEffect, useState } from "react";

import api from "../../../services/api";

import "./AdminStats.css";


function AdminStats(){


const [stats,setStats] = useState({

    users:0,

    problems:0,

    submissions:0,

    contests:0

});



useEffect(()=>{


fetchStats();


},[]);





const fetchStats = async()=>{


try{


const response = await api.get(

"/admin/stats"

);



setStats(

response.data.stats

);



}

catch(error){


console.log(error);


}


};







return(


<div className="stats-container">


<div className="stat-card">

<h2>

{stats.users}

</h2>

<p>

Total Users

</p>

</div>





<div className="stat-card">

<h2>

{stats.problems}

</h2>

<p>

Problems

</p>

</div>





<div className="stat-card">

<h2>

{stats.submissions}

</h2>

<p>

Submissions

</p>

</div>





<div className="stat-card">

<h2>

{stats.contests}

</h2>

<p>

Contests

</p>

</div>





</div>


);


}


export default AdminStats;