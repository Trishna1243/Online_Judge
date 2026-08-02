import {useState} from "react";

import "./Register.css";

import {useNavigate} from "react-router-dom";

import {registerUser} from "../../services/authService";


function Register(){


const navigate=useNavigate();



const [form,setForm]=useState({

name:"",
email:"",
password:""

});



const [error,setError]=useState("");




const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};




const handleSubmit=async(e)=>{

e.preventDefault();


try{


await registerUser(form);


navigate("/login");


}

catch(err){

setError(
err.response?.data?.message ||
"Registration failed"
);

}


};




return(


<div className="auth-page">


<div className="auth-brand">


<h1>
CodeArena
</h1>


<h2>
Join the coding community 🚀
</h2>


<p>
Create your account and start solving
competitive programming challenges.
</p>


<div className="features">


<div>
✓ Track your progress
</div>


<div>
✓ Participate in contests
</div>


<div>
✓ Earn achievements
</div>


<div>
✓ Compete with developers
</div>


</div>


</div>





<div className="auth-card">


<h1>
Create Account
</h1>


<p>
Start your coding journey today
</p>



<form onSubmit={handleSubmit}>


<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>




<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>




<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>




{
error &&
<p className="error">
{error}
</p>
}



<button>
Create Account
</button>


</form>




<div className="switch-auth">


Already have an account?


<span
onClick={()=>navigate("/login")}
>

Login

</span>


</div>


</div>



</div>


);


}


export default Register;