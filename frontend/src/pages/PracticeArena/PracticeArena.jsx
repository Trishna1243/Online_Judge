import { useEffect,useState } from "react";

import {
useNavigate
} from "react-router-dom";

import "./PracticeArena.css";

import {
getPracticeData
} from "../../services/problemService";



function PracticeArena(){


const [data,setData]=useState(null);


const navigate = useNavigate();




useEffect(()=>{


getPracticeData()

.then((res)=>{

    setData(res);

})

.catch((err)=>{

    console.log(err);

});


},[]);





if(!data){

return(

<h2>

Loading Practice Arena...

</h2>

);

}





return(


<div className="practice-page">





<div className="practice-header">


<h1>

🔥 Practice Arena

</h1>


<p>

Improve your skills with daily challenges and recommended problems.

</p>


</div>







<div className="practice-stats">



<div className="practice-card">


<span>

Current Streak

</span>


<h2>

🔥 {data.streak || 0} Days

</h2>


</div>







<div className="practice-card">


<span>

Daily Challenge

</span>


<h2

style={{cursor:"pointer"}}

onClick={()=>navigate(`/problem/${data.dailyChallenge._id}`)}

>

{data.dailyChallenge?.title || "No Challenge"}

</h2>


</div>



</div>








<h2 className="section-title">

Recommended Problems

</h2>








<div className="recommended-container">


{

data.recommendedProblems?.map((problem)=>(



<div

className="recommended-card"

key={problem._id}

onClick={()=>navigate(`/problem/${problem._id}`)}

style={{

cursor:"pointer"

}}

>



<div>


<h3>

{problem.title}

</h3>


<p>

{problem.tags?.join(", ") || "DSA"}

</p>


</div>



<span

className={
problem.difficulty.toLowerCase()
}

>

{problem.difficulty}

</span>



</div>



))

}



</div>





</div>


);


}



export default PracticeArena;