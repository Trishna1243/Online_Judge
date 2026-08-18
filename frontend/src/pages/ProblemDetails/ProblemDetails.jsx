import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProblemDetails.css";

import {
getProblemById
} from "../../services/problemService";

import {
getAIHint,
reviewCode
} from "../../services/aiService";

import CodeEditor from "../../components/problemDetails/CodeEditor/CodeEditor";

import EditorToolbar from "../../components/problemDetails/EditorToolbar/EditorToolbar";

import BottomPanel from "../../components/problemDetails/BottomPanel/BottomPanel";



function ProblemDetails(){


const { id } = useParams();



const [problem,setProblem] = useState(null);


const [language,setLanguage] = useState("cpp");


const [code,setCode] = useState("");


const [input,setInput] = useState("");


const [output,setOutput] = useState("");


const [loading,setLoading] = useState(false);


const [verdict,setVerdict] = useState("");


const [runtime,setRuntime] = useState("--");




// AI states

const [aiHint,setAIHint] = useState("");

const [aiReview,setAIReview] = useState("");

const [aiLoading,setAILoading] = useState(false);

const [showAIModal,setShowAIModal] = useState(false);

const [aiTitle,setAITitle] = useState("");







useEffect(()=>{


    getProblemById(id)

    .then((res)=>{


        setProblem(res.problem);


    })


    .catch((err)=>{


        console.log(err);


    });



},[id]);









const handleHint = async()=>{


    try{


        setAILoading(true);



        const result = await getAIHint(

            problem,

            code

        );



        setAIHint(result.hint);



        setAITitle(

            "💡 AI Hint"

        );



        setShowAIModal(true);



    }


    catch(error){


        console.log(error);


    }


    finally{


        setAILoading(false);


    }


};









const handleReview = async()=>{


    try{


        setAILoading(true);



        const result = await reviewCode(

            problem,

            code

        );



        setAIReview(result.review);



        setAITitle(

            "🤖 Code Review"

        );



        setShowAIModal(true);



    }


    catch(error){


        console.log(error);


    }


    finally{


        setAILoading(false);


    }


};









if(!problem){


    return(


        <div className="problem-loading">

            Loading Problem...

        </div>


    );


}









return(


<div className="problem-details-page">






<div className="problem-left">





<h1>

{problem.title}

</h1>








<div className="problem-meta">





<span className="difficulty easy">

{problem.difficulty}

</span>







{

problem.tags?.map((tag)=>(


<span

className="tag"

key={tag}

>

{tag}

</span>


))

}





</div>












<div className="description-card">



<h2>

Description

</h2>



<p>

{problem.description}

</p>



</div>









{/* SAMPLE TEST CASES */}



{

problem.sampleTestCases &&

problem.sampleTestCases.filter(

(test)=>test.isHidden === false

).length > 0 &&



<div className="description-card">



<h2>

Examples

</h2>







{

problem.sampleTestCases

.filter(

(test)=>test.isHidden === false

)

.map(

(test,index)=>(



<div

className="example-box"

key={index}

>



<h3>

Example {index+1}

</h3>






<p>

Input

</p>



<pre>

{test.input}

</pre>






<p>

Output

</p>



<pre>

{test.output}

</pre>







</div>



)

)



}





</div>



}









</div>













<div className="problem-right">







<div className="ai-buttons">





<button

onClick={handleHint}

>

💡 Get AI Hint

</button>







<button

onClick={handleReview}

>

🤖 Review Code

</button>





</div>









<EditorToolbar



language={language}

setLanguage={setLanguage}



code={code}

input={input}



problemId={id}



loading={loading}

setLoading={setLoading}



setOutput={setOutput}

setVerdict={setVerdict}

setRuntime={setRuntime}





/>









<CodeEditor



language={language}



code={code}



setCode={setCode}



/>









<BottomPanel



input={input}



setInput={setInput}



output={output}



verdict={verdict}



runtime={runtime}






/>







</div>













{

showAIModal &&



<div className="ai-overlay">





<div className="ai-modal">





<button

className="close-ai"

onClick={()=>setShowAIModal(false)}

>

✖

</button>






<h2>

{aiTitle}

</h2>







<div className="ai-content">


{

aiTitle.includes("Hint")

?

aiHint

:

aiReview


}


</div>







</div>





</div>



}







</div>


);



}



export default ProblemDetails;