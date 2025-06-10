import { useState } from "react";
import Company from "./Company";
import Features from "./Features";
import Login from "./Login";
import Menu from "./Menu";

export default function Header() {
    const [activeDropdown,setActiveDropdown] = useState()

  return (
    <>
      <div className=" flex justify-between items-center px-2 py-2.5 gap-20 md:px-10 lg:pt-10 lg:text-xl  ">
        <h1 className="text-4xl lg:text-5xl font-bold">snap</h1>
        <Menu />
        <div className=" hidden md:flex w-full justify-between items-end  text-gray-500 font-semibold ">
          <div className="flex  gap-10 ">
            <Features activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
            <Company activeDropdown={activeDropdown}  />
            <p className="duration-300   md:hover:text-black">Carreer</p>
            <p className="duration-300   md:hover:text-black">About</p>
          </div>
          
          <div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
