import React from "react";
import { ReactDOM } from "react";
import airbnb from "../assets/airbnb 1.png"

function Header (){
    return (
        <div className="w-full bg-[#FFF] h-[70px] shadow-lg">
            <nav className="container mx-auto py-6" >
                <a href=""><img src={airbnb}  alt="" /></a>
            

            </nav>
        </div>
    )
}

export default Header