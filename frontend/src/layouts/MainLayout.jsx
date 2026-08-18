import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";
import Navbar from "../components/layout/Navbar/Navbar";

import "./MainLayout.css";


function MainLayout(){

    return(

        <div className="main-layout">


            <Sidebar />


            <div className="main-content">


                <Navbar />


                <main className="page-content">

                    <Outlet />

                </main>


            </div>


        </div>

    );

}


export default MainLayout;