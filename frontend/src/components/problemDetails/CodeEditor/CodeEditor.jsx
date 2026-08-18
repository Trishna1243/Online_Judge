import { useEffect } from "react";

import Editor from "@monaco-editor/react";

import starterCodes from "../../../data/starterCodes";

import "./CodeEditor.css";



function CodeEditor({

    language="cpp",

    code,

    setCode

}) {



    useEffect(()=>{


        if(!code){

            setCode(
                starterCodes[language]
            );

        }


    },[language]);





    return(


        <div className="code-editor">


            <Editor


                height="100%"


                language={language}


                theme="vs-dark"


                value={code}


                onChange={(value)=>{


                    setCode(value || "");


                }}



                options={{


                    fontSize:16,


                    minimap:{


                        enabled:false


                    },


                    automaticLayout:true,


                    scrollBeyondLastLine:false,


                    wordWrap:"on",


                    tabSize:4,


                    fontLigatures:true,


                    padding:{


                        top:16


                    }


                }}



            />


        </div>


    );


}


export default CodeEditor;