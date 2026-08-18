import "./BadgeProgress.css";


function BadgeProgress({progress}){


return(

<div className="badge-card">


<h2>
Badge Progress
</h2>


<p>
Problem Solver Badge
</p>



<div className="progress-bar">


<div
style={{
width:`${progress}%`
}}
>

</div>


</div>



<p>
{progress}% completed
</p>


</div>

);


}


export default BadgeProgress;