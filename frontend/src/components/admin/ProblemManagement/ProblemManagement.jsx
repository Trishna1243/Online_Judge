import "./ProblemManagement.css";


const problems=[

"Two Sum",

"Binary Search",

"Graph DFS"

];


function ProblemManagement(){

return(

<div className="management-card">


<div className="card-header">

<h2>
Problems
</h2>


<button>
Add Problem
</button>


</div>



{

problems.map((problem,index)=>(


<div 
className="problem-row"
key={index}
>


<span>
{problem}
</span>


<div>

<button>
Edit
</button>


<button>
Delete
</button>


</div>


</div>


))

}


</div>

);

}


export default ProblemManagement;