import { useState } from "react";

import {
    askAI
} from "../../services/aiService";

import "./AI.css";
import Markdown from "react-markdown";

function AI(){


    const [question,setQuestion] = useState("");

    const [messages,setMessages] = useState([]);

    const [loading,setLoading] = useState(false);




    const handleAsk = async()=>{


        if(!question.trim()) return;



        const userMessage = {

            role:"user",

            text:question

        };


        setMessages(prev=>[

            ...prev,

            userMessage

        ]);



        setQuestion("");

        setLoading(true);



        try{


            const result =
            await askAI(
                question
            );



            const aiMessage = {

                role:"ai",

                text:result.answer

            };



            setMessages(prev=>[

                ...prev,

                aiMessage

            ]);



        }


        catch(error){


            setMessages(prev=>[

                ...prev,

                {

                    role:"ai",

                    text:"Something went wrong. Please try again."

                }

            ]);

        }



        finally{


            setLoading(false);


        }


    };





    return(

        <div className="ai-page">


            <h1>
                🤖 CodeArena AI
            </h1>



            <div className="chat-box">


                {
                    messages.map(
                        (message,index)=>(


                            <div
                            key={index}
                            className={
                                message.role==="user"
                                ?
                                "user-message"
                                :
                                "ai-message"
                            }
                            >

                                <Markdown>
                                    {message.text}
                                </Markdown>

                            </div>


                        )
                    )
                }



                {
                    loading &&

                    <div className="ai-message">

                        Thinking...

                    </div>

                }



            </div>





            <div className="input-area">


                <input

                value={question}

                onChange={
                    (e)=>setQuestion(e.target.value)
                }

                placeholder="Ask coding doubts..."

                onKeyDown={
                    (e)=>{

                        if(e.key==="Enter")
                            handleAsk();

                    }
                }

                />



                <button onClick={handleAsk}>

                    Ask

                </button>


            </div>



        </div>

    );


}


export default AI;