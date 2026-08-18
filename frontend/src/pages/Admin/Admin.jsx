import ProblemManagement from "../../components/admin/ProblemManagement/ProblemManagement";
import ContestManagement from "../../components/admin/ContestManagement/ContestManagement";
import UserManagement from "../../components/admin/UserManagement/UserManagement";

import "./Admin.css";


function Admin(){


    return (

        <div className="admin-page">


            <h1 className="admin-title">
                Admin Panel
            </h1>



            <div className="admin-section">

                <ProblemManagement/>

            </div>




            <div className="admin-section">

                <ContestManagement/>

            </div>




            <div className="admin-section">

                <UserManagement/>

            </div>



        </div>

    );


}


export default Admin;