import "./ProblemTable.css";

import { Link } from "react-router-dom";



function ProblemTable({problems}){


return(

<div className="problem-table-container">


<table className="problem-table">


<thead>

<tr>

<th>
#
</th>

<th>
Problem
</th>

<th>
Difficulty
</th>

<th>
Tags
</th>

</tr>

</thead>



<tbody>


{

problems.map((problem,index)=>(


<tr key={problem._id}>


<td>

{index+1}

</td>



<td>


<Link

to={`/problem/${problem._id}`}

className="problem-link"

>


{problem.title}


</Link>


</td>





<td>


<span

className={

`difficulty ${problem.difficulty.toLowerCase()}`

}

>

{problem.difficulty}

</span>


</td>






<td>


<div className="tags-container">


{

problem.tags?.map((tag)=>(


<span

key={tag}

className="tag"

>


{tag}


</span>


))


}


</div>


</td>



</tr>


))


}


</tbody>



</table>



</div>


);


}



export default ProblemTable;