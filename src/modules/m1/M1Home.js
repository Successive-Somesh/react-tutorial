import React from "react";
import { Outlet } from "react-router-dom";
import BasicComponent from "./pages/BasicComponent";
function M1Home() {
        return(<div><Outlet /></div>);
}
export default M1Home;