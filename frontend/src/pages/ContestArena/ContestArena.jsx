import { useEffect, useState } from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";


import {
    getContestArena,
    getContestSubmissions
} from "../../services/contestService";


import {
    runCode,
    submitCode
} from "../../services/compilerService";


import "./ContestArena.css";


import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";





function ContestArena(){


    const {id} = useParams();


    const navigate = useNavigate();





    const [arena,setArena] = useState(null);


    const [selectedProblem,setSelectedProblem] = useState(null);


    const [language,setLanguage] = useState("cpp");


    const [codes,setCodes] = useState({});


    const [customInput,setCustomInput] = useState("");


    const [output,setOutput] = useState("");


    const [verdict,setVerdict] = useState("");


    const [submissions,setSubmissions] = useState([]);


    const [loading,setLoading] = useState(true);







    const currentCode = selectedProblem

    ?

    codes[selectedProblem._id] || ""

    :

    "";








    const isProblemSolved = (problemId)=>{


        return submissions.some(

            submission =>

            submission.problem._id === problemId &&

            submission.verdict === "Accepted"

        );


    };








    useEffect(()=>{


        const fetchArena = async()=>{


            try{


                const res = await getContestArena(id);



                setArena(res.arena);





                if(res.arena.problems.length > 0){


                    setSelectedProblem(

                        res.arena.problems[0]

                    );


                }






                const submissionRes = await getContestSubmissions(id);



                setSubmissions(

                    submissionRes.submissions

                );



            }


            catch(error){


                alert(

                    error.response?.data?.message ||

                    "Unable to load contest"

                );


            }


            finally{


                setLoading(false);


            }


        };



        fetchArena();



    },[id]);









    const refreshSubmissions = async()=>{


        const submissionRes = await getContestSubmissions(id);



        setSubmissions(

            submissionRes.submissions

        );


    };









    const handleRun = async()=>{


        try{


            setOutput("");



            const res = await runCode({


                language,


                code:

                codes[selectedProblem._id] || "",


                input:customInput



            });






            setOutput(

                res.output

            );



        }


        catch(error){


            setOutput(

                error.response?.data?.message ||

                "Execution Failed"

            );


        }


    };









    const handleSubmit = async()=>{


        try{


            const res = await submitCode({


                problemId:selectedProblem._id,


                language,


                code:

                codes[selectedProblem._id] || ""



            });






            setVerdict(

                res.verdict

            );






            await refreshSubmissions();



        }


        catch(error){



            setVerdict(

                error.response?.data?.message ||

                "Submission Failed"

            );


        }


    };









    if(loading){


        return <h2>Loading Contest...</h2>;


    }






    if(!arena){


        return null;


    }







    return(


        <div className="arena-page">





            <div className="arena-header">



                <div>


                    <h1>

                        {arena.title}

                    </h1>





                    <CountdownTimer

                        startTime={arena.startTime}

                        endTime={arena.endTime}

                    />






                    <p>

                        Ends:

                        {" "}

                        {

                        new Date(

                            arena.endTime

                        ).toLocaleString()

                        }


                    </p>



                </div>






                <button

                className="leaderboard-btn"

                onClick={()=>


                    navigate(

                        `/contests/${id}/leaderboard`

                    )


                }

                >

                    Leaderboard

                </button>




            </div>









            <div className="arena-layout">








                <div className="problem-list">



                    <h2>

                        Problems

                    </h2>







                    {

                    arena.problems.map(

                        (problem,index)=>(



                            <button


                            key={problem._id}




                            className={

                            selectedProblem?._id === problem._id

                            ?

                            "problem-btn active"

                            :

                            "problem-btn"

                            }





                            onClick={()=>{


                                setSelectedProblem(problem);


                                setOutput("");


                                setVerdict("");


                            }}



                            >




                            {

                            isProblemSolved(problem._id)

                            ?

                            "✓ "

                            :

                            ""

                            }



                            Problem {index+1}



                            </button>


                        )


                    )


                    }




                </div>









                {

                selectedProblem &&



                <div className="problem-details">



                    <h1>

                        {selectedProblem.title}

                    </h1>





                    <h3>

                        Description

                    </h3>



                    <p>

                        {selectedProblem.description}

                    </p>







                    <h3>

                        Examples

                    </h3>








                    {

                    selectedProblem.examples?.map(

                        (example,index)=>(


                            <div

                            className="example"

                            key={index}

                            >


                                <p>

                                    Input

                                </p>



                                <pre>

{example.input}

                                </pre>





                                <p>

                                    Output

                                </p>



                                <pre>

{example.output}

                                </pre>



                            </div>


                        )


                    )

                    }







                    <h3>

                        Constraints

                    </h3>



                    <p>

                        {selectedProblem.constraints}

                    </p>




                </div>


                }









                <div className="editor-section">





                    <select

                    value={language}

                    onChange={

                        e=>setLanguage(e.target.value)

                    }

                    >



                        <option value="cpp">

                            C++

                        </option>


                        <option value="java">

                            Java

                        </option>


                        <option value="python">

                            Python

                        </option>



                    </select>









                    <textarea


                    value={currentCode}


                    onChange={

                        e=>setCodes({


                            ...codes,


                            [selectedProblem._id]:

                            e.target.value



                        })

                    }



                    placeholder="Write your code..."


                    />








                    <h3>

                        Custom Input

                    </h3>







                    <textarea


                    value={customInput}


                    onChange={

                        e=>setCustomInput(e.target.value)

                    }


                    placeholder="Enter custom input"


                    />









                    <button

                    onClick={handleRun}

                    >

                        Run Code

                    </button>







                    <button

                    onClick={handleSubmit}

                    >

                        Submit Solution

                    </button>








                    <h3>

                        Output

                    </h3>






                    <pre className="output-box">

{output}

                    </pre>







                    {

                    verdict &&


                    <h3>

                        Verdict:

                        {" "}

                        {verdict}


                    </h3>


                    }









                    <div className="submission-history">



                        <h2>

                            My Submissions

                        </h2>






                        {

                        submissions.length === 0

                        ?


                        <p>

                            No submissions yet

                        </p>



                        :



                        submissions.map(

                            submission=>(


                                <div

                                className="submission-card"

                                key={submission._id}

                                >



                                    <p>

                                    <strong>

                                    {

                                    submission.problem.title

                                    }

                                    </strong>


                                    </p>





                                    <p>

                                    Verdict:

                                    {" "}

                                    {

                                    submission.verdict

                                    }


                                    </p>





                                    <p>

                                    Time:

                                    {" "}

                                    {

                                    new Date(

                                    submission.submittedAt

                                    ).toLocaleString()

                                    }


                                    </p>



                                </div>


                            )


                        )


                        }





                    </div>







                </div>







            </div>





        </div>


    );



}



export default ContestArena;