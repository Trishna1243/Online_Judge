import { useEffect,useState } from "react";

import api from "../../../services/api";

import CreateProblem from "./CreateProblem";

import "./ProblemManagement.css";



function ProblemManagement(){


const [problems,setProblems]=useState([]);





useEffect(()=>{


fetchProblems();


},[]);








const fetchProblems=async()=>{


try{


const res=await api.get(

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








const deleteProblem=async(id)=>{


try{


await api.delete(

`/problems/${id}`

);



setProblems(

problems.filter(

problem=>problem._id!==id

)

);



}

catch(error){


console.log(error);


}


};









return(


<div className="management-card">





<h2>

Problems

</h2>






<CreateProblem/>






<h2>

Existing Problems

</h2>







{

problems.map(problem=>(


<div

className="problem-row"

key={problem._id}

>


<span>

{problem.title}

</span>





<button

onClick={()=>deleteProblem(problem._id)}

>

Delete

</button>




</div>


))


}





</div>


);


}


export default ProblemManagement;