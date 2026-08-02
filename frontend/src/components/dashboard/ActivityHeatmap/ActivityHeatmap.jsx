import "./ActivityHeatmap.css";

function ActivityHeatmap(){

const cells = [
0,1,2,0,3,2,1,0,2,3,1,2,0,1,
1,2,3,2,1,0,2,3,1,0,2,1,3,2,
0,1,2,3,2,1,0,2,1,3,2,0,1,2,
2,3,1,0,2,1,3,2,1,0,2,3,1,2,
0,1,2,3,1,2,0,1,2,3,2,1,0,2,
1,3,2,0,1,2,3,1,2,0,1,3,2,1,
0,2,1,3,2,1,0,2,3,1,2,0,1,2
];


return(

<div className="heatmap-card">

<h2>
Coding Activity
</h2>


<div className="heatmap-grid">

{
cells.map((item,index)=>(

<div

key={index}

className={`cell level${item}`}

/>

))

}

</div>


<div className="legend">

<span>
Less
</span>


<div className="legend-box level0"></div>

<div className="legend-box level1"></div>

<div className="legend-box level2"></div>

<div className="legend-box level3"></div>


<span>
More
</span>

</div>


</div>

);

}

export default ActivityHeatmap;