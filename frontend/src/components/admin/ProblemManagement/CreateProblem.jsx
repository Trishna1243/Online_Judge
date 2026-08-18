import { useState } from "react";

import api from "../../../services/api";


function CreateProblem(){


const emptyTestCase={

    input:"",

    output:"",

    isHidden:true

};



const [problem,setProblem]=useState({

    title:"",

    description:"",

    difficulty:"Easy",

    tags:"",

    constraints:"",

    testCases:[emptyTestCase]

});





const handleChange=(e)=>{


setProblem({

    ...problem,

    [e.target.name]:e.target.value

});


};







const addTestCase=()=>{


setProblem({

...problem,


testCases:[

...problem.testCases,


{

input:"",

output:"",

isHidden:true

}

]


});


};








const updateTestCase=(index,field,value)=>{


const updated=[...problem.testCases];


updated[index][field]=value;


setProblem({

...problem,

testCases:updated

});


};









const removeTestCase=(index)=>{


setProblem({

...problem,


testCases:

problem.testCases.filter(

(_,i)=>i!==index

)


});


};









const createProblem=async()=>{


try{


const data={


...problem,


tags:

problem.tags

.split(",")

.map(tag=>tag.trim())


};




await api.post(

"/problems",

data

);



alert(

"Problem Created Successfully"

);



setProblem({

title:"",

description:"",

difficulty:"Easy",

tags:"",

constraints:"",

testCases:[emptyTestCase]

});



}


catch(error){


alert(

error.response?.data?.message ||

"Failed"

);


}



};









return(


<div className="management-card">


<h2>

Create Problem

</h2>







<input

name="title"

placeholder="Problem Title"

value={problem.title}

onChange={handleChange}

/>







<textarea

name="description"

placeholder="Description"

value={problem.description}

onChange={handleChange}

/>







<select

name="difficulty"

value={problem.difficulty}

onChange={handleChange}

>


<option>

Easy

</option>


<option>

Medium

</option>


<option>

Hard

</option>


</select>









<input

name="tags"

placeholder="Tags comma separated"

value={problem.tags}

onChange={handleChange}

/>







<textarea

name="constraints"

placeholder="Constraints"

value={problem.constraints}

onChange={handleChange}

/>










<h3>

Test Cases

</h3>







{

problem.testCases.map((test,index)=>(


<div key={index}>


<textarea

placeholder="Input"

value={test.input}

onChange={e=>

updateTestCase(

index,

"input",

e.target.value

)

}

/>





<textarea

placeholder="Output"

value={test.output}

onChange={e=>

updateTestCase(

index,

"output",

e.target.value

)

}

/>





<button

onClick={()=>removeTestCase(index)}

>

Remove

</button>



</div>


))


}







<button

onClick={addTestCase}

>

Add Test Case

</button>







<button

onClick={createProblem}

>

Create Problem

</button>






</div>


);


}


export default CreateProblem;