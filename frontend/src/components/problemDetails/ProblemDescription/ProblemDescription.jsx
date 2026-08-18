import "./ProblemDescription.css";


function ProblemDescription({ problem }){


    return(


        <div className="problem-description">



            <h2>
                Description
            </h2>


            <p>
                {problem.description}
            </p>




            {
                problem.constraints &&

                <>

                <h2>
                    Constraints
                </h2>


                <p>
                    {problem.constraints}
                </p>


                </>

            }




            {
                problem.examples &&

                <>


                <h2>
                    Examples
                </h2>



                {

                    problem.examples.map(
                        (example,index)=>(


                        <div
                        className="example-box"
                        key={index}
                        >


                            <h3>
                                Example {index+1}
                            </h3>


                            <p>
                                Input:
                                <br/>

                                {example.input}

                            </p>



                            <p>

                                Output:
                                <br/>

                                {example.output}

                            </p>


                        </div>


                    ))

                }


                </>

            }




        </div>


    );


}


export default ProblemDescription;