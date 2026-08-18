import "./RecommendedProblems.css";


function RecommendedProblems({problems}){


return(

<div className="recommended-card">


<h2>
Recommended Problems
</h2>



{

problems.length===0 ?

<p>
No recommendations available
</p>


:


problems.map((problem)=>(


<div 
className="recommended-item"
key={problem._id}
>


<span>
{problem.title}
</span>


<button>
Solve
</button>


</div>


))


}



</div>

);


}


export default RecommendedProblems;