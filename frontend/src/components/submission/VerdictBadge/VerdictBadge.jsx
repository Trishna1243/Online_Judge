import "./VerdictBadge.css";


function VerdictBadge({verdict}){


return(

<span className={`verdict ${verdict.toLowerCase().replace(" ","-")}`}>

{verdict}

</span>

);


}


export default VerdictBadge;