import { useState } from "react";

import "./Login.css";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";

import { useAuth } from "../../context/AuthContext";



function Login(){


    const navigate = useNavigate();


    const { login } = useAuth();



    const [form,setForm] = useState({

        email:"",
        password:""

    });



    const [error,setError] = useState("");





    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };







    const handleSubmit=async(e)=>{


        e.preventDefault();


        setError("");



        try{


            const response = await loginUser(form);



            login(

                response.user,

                response.token

            );



            navigate("/dashboard");



        }


        catch(err){


            setError(

                err.response?.data?.message ||

                "Login failed"

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

                    Master Competitive Programming 🚀

                </h2>




                <p>

                    Practice problems, compete in contests,

                    and improve your coding skills.

                </p>





                <div className="features">



                    <div>

                        ✓ 1000+ Coding Problems

                    </div>



                    <div>

                        ✓ Real Time Judging

                    </div>



                    <div>

                        ✓ Global Leaderboard

                    </div>



                    <div>

                        ✓ AI Coding Assistant

                    </div>



                </div>




            </div>








            <div className="auth-card">



                <h1>

                    Welcome Back 👋

                </h1>




                <p>

                    Continue your coding journey

                </p>






                <form onSubmit={handleSubmit}>


                    <input


                    type="email"


                    name="email"


                    placeholder="Email"


                    value={form.email}


                    onChange={handleChange}


                    required


                    />






                    <input


                    type="password"


                    name="password"


                    placeholder="Password"


                    value={form.password}


                    onChange={handleChange}


                    required


                    />







                    {

                        error &&

                        <p className="error">

                            {error}

                        </p>

                    }







                    <button type="submit">


                        Login


                    </button>




                </form>






                <div className="switch-auth">


                    Don't have an account?




                    <span

                    onClick={()=>navigate("/register")}

                    >

                        Create Account

                    </span>




                </div>




            </div>




        </div>


    );


}



export default Login;