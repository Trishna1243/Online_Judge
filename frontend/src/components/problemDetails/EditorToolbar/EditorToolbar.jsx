import "./EditorToolbar.css";

import {
    Play,
    Send,
    RotateCcw,
    Copy
} from "lucide-react";


import {
    runCode,
    submitCode
} from "../../../services/codeExecution";




function EditorToolbar({


    language,

    setLanguage,


    code,

    input,


    problemId,


    loading,

    setLoading,


    setOutput,

    setVerdict,

    setRuntime,

    setMemory


}) {



const handleRun = async()=>{


    try{


        setLoading(true);



        const result = await runCode({


            language,


            code: code.trim(),


            input: input || ""


        });




        console.log(
            "RUN RESULT:",
            result
        );



        setOutput(

            result.output || ""

        );



        setVerdict(

            "Executed"

        );



        setRuntime(

            result.executionTime || "--"

        );



        setMemory(

            result.memory || "--"

        );



    }


    catch(error){


        console.log(error);



        setOutput(
            "Execution Failed"
        );


        setVerdict(
            "Error"
        );


    }


    finally{


        setLoading(false);


    }



};







const handleSubmit = async()=>{


    try{


        setLoading(true);



        const result = await submitCode({


            problemId,


            language,


            code: code.trim()



        });




        console.log(
            "SUBMIT RESULT:",
            result
        );



        setVerdict(

            result.verdict || "Submitted"

        );



        setOutput(

            "Submission Completed"

        );



    }


    catch(error){


        console.log(error);



        setVerdict(
            "Submission Failed"
        );


    }


    finally{


        setLoading(false);


    }



};






return(


<div className="editor-toolbar">



<div className="toolbar-left">


<div className="language-select">


<select

value={language}

onChange={(e)=>
setLanguage(e.target.value)
}

>


<option value="cpp">
C++17
</option>


<option value="java">
Java
</option>


<option value="python">
Python
</option>


<option value="javascript">
JavaScript
</option>


</select>



</div>


</div>







<div className="toolbar-center">


<button
onClick={()=>
window.location.reload()
}
>


<RotateCcw size={17}/>

Reset


</button>





<button

onClick={()=>
navigator.clipboard.writeText(code)
}

>


<Copy size={17}/>

Copy


</button>



</div>








<div className="toolbar-right">



<button

className="run-btn"

onClick={handleRun}

disabled={loading}

>


<Play size={16}/>


{
loading
?
"Running..."
:
"Run Code"
}



</button>







<button

className="submit-btn"

onClick={handleSubmit}

disabled={loading}

>


<Send size={16}/>


Submit



</button>





</div>




</div>


);


}


export default EditorToolbar;