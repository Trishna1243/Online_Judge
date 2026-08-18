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

    setRuntime

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



    <select


        value={language}


        onChange={(e)=>
            setLanguage(e.target.value)
        }


    >


        <option value="cpp">
            C++17
        </option>


        <option value="python">
            Python
        </option>


        <option value="java">
            Java
        </option>


        <option value="javascript">
            JavaScript
        </option>


    </select>






    <div className="toolbar-actions">



        <button


            className="icon-btn"


            onClick={()=>
                window.location.reload()
            }


            title="Reset"


        >


            <RotateCcw size={15}/>


        </button>






        <button


            className="icon-btn"


            onClick={()=>
                navigator.clipboard.writeText(code)
            }


            title="Copy"


        >


            <Copy size={15}/>


        </button>



    </div>








    <div className="toolbar-right">



        <button


            className="run-btn"


            onClick={handleRun}


            disabled={loading}


        >


            <Play size={15}/>


            {

                loading

                ?

                "Running..."

                :

                "Run"

            }



        </button>








        <button


            className="submit-btn"


            onClick={handleSubmit}


            disabled={loading}


        >


            <Send size={15}/>


            Submit



        </button>




    </div>





</div>


);


}


export default EditorToolbar;