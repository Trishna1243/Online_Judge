import "./ContestCard.css";


function ContestCard({
title,
date,
duration,
participants,
completed
}){


return(

<div className="contest-card">


<div className="contest-top">


<h3>
{title}
</h3>


<span className={completed ? "completed":"upcoming"}>

{
completed
?
"Completed"
:
"Upcoming"
}

</span>


</div>



<div className="contest-info">

<p>
📅 {date}
</p>


<p>
⏱ {duration}
</p>


<p>
👥 {participants} Participants
</p>


</div>



<button>

{
completed
?
"View Results"
:
"Register Now"
}

</button>


</div>

);

}


export default ContestCard;