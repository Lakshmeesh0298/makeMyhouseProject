import React from "react";
import SideBarContext from "./apis/context/SideBarContext";
import SidebarMenu from "./components/sidebar/SidebarMenu";
// import Navbar from "./pages/navabar/Navbar";
import { BrowserRouter } from "react-router-dom";
import CustomeRoute from "./apis/router/CustomeRoute";
import Homedata from "./pages/home/Homedata";
import MainHomeData from "./pages/home/MainHomeData";
// import MainHomeData from "./pages/home/MainHomeData";
const App = () => {
  return (
    <SideBarContext>
      <BrowserRouter>
        <CustomeRoute />
        <aside>
          <SidebarMenu />
        </aside>
      </BrowserRouter>
    </SideBarContext>
  );
};

export default App;
