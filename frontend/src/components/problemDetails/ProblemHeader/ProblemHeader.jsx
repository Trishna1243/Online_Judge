import "./ProblemHeader.css";


function ProblemHeader({problem}){


    return(

        <div className="problem-header">


            <h1>
                {problem.title}
            </h1>


            <div className="problem-meta">


                <span className="difficulty">

                    {problem.difficulty}

                </span>



                {
                    problem.tags?.map(
                        (tag,index)=>(

                            <span
                            key={index}
                            className="problem-tag"
                            >

                                {tag}

                            </span>

                        )
                    )
                }


            </div>


        </div>

    );

}


export default ProblemHeader;