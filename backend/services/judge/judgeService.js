const Problem = require("../../models/Problem");


const {
    executeCode
} = require("../compiler/compilerService");





const judgeSubmission = async({

    problemId,

    language,

    code


})=>{


    const problem = await Problem.findById(problemId);



    if(!problem){


        throw new Error(

            "Problem not found"

        );


    }





    let verdict = "Accepted";


    let runtime = "0";


    let memory = "0";





    for(const testCase of problem.testCases){



        const result = await executeCode({


            language,


            code,


            input:testCase.input



        });





        const actualOutput = result.output

        ?

        result.output.trim()

        :

        "";





        const expectedOutput = testCase.output.trim();





        if(actualOutput !== expectedOutput){



            verdict = "Wrong Answer";


            break;


        }





        runtime = result.executionTime || "0";


        memory = result.memory || "0";



    }





    return {


        verdict,


        runtime,


        memory


    };


};





module.exports = {


    judgeSubmission


};