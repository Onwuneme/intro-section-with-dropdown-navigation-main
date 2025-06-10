import { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
export default function Company() {
  const [isCompany, setCompany] = useState(false);

  return (
    <>
      <div>
        <p
          onClick={() => setCompany(!isCompany)}
          className="flex items-center gap-2 duration-300 md:hover:text-black "
        >
          Company
          <img src={isCompany ? arrowUp : arrowDown} alt="" />
        </p>
        {isCompany && (
          <ul className="p-3 md:absolute md:rounded-2xl bg-white md:shadow-2xl md:mt-3  ">
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        )}
      </div>
    </>
  );
}
