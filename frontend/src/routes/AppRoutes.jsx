import { Routes, Route, Navigate } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";


import Dashboard from "../pages/Dashboard/Dashboard";
import Problems from "../pages/Problems/Problems";
import ProblemDetails from "../pages/ProblemDetails/ProblemDetails";
import PracticeArena from "../pages/PracticeArena/PracticeArena";
import Contests from "../pages/Contests/Contests";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Community from "../pages/Community/Community";
import Profile from "../pages/Profile/Profile";
import AI from "../pages/AI/AI";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SubmissionHistory from "../pages/SubmissionHistory/SubmissionHistory";
import Admin from "../pages/Admin/Admin";
import Settings from "../pages/Settings/Settings";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";



function AppRoutes(){


return(

<Routes>


<Route path="/login" element={<Login/>}/>


<Route path="/register" element={<Register/>}/>



<Route element={

<ProtectedRoute>

<MainLayout/>

</ProtectedRoute>

}>


<Route path="/" element={<Navigate to="/dashboard" replace/>}/>


<Route path="/dashboard" element={<Dashboard/>}/>


<Route path="/problems" element={<Problems/>}/>


<Route path="/problem/:id" element={<ProblemDetails/>}/>


<Route path="/practice" element={<PracticeArena/>}/>


<Route path="/contests" element={<Contests/>}/>


<Route path="/leaderboard" element={<Leaderboard/>}/>


<Route path="/community" element={<Community/>}/>


<Route path="/profile" element={<Profile/>}/>


<Route path="/ai" element={<AI/>}/>


<Route path="/submissions" element={<SubmissionHistory/>}/>

<Route
 path="/settings"
 element={<ProtectedRoute><Settings/></ProtectedRoute>}
/>

<Route

path="/admin"

element={

<AdminRoute>

<Admin/>

</AdminRoute>

}

/>



</Route>



</Routes>

);


}


export default AppRoutes;