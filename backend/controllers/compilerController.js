const {
    executeCode
} = require("../services/compiler/compilerService");


const {
    judgeSubmission
} = require("../services/judge/judgeService");


const {
    createSubmission
} = require("../services/submission/submissionService");





const runCodeController = async (req,res)=>{


    try{


        console.log("========== RUN CODE REQUEST ==========");
        console.log(req.body);



        const {

            language,

            code,

            input

        } = req.body;




        const result = await executeCode({

            language,

            code,

            input

        });





        console.log("========== EXECUTION SUCCESS ==========");
        console.log(result);





        res.status(200).json({


            success:true,


            output:result.output || "",


            executionTime:result.executionTime || 0,


            memory:result.memory || 0



        });



    }


    catch(error){



        console.log("========== RUN CODE ERROR ==========");

        console.log(error);





        res.status(500).json({


            success:false,


            message:error.message || "Execution Failed",


            stderr:error.stderr || "",


            stdout:error.stdout || ""



        });



    }


};








const submitCodeController = async(req,res)=>{


    try{



        console.log("========== SUBMISSION ==========");

        console.log(req.body);





        const {


            problemId,

            language,

            code



        } = req.body;







        const result = await judgeSubmission({


            problemId,

            language,

            code



        });







        const submission = await createSubmission({



            user:req.user.id,


            problem:problemId,


            language,


            code,


            verdict:result.verdict,


            executionTime:Number(result.runtime)||0



        });







        res.status(200).json({


            success:true,


            verdict:result.verdict,


            submission



        });



    }


    catch(error){



        console.log("========== SUBMIT ERROR ==========");

        console.log(error);




        res.status(500).json({



            success:false,


            message:error.message || "Submission Failed"



        });



    }



};






module.exports={


    runCodeController,


    submitCodeController



};