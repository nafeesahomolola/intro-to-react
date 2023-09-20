import React from "react";
import { ReactDOM } from "react-dom";
import person1 from "../assets/person1.png";
import star from "../assets/Star 1.png";



function Section (Props){
    return (
        <div className="w-full mt-[4rem]">
            <div className=" container mx-auto relative flex flex-col gap-2 items-start">
                <img className="w-[300px] object-cover rounded-lg" src={Props.img} alt="" />
                <button className="bg-[#FFF] text-[#222]  px-2 rounded-md absolute top-2 left-2">{Props.btntext}</button>

                <div className="flex flex-col gap-2"> 
                    <div className="flex items-center gap-3">

                        <img src={star} alt="" />
                        <p className="font-poppins text-lg font-light text-[#222]">{Props.star}</p>
                        <p className="font-poppins text-lg font-thin">({Props.reviews})</p>

                        <div className="flex items-center gap-3"> 
                        <div className="w-2 h-2 rounded-full bg-[#918E9B]"></div>
                        <p className="font-poppins text-xl font-thin">USA</p>

                        </div>
                    </div>

                    <p className="font-poppins text-xl font-light">{Props.desc}</p>
                    <p className="font-poppins text-xl font-semibold">From ${Props.cost} / <span className=" text-xl font-thin">person</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Section