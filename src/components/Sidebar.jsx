import { Fragment } from "react";
import Logo from "./Logo";

function Sidebar () {
    return (
        <div className="bg-emerald-700 col-span-2 row-span-14 flex flex-col justify-start items-start">
            <Logo />
            <h1>Home</h1>
            <h1>Add</h1>
            <h1>Profile</h1>
        </div>
        
    )
}

export default Sidebar;