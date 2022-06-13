import React from "react";
import { Outlet } from "react-router-dom";
function M1Home() {
        return(
        <div>
            <p>Basic Module</p>
            <Outlet />
        </div>);
}
export default M1Home;