import { NavLink } from "react-router-dom";

function SidebarItem({ icon: Icon, title, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-item ${isActive ? "active" : ""}`
      }
    >
      <Icon size={20} />
      <span>{title}</span>
    </NavLink>
  );
}

export default SidebarItem;