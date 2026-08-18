import { useEffect, useState } from "react";

import "./CountdownTimer.css";



function CountdownTimer({

    startTime,

    endTime

}){



    const calculateTime = ()=>{


        const now = new Date();


        const start = new Date(startTime);

        const end = new Date(endTime);





        let difference;



        if(now < start){


            difference = start - now;


        }

        else{


            difference = end - now;


        }





        if(difference <= 0){


            return {


                hours:0,

                minutes:0,

                seconds:0


            };


        }





        const totalSeconds = Math.floor(

            difference / 1000

        );





        return {


            hours: Math.floor(

                totalSeconds / 3600

            ),



            minutes: Math.floor(

                (totalSeconds % 3600) / 60

            ),



            seconds: totalSeconds % 60


        };


    };







    const [time,setTime] = useState(

        calculateTime()

    );







    useEffect(()=>{


        const timer = setInterval(()=>{


            setTime(

                calculateTime()

            );


        },1000);






        return ()=>clearInterval(timer);



    },[startTime,endTime]);









    const now = new Date();


    const start = new Date(startTime);






    return(


        <div className="countdown">


            <span>


            {

            now < start

            ?

            "Starts in:"

            :

            "Ends in:"

            }



            </span>





            <strong>


                {String(time.hours).padStart(2,"0")}

                :

                {String(time.minutes).padStart(2,"0")}

                :

                {String(time.seconds).padStart(2,"0")}


            </strong>



        </div>


    );


}



export default CountdownTimer;