import "./BottomPanel.css";


function BottomPanel({

    input,

    setInput,

    output,

    verdict,

    runtime

}){


return(

<div className="bottom-panel">



    <div className="input-section">


        <h3>
            Input
        </h3>


        <textarea

            value={input}

            onChange={(e)=>setInput(e.target.value)}

            placeholder="Enter custom input..."

        />


    </div>







    <div className="output-section">


        <h3>
            Output
        </h3>



        <pre>

            {output || "Run your code to see output"}

        </pre>


    </div>







    <div className="result-info">


        {

            verdict &&

            <div>

                Verdict:

                <strong>

                    {verdict}

                </strong>

            </div>

        }




        <div>

            Runtime:

            <strong>

                {runtime} ms

            </strong>

        </div>



    </div>






</div>

);


}



export default BottomPanel;