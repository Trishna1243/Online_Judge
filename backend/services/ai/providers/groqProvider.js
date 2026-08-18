const Groq = require("groq-sdk");


class GroqProvider {


    constructor(){


        if(!process.env.GROQ_API_KEY){

            throw new Error(
                "GROQ_API_KEY missing in .env"
            );

        }


        this.client = new Groq({

            apiKey: process.env.GROQ_API_KEY

        });


    }





    // ==========================
    // AI CHAT ASSISTANT
    // ==========================

    async chat(question){


        const response =
        await this.client.chat.completions.create({

            messages:[

                {

                    role:"system",

                    content:
                    "You are CodeArena AI, a helpful programming assistant. Explain concepts clearly and help students learn."

                },


                {

                    role:"user",

                    content:question

                }


            ],


            model:"openai/gpt-oss-20b"


        });



        return response
        .choices[0]
        .message
        .content;


    }






    // ==========================
    // AI HINT
    // ==========================

    async generateHint(problem, code){


        const response =
        await this.client.chat.completions.create({

            messages:[

                {

                    role:"system",

                    content:
                    "You are a programming mentor. Give hints only. Do not directly provide the complete solution."

                },


                {

                    role:"user",

                    content:
`
Problem:

${problem.title}


Description:

${problem.description}


Current Code:

${code}


Give a helpful hint.
`

                }


            ],


            model:"openai/gpt-oss-20b"


        });



        return {


            hint:
            response
            .choices[0]
            .message
            .content


        };


    }







    // ==========================
    // AI CODE REVIEW
    // ==========================

    async reviewCode(problem, code){


        const response =
        await this.client.chat.completions.create({

            messages:[


                {

                    role:"system",

                    content:
                    "You are an expert code reviewer. Analyze code and give useful feedback."

                },


                {

                    role:"user",

                    content:
`
Problem:

${problem.title}


Code:

${code}


Give:

1. Bugs
2. Improvements
3. Time complexity
4. Space complexity

`

                }


            ],


            model:"openai/gpt-oss-20bt"


        });



        return {


            review:[

                response
                .choices[0]
                .message
                .content

            ]


        };


    }


}



module.exports = GroqProvider;