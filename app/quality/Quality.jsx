"use client"
import React from "react";
import quality from "../../assests/3.png";
import Image from "next/image";
import star from "../../assests/star.png"
function Quality() {

let handleclick=()=>{
var x= document.getElementById("para")
if(window.getComputedStyle(x).display==="none"){
    document.getElementById("para").style.display="block"
}
else{
    document.getElementById("para").style.display="none"
}
}

  return (
    <div className="w-full min-h-screen flex items-center justify-between mt-7 bg-[#B4A3ED] max-md:flex-col">
      <div className="w-[50%] max-md:w-[100%] ">
        <Image className="w-[560px]" src={quality} alt="error" />
      </div>
      <div className="w-[50%] min-h-screen space-y-4 p-5 mt-10 max-md:p-0 max-md:w-[100%]">
        <div>
        <div className="flex justify-between items-center">
        <p onClick={handleclick} className="text-5xl font-Antonio font-bold cursor-pointer">  ULTIMATE UV PROTECTION</p>
        <Image src={star} className="w-28" alt="error"/>
        </div>
         
          <p id="para" className="mt-4 hidden">
            YOUR EYE HEALTH IS OUR TOP PRIORITY. OUR LENSES ARE EQUIPPED WITH
            ADVANCED UV PROTECTION, SHIELDING YOUR EYES FROM HARMFUL RAYS
            WITHOUT COMPROMISING ON STYLE. WHETHER YOU'RE STROLLING ON THE BEACH
            OR EXPLORING THE CITY, REST ASSURED THAT YOUR EYES ARE SAFEGUARDED
            WITH CHICLOBE.
          </p>
        </div>
        <hr  className="border-black border"/>
        <div>
        <div className="flex justify-between items-center">
        <p onClick={handleclick} className="text-5xl font-Antonio font-bold cursor-pointer">UNRIVALED QUALITY</p>
        <Image src={star} className="w-28" alt="error"/>
        </div>
          <p className="text-5xl font-Antonio font-bold"></p>
          <p id="para" className="mt-4 ">
            ALL SUNGLASSES MUST MEET FOOD AND DRUG ADMINISTRATION IMPACT SAFETY
            STANDARDS. WHILE NO LENS IS TRULY UNBREAKABLE, PLASTIC LENSES ARE
            LESS LIKELY THAN GLASS LENSES TO SHATTER IF HIT BY A ROCK OR BALL.
            MOST NONPRESCRIPTION SUNGLASS LENSES ARE MADE FROM SOME TYPE OF
            PLASTIC.
          </p>
        </div>
       <hr className="border-black border" />
        <div>
        <div className="flex justify-between items-center">
        <p onClick={handleclick} className="text-5xl font-Antonio font-bold cursor-pointer">TRENDING STYLES</p>
        <Image src={star} className="w-28" alt="error"/>
        </div>
          <p className="text-5xl font-Antonio font-bold"></p>
          <p>
            THIS SEASON, WHEN YOU REACH FOR A ROUNDED PAIR OF SUNGLASSES, CHOOSE
            ONES THAT ARE MORE OVERSIZED IN SCALE THAN THE MICRO-MINIS THAT HAVE
            COME IN SEASONS PAST. IN PARTICULAR DEMAND FOR 2023 ARE CLASSIC
            AVIATOR STYLES, MADE FRESHER AND NEWER BY WAY OF THEIR CIRCULAR
            SHAPES.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quality;
