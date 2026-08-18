import "./RecentSubmissionTable.css";

const submissions = [

{

problem:"Two Sum",

verdict:"Accepted",

language:"C++"

},

{

problem:"Binary Search",

verdict:"Accepted",

language:"Java"

},

{

problem:"Merge Strings",

verdict:"Wrong Answer",

language:"Python"

},

{

problem:"Longest Subarray",

verdict:"Time Limit",

language:"C++"

}

];

function RecentSubmissionTable(){

return(

<div className="submission-card">

<div className="submission-header">

<h2>

Recent Submissions

</h2>

<span className="view-all">

View All →

</span>

</div>

<table>

<thead>

<tr>

<th>Problem</th>

<th>Verdict</th>

<th>Language</th>

</tr>

</thead>

<tbody>

{submissions.map((item,index)=>(

<tr key={index}>

<td className="problem-name">

{item.problem}

</td>

<td>

<span

className={`badge ${
item.verdict==="Accepted"
?"accepted"
:item.verdict==="Wrong Answer"
?"wrong"
:"tle"
}`}

>

{item.verdict}

</span>

</td>

<td className="lang">

{item.language}

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}

export default RecentSubmissionTable;