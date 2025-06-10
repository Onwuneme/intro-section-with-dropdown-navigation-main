import { useState } from "react";
import closeMenu from "../assets/icon-close-menu.svg";
import menu from "../assets/icon-menu.svg";
import Features from "./Features";
import Login from "./Login";
import Company from "./Company";
export default function Menu() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <img
          src={click ? closeMenu : menu}
          alt=""
          className="h-5 z-30 relative"
          onClick={() => setClick(!click)}
        />
        {click && (
          <div className=" min-h-screen z-10 fixed top-0 left-0 right-0  flex flex-col items-end bg-black/50 text-gray-500 font-semibold">
            <div className=" bg-white w-55 min-h-screen px-6">
              <div className="pt-12">
                <Features />
                <Company />
                <p>Carreer</p>
                <p>About</p>
              </div>
              <Login />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
