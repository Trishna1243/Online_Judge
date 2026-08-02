import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";
import Navbar from "../components/layout/Navbar/Navbar";

function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0B1120",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <main
          style={{
            flex: 1,
            overflow: "auto",
            padding: "28px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;