import { useEffect, useState } from "react";

import api from "../../../services/api";

import "./ContestManagement.css";



function ContestManagement(){


const [contests,setContests] = useState([]);

const [problems,setProblems] = useState([]);



const [contest,setContest] = useState({

    title:"",

    description:"",

    startTime:"",

    endTime:"",

    problems:[],

    minPoints:0,

    maxPoints:2000

});







useEffect(()=>{


fetchContests();

fetchProblems();


},[]);









const fetchContests = async()=>{


try{


const res = await api.get(

"/contests"

);



setContests(

res.data.contests

);



}

catch(error){

console.log(error);

}


};










const fetchProblems = async()=>{


try{


const res = await api.get(

"/problems"

);



setProblems(

res.data.problems

);



}

catch(error){

console.log(error);

}


};









const handleChange=(e)=>{


setContest({

...contest,

[e.target.name]:e.target.value

});


};









const selectProblem=(id)=>{


if(contest.problems.includes(id)){


setContest({

...contest,


problems:

contest.problems.filter(

(problemId)=>problemId!==id

)


});


}

else{


setContest({

...contest,


problems:[

...contest.problems,

id

]


});


}



};









const createContest=async()=>{


try{


await api.post(

"/contests",

{


title:contest.title,


description:contest.description,


startTime:contest.startTime,


endTime:contest.endTime,


problems:contest.problems,


eligibility:{


minPoints:Number(contest.minPoints),


maxPoints:Number(contest.maxPoints)


}



}

);




alert(

"Contest Created Successfully"

);



fetchContests();




setContest({

title:"",

description:"",

startTime:"",

endTime:"",

problems:[],

minPoints:0,

maxPoints:2000

});



}



catch(error){


alert(

error.response?.data?.message ||

"Failed to create contest"

);


}



};











return(


<div className="contest-management">



<h2>

Create Contest

</h2>







<input

name="title"

placeholder="Contest Title"

value={contest.title}

onChange={handleChange}

/>







<textarea

name="description"

placeholder="Contest Description"

value={contest.description}

onChange={handleChange}

/>







<label>

Start Time

</label>


<input

type="datetime-local"

name="startTime"

value={contest.startTime}

onChange={handleChange}

/>







<label>

End Time

</label>


<input

type="datetime-local"

name="endTime"

value={contest.endTime}

onChange={handleChange}

/>








<h3>

Select Problems

</h3>







{

problems.map(problem=>(


<div

key={problem._id}

>


<input

type="checkbox"

checked={

contest.problems.includes(problem._id)

}

onChange={()=>selectProblem(problem._id)}

/>


{problem.title}



</div>


))


}







<h3>

Eligibility

</h3>







<input

type="number"

name="minPoints"

placeholder="Minimum Points"

value={contest.minPoints}

onChange={handleChange}

/>







<input

type="number"

name="maxPoints"

placeholder="Maximum Points"

value={contest.maxPoints}

onChange={handleChange}

/>








<button

onClick={createContest}

>

Create Contest

</button>









<hr/>







<h2>

Existing Contests

</h2>







{

contests.map(contest=>(


<div

className="contest-row"

key={contest._id}

>


<span>

{contest.title}

</span>


<span>

{contest.status}

</span>


</div>


))


}







</div>


);


}


export default ContestManagement;