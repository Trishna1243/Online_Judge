import { useEffect, useState } from "react";

import "./Problems.css";

import ProblemFilters from "../../components/problems/ProblemFilters/ProblemFilters";

import ProblemTable from "../../components/problems/ProblemTable/ProblemTable";

import Pagination from "../../components/problems/Pagination/Pagination";

import { getProblems } from "../../services/problemService";



function Problems(){


    const [problems,setProblems] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");

    const [totalProblems,setTotalProblems] = useState(0);



    const fetchProblems = async()=>{


        try{


            setLoading(true);

            setError("");



            const data = await getProblems();



            setProblems(
                data.problems || []
            );


            setTotalProblems(
                data.totalProblems || 0
            );



        }


        catch(error){


            console.log(
                "Problem fetch error:",
                error
            );


            setError(
                "Unable to load problems"
            );


        }


        finally{


            setLoading(false);


        }


    };





    useEffect(()=>{


        fetchProblems();


    },[]);





    return(


        <div className="problems-page">





            <div className="problems-header">



                <div>


                    <h1>
                        Problems
                    </h1>



                    <p>
                        Solve coding problems and improve your interview preparation.
                    </p>



                    <span className="problem-count">

                        Total Problems: {totalProblems}

                    </span>



                </div>





                <button>

                    Random Problem

                </button>




            </div>







            <ProblemFilters />







            {

                loading && (

                    <h2>
                        Loading Problems...
                    </h2>

                )

            }






            {

                error && (

                    <h2 className="error-message">

                        {error}

                    </h2>

                )

            }








            {

                !loading && !error && (

                    <ProblemTable

                        problems={problems}

                    />

                )

            }







            <Pagination />






        </div>


    );


}



export default Problems;