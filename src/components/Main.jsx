import React from "react";
import { ReactDOM } from "react-dom";
import people from "../assets/people.png";

function Main (){
    return (
        <section className="w-full ">
            <div className="container mx-auto flex items-center justify-center my-8">
            <img src={people} alt="" />
            </div>
        </section>
    )
}

export default Main