import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div className="d-flex flex-column h-100">
            <Outlet />
        </div>
    )
}