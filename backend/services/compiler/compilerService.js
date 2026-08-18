const LANGUAGE_CONFIG = require("./languageConfig");

const {
    executeWithJDoodle
} = require("../jdoodle/jdoodleService");



async function executeCode({

    language,

    code,

    input

}) {


    console.log("==============================");
    console.log("COMPILER SERVICE RECEIVED");
    console.log("language:", language);
    console.log("type:", typeof language);
    console.log("==============================");



    console.log("AVAILABLE LANGUAGES:");

    console.log(
        Object.keys(LANGUAGE_CONFIG)
    );



    const config = LANGUAGE_CONFIG[language];



    if (!config) {

        throw new Error(

            `Unsupported Language Received: ${language}`

        );

    }



    try {

        const result = await executeWithJDoodle({

            language,

            code,

            input,

            config

        });



        return {

            output: result.output || "",

            executionTime: result.executionTime || 0,

            memory: result.memory || 0

        };

    }


    catch(error) {

        console.log("JDOODLE ERROR");

        console.log(error);

        throw error;

    }

}



module.exports = {

    executeCode

};
