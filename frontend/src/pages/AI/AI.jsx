import {useState} from "react";

import {
askAI
} from "../../services/aiService";



function AI(){


const [question,setQuestion]=useState("");

const [answer,setAnswer]=useState("");



const handleAsk=async()=>{


const result = await askAI(question);


setAnswer(result.answer);


};




return(

<div>


<h1>
AI Assistant
</h1>



<input

value={question}

onChange={(e)=>setQuestion(e.target.value)}

placeholder="Ask coding doubts"

/>



<button onClick={handleAsk}>

Ask

</button>



<p>

{answer}

</p>



</div>

);


}


export default AI;