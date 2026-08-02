import "./SubmissionTable.css";

import VerdictBadge from "../VerdictBadge/VerdictBadge";


const submissions=[

{
problem:"Two Sum",
language:"C++",
verdict:"Accepted",
runtime:"12 ms",
memory:"8 MB",
date:"02 Aug 2026"
},

{
problem:"Binary Search",
language:"Java",
verdict:"Wrong Answer",
runtime:"25 ms",
memory:"12 MB",
date:"01 Aug 2026"
},

{
problem:"Graph DFS",
language:"Python",
verdict:"Accepted",
runtime:"40 ms",
memory:"18 MB",
date:"30 July 2026"
}

];


function SubmissionTable(){


return (

<div className="submission-card">


<table>


<thead>

<tr>

<th>
Problem
</th>

<th>
Language
</th>

<th>
Verdict
</th>

<th>
Runtime
</th>

<th>
Memory
</th>

<th>
Date
</th>

</tr>

</thead>


<tbody>


{submissions.map((item,index)=>(


<tr key={index}>


<td>
{item.problem}
</td>


<td>
{item.language}
</td>


<td>

<VerdictBadge verdict={item.verdict}/>

</td>


<td>
{item.runtime}
</td>


<td>
{item.memory}
</td>


<td>
{item.date}
</td>


</tr>


))}


</tbody>


</table>


</div>

);


}


export default SubmissionTable;