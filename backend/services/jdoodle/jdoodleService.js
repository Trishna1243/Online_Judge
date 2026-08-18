const JDoodleConfig = {
    endpoint: "https://api.jdoodle.com/v1/execute"
};



async function executeWithJDoodle({

    language,

    code,

    input,

    config

}) {


    const clientId =
        process.env.JDOODLE_CLIENT_ID;

    const clientSecret =
        process.env.JDOODLE_CLIENT_SECRET;



    if(!clientId || !clientSecret){

        throw new Error(
            "JDoodle API credentials are not configured"
        );

    }



    const response = await fetch(

        JDoodleConfig.endpoint,

        {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/json"

            },

            body: JSON.stringify({

                clientId,

                clientSecret,

                script: code,

                stdin: input || "",

                language: config.language,

                versionIndex: config.versionIndex,

                compileOnly: false

            })

        }

    );



    let data;

    try {

        data = await response.json();

    }

    catch(error) {

        throw new Error(
            "Invalid response received from JDoodle"
        );

    }



    console.log(
        "JDoodle response:",
        data
    );



    if(!response.ok){

        const error = new Error(

            data.error ||
            `JDoodle request failed with status ${response.status}`

        );

        error.stderr =
            data.error || "";

        error.stdout =
            data.output || "";

        error.executionTime =
            Number(data.cpuTime) || 0;

        error.memory =
            Number(data.memory) || 0;

        throw error;

    }



    if(

        data.isExecutionSuccess === false ||

        data.compilationStatus === 1 ||

        data.error

    ){

        const error = new Error(

            data.error ||
            "Code compilation/execution failed"

        );

        error.stderr =
            data.error || "";

        error.stdout =
            data.output || "";

        error.executionTime =
            Number(data.cpuTime) || 0;

        error.memory =
            Number(data.memory) || 0;

        throw error;

    }



    return {

        output:
            data.output || "",

        executionTime:
            Number(data.cpuTime) || 0,

        memory:
            Number(data.memory) || 0

    };

}



module.exports = {

    executeWithJDoodle

};
