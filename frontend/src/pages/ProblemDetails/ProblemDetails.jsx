import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProblemDetails.css";

import { getProblemById } from "../../services/problemService";

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


    const [memory,setMemory] = useState("--");



    useEffect(()=>{

        getProblemById(id)
        .then((res)=>{

            setProblem(res.problem);

        })
        .catch((err)=>{

            console.log(err);

        });


    },[id]);



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



            </div>





            <div className="problem-right">



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

                    setMemory={setMemory}


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

                    memory={memory}


                />



            </div>


        </div>

    );

}


export default ProblemDetails;