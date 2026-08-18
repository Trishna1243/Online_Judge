import "./ProblemFilters.css";


function ProblemFilters({
    filters,
    setFilters
}){


const handleChange = (field,value)=>{


    setFilters({

        ...filters,

        [field]:value

    });


};




return(


<div className="problem-filters">



<input

    type="text"

    placeholder="Search problems..."

    value={filters.search}

    onChange={(e)=>
        handleChange(
            "search",
            e.target.value
        )
    }

/>





<select

value={filters.difficulty}

onChange={(e)=>
    handleChange(
        "difficulty",
        e.target.value
    )
}

>


<option value="">

    All Difficulty

</option>


<option value="Easy">

    Easy

</option>


<option value="Medium">

    Medium

</option>


<option value="Hard">

    Hard

</option>


</select>







<select

value={filters.tag}

onChange={(e)=>
    handleChange(
        "tag",
        e.target.value
    )
}

>


<option value="">

    All Topics

</option>


<option value="Array">

    Array

</option>


<option value="String">

    String

</option>


<option value="Stack">

    Stack

</option>


<option value="Searching">

    Searching

</option>


<option value="Math">

    Math

</option>


<option value="Recursion">

    Recursion

</option>



</select>





</div>


);


}


export default ProblemFilters;