import "./SubmissionHistory.css";

import SubmissionTable from "../../components/submission/SubmissionTable/SubmissionTable";

function SubmissionHistory(){

return (

<div className="submission-page">


<div className="submission-header">

<h1>
Submission History
</h1>

<p>
Track your previous submissions and results.
</p>


</div>


<SubmissionTable />


</div>

);

}

export default SubmissionHistory;