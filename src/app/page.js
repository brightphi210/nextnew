'use client'
import Image from "next/image";
import { useState } from "react";



export default function Home() {

  const [isWhite, setIsWhite] = useState(false);


  const handleChangeToWhite = () => {
    setIsWhite(true);
  }


  const handleChangeToBlack = () => {
    setIsWhite(false);
  }



  return (

    <div className="relative">

      <a href="#sectionOne">
        <button className="fixed right-10 bottom-5 text-xs text-white">Click to top</button>
      </a>
      <div id="sectionOne" className={isWhite === true ? "white h-screen" : "black h-screen"}>
        <h2>This is Home Page</h2>
        <button className="bg-slate-700 text-white text-xs ml-4" onClick={handleChangeToWhite}>Change To White</button>
        <button className="bg-slate-700 text-white text-xs ml-4" onClick={handleChangeToBlack}>Change To Black</button>
      </div>

      <div className="bg-green-800 h-screen">
        <h2>This is Home Page</h2>
        <button className="bg-slate-700 text-white text-xs ml-4" onClick={handleChangeToWhite}>Change To White</button>
        <button className="bg-slate-700 text-white text-xs ml-4" onClick={handleChangeToBlack}>Change To Black</button>
      </div>

      <div className="bg-black h-screen">
        <h2>This is Home Page</h2>
        <button className="bg-slate-700 text-white text-xs ml-4" onClick={handleChangeToWhite}>Change To White</button>
        <button className="bg-slate-700 text-white text-xs ml-4" onClick={handleChangeToBlack}>Change To Black</button>
      </div>


    </div>
  );
}
