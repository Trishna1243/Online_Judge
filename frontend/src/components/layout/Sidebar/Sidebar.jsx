import "./Sidebar.css";

import SidebarItem from "./SidebarItem";

import {
useAuth
} from "../../../context/AuthContext";


import {

LayoutDashboard,
BookOpen,
Flame,
Trophy,
BarChart3,
Users,
Bot,
User,
Shield,
Settings,
LogOut,
Code2

} from "lucide-react";




function Sidebar(){


const {

user,

logout

}=useAuth();





return(


<aside className="sidebar">


<div className="sidebar-logo">


<div className="logo-box">

<Code2 size={28}/>

</div>


<div>

<h2>
CodeArena
</h2>

<p>
Developer Platform
</p>

</div>


</div>





<div className="sidebar-group">


<span className="sidebar-title">

MAIN

</span>



<SidebarItem

icon={LayoutDashboard}

title="Dashboard"

to="/dashboard"

/>


<SidebarItem

icon={BookOpen}

title="Problems"

to="/problems"

/>


<SidebarItem

icon={Flame}

title="Practice Arena"

to="/practice"

/>


<SidebarItem

icon={Trophy}

title="Contests"

to="/contests"

/>


<SidebarItem

icon={BarChart3}

title="Leaderboard"

to="/leaderboard"

/>


<SidebarItem

icon={Users}

title="Community"

to="/community"

/>



</div>





<div className="sidebar-group">


<span className="sidebar-title">

TOOLS

</span>


<SidebarItem

icon={Bot}

title="AI Assistant"

to="/ai"

/>



<SidebarItem

icon={User}

title="Profile"

to="/profile"

/>


</div>





{
user?.role==="admin" &&


<div className="sidebar-group">


<span className="sidebar-title">

ADMIN

</span>



<SidebarItem

icon={Shield}

title="Admin"

to="/admin"

/>



</div>

}





<div className="sidebar-footer">


<SidebarItem

icon={Settings}

title="Settings"

to="/settings"

/>




<SidebarItem

icon={LogOut}

title="Logout"

to="/login"

onClick={logout}

/>


</div>



</aside>


);


}


export default Sidebar;