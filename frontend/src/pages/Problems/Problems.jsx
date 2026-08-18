import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Problems.css";

import ProblemFilters from "../../components/problems/ProblemFilters/ProblemFilters";

import ProblemTable from "../../components/problems/ProblemTable/ProblemTable";

import Pagination from "../../components/problems/Pagination/Pagination";

import {
    getProblems,
    getRandomProblem
} from "../../services/problemService";



function Problems(){



    const navigate = useNavigate();




    const [problems,setProblems] = useState([]);



    const [loading,setLoading] = useState(true);



    const [error,setError] = useState("");



    const [totalProblems,setTotalProblems] = useState(0);



    const [totalPages,setTotalPages] = useState(1);



    const [currentPage,setCurrentPage] = useState(1);




    const [filters,setFilters] = useState({

        search:"",

        difficulty:"",

        tag:""

    });









    const fetchProblems = async()=>{


        try{


            setLoading(true);


            setError("");




            const data = await getProblems({


                page:currentPage,


                search:filters.search,


                difficulty:filters.difficulty,


                tag:filters.tag



            });






            setProblems(

                data.problems || []

            );





            setTotalProblems(

                data.totalProblems || 0

            );





            setTotalPages(

                data.totalPages || 1

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

},[
    currentPage,
    filters.search,
    filters.difficulty,
    filters.tag
]);









    const handleFilterChange=(newFilters)=>{


        setFilters(newFilters);



        setCurrentPage(1);



    };









    const handleRandomProblem = async()=>{


        try{


            const data = await getRandomProblem();




            navigate(

                `/problem/${data.problem._id}`

            );




        }


        catch(error){


            console.log(

                "Random problem error:",

                error

            );


        }



    };









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









                <button

                    onClick={handleRandomProblem}

                >

                    Random Problem

                </button>






            </div>









            <ProblemFilters

                filters={filters}

                setFilters={handleFilterChange}

            />









            {

                loading &&

                <h2>

                    Loading Problems...

                </h2>


            }









            {

                error &&


                <h2 className="error-message">


                    {error}


                </h2>


            }









            {


                !loading && !error &&


                <ProblemTable

                    problems={problems}

                />


            }









            <Pagination


                currentPage={currentPage}


                totalPages={totalPages}


                onPageChange={setCurrentPage}


            />







        </div>



    );


}



export default Problems;