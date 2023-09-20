import React from "react";
import { ReactDOM } from "react-dom";


function Article (){
    return (
        <article className="w-full ">
            <div className=" container font-poppins mx-auto text-[#222] flex items-start flex-col gap-4">
            <h2 className="text-[#222] font-poppins font-bold text-3xl leading-9 ">Online Experiences</h2>
            <p className="w-[300px] font-poppins font-extralight">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            </div>
        </article>
    )
}

export default Article