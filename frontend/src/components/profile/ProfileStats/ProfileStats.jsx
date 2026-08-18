import "./ProfileStats.css";


function ProfileStats(){


const stats=[

["Problems Solved","124"],

["Submissions","356"],

["Acceptance","72%"],

["Streak","15 Days"]

];


return(

<div className="stats-card">


<h2>
Statistics
</h2>


<div className="stats-grid">


{

stats.map((item,index)=>(

<div className="stat-box" key={index}>

<h3>
{item[1]}
</h3>

<p>
{item[0]}
</p>


</div>

))

}


</div>


</div>

);


}


export default ProfileStats;