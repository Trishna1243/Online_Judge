import "./RecommendedProblems.css";


const problems=[

"Valid Parentheses",

"Merge Intervals",

"Word Ladder",

"Maximum Subarray"

];


function RecommendedProblems(){

return(

<div className="recommended-card">


<h2>
Recommended Problems
</h2>


{

problems.map((item,index)=>(

<div className="recommended-item" key={index}>

<span>
{item}
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