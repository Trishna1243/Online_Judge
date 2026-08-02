import { useEffect, useState } from "react";

import "./Dashboard.css";

import {
    CheckCircle,
    Code2,
    Target,
    TrendingUp
} from "lucide-react";


import {
    getDashboard
} from "../../services/dashboardService";



function Dashboard(){


const [data,setData]=useState(null);



useEffect(()=>{


    getDashboard()

    .then((res)=>{


        setData(res.data);


    })

    .catch((err)=>{


        console.log(err);


    });



},[]);





if(!data){

return (

<div className="dashboard-loading">

Loading Dashboard...

</div>

);

}





return(

<div className="dashboard-page">


<div className="dashboard-header">


<div>


<h1>
Dashboard
</h1>


<p>
Track your coding progress and improve your skills.
</p>


</div>


</div>





<div className="dashboard-cards">



<div className="dashboard-card">


<div className="card-icon">

<CheckCircle/>

</div>


<div>


<h3>
Problems Solved
</h3>


<h2>
{data.solved}
</h2>


</div>


</div>





<div className="dashboard-card">


<div className="card-icon">

<Code2/>

</div>


<div>


<h3>
Submissions
</h3>


<h2>
{data.submissions}
</h2>


</div>


</div>





<div className="dashboard-card">


<div className="card-icon">

<Target/>

</div>


<div>


<h3>
Accuracy
</h3>


<h2>
{data.accuracy}%
</h2>


</div>


</div>





<div className="dashboard-card">


<div className="card-icon">

<TrendingUp/>

</div>


<div>


<h3>
Current Streak
</h3>


<h2>
0 Days
</h2>


</div>


</div>



</div>







<div className="recent-section">


<h2>
Recent Submissions
</h2>




<div className="submission-list">


{

data.recentSubmissions.length===0

?

<div className="empty-state">

No submissions yet. Start solving problems!

</div>


:

data.recentSubmissions.map((submission)=>(


<div

className="submission-card"

key={submission._id}

>


<div>


<h3>

{

submission.problem?.title ||

"Problem"

}

</h3>


<p>

{submission.language}

</p>


</div>





<span

className={

submission.verdict==="Accepted"

?

"accepted"

:

"failed"

}

>

{submission.verdict}

</span>



</div>


))


}



</div>



</div>






</div>


);


}



export default Dashboard;