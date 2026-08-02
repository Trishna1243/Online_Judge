import "./AdminStats.css";


function AdminStats(){


const stats=[

{
title:"Total Users",
value:"12,540"
},

{
title:"Problems",
value:"850"
},

{
title:"Submissions",
value:"1.2M"
},

{
title:"Contests",
value:"42"
}

];


return(

<div className="admin-stats">


{

stats.map((item,index)=>(


<div 
className="admin-stat-card"
key={index}
>


<h2>
{item.value}
</h2>


<p>
{item.title}
</p>


</div>


))

}


</div>

);

}


export default AdminStats;