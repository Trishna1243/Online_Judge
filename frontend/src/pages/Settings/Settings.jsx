import { useEffect, useState } from "react";

import {
    getProfile,
    updateProfile,
    changePassword
} from "../../services/userService";

import "./Settings.css";



function Settings(){


    const [user,setUser] = useState(null);


    const [name,setName] = useState("");



    const [password,setPassword] = useState({

        oldPassword:"",

        newPassword:""

    });



    const [message,setMessage] = useState("");



    useEffect(()=>{

        loadProfile();

    },[]);





    const loadProfile = async()=>{


        try{


            const response = await getProfile();


            setUser(response.user);


            setName(response.user.name);



        }

        catch(error){


            console.log(error);


            setMessage(

                error.response?.data?.message ||

                "Failed to load profile"

            );


        }


    };







    const handleProfileUpdate = async()=>{


        try{


            const response = await updateProfile({

                name:name

            });



            setMessage(

                response.message ||

                "Profile Updated Successfully"

            );



            loadProfile();



        }


        catch(error){


            console.log(error.response);


            setMessage(

                error.response?.data?.message ||

                error.message ||

                "Profile update failed"

            );


        }


    };









    const handlePasswordChange = async()=>{


        try{


            const response = await changePassword({

                oldPassword:password.oldPassword,

                newPassword:password.newPassword

            });



            setMessage(

                response.message ||

                "Password Changed Successfully"

            );



            setPassword({

                oldPassword:"",

                newPassword:""

            });



        }


        catch(error){


            console.log(error.response);



            setMessage(

                error.response?.data?.message ||

                error.message ||

                "Password change failed"

            );


        }


    };








    const logout = ()=>{


        localStorage.removeItem("token");

        localStorage.removeItem("user");


        window.location.href="/login";


    };







    if(!user){


        return(

            <div>

                Loading...

            </div>

        );


    }







    return(


        <div className="settings-page">



            <h1>

                Settings

            </h1>





            {

                message &&

                <div className="settings-message">

                    {message}

                </div>

            }







            <div className="settings-card">


                <h3>

                    Profile Settings

                </h3>



                <p>

                    Email: {user.email}

                </p>




                <input


                    value={name}


                    onChange={(e)=>

                        setName(e.target.value)

                    }


                />





                <button

                    onClick={handleProfileUpdate}

                >

                    Update Profile

                </button>



            </div>









            <div className="settings-card">


                <h3>

                    Change Password

                </h3>





                <input


                    type="password"


                    placeholder="Old Password"


                    value={password.oldPassword}


                    onChange={(e)=>

                        setPassword({

                            ...password,

                            oldPassword:e.target.value

                        })

                    }


                />








                <input


                    type="password"


                    placeholder="New Password"


                    value={password.newPassword}


                    onChange={(e)=>

                        setPassword({

                            ...password,

                            newPassword:e.target.value

                        })

                    }


                />







                <button

                    onClick={handlePasswordChange}

                >

                    Change Password

                </button>



            </div>








            <div className="settings-card">


                <h3>

                    Account

                </h3>



                <button

                    onClick={logout}

                >

                    Logout

                </button>



            </div>





        </div>


    );


}



export default Settings;