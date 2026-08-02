import "./RecommendationCard.css";

const problems = [

{
title:"Valid Parentheses",
difficulty:"Easy",
acceptance:"87% Acceptance"
},

{
title:"Merge Intervals",
difficulty:"Medium",
acceptance:"64% Acceptance"
},

{
title:"Word Ladder",
difficulty:"Hard",
acceptance:"42% Acceptance"
},

{
title:"Longest Palindrome",
difficulty:"Medium",
acceptance:"58% Acceptance"
}

];

function RecommendationCard(){

return(

<div className="recommend-card">

<div className="recommend-title">

<h2>

Recommended Problems

</h2>

<span className="view-link">

View All →

</span>

</div>

{

problems.map((problem,index)=>(

<div
className="problem-row"
key={index}
>

<div className="problem-info">

<h3>

{problem.title}

</h3>

<p>

{problem.acceptance}

</p>

</div>

<span
className={`diff ${problem.difficulty.toLowerCase()}`}
>

{problem.difficulty}

</span>

</div>

))

}

</div>

);

}

export default RecommendationCard;