import "./DailyChallenge.css";


function DailyChallenge({problem}){


if(!problem){

return null;

}


return(

<div className="challenge-card">


<h2>
Today's Challenge
</h2>


<h1>
{problem.title}
</h1>


<p>
{problem.description}
</p>


<div className="challenge-details">


<span>
{problem.difficulty}
</span>


{

problem.tags?.map((tag)=>(

<span key={tag}>
{tag}
</span>

))

}


</div>


<button>
Solve Now →
</button>


</div>

);


}


export default DailyChallenge;