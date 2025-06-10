import { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import planning from "../assets/icon-planning.svg";
import reminders from "../assets/icon-reminders.svg";
export default function Features() {
  const [isFeature, setFeature] = useState(false);
  return (
    <>
      <div className="md:relative ">
        <p
          onClick={() => setFeature(!isFeature)}
          className="flex items-center gap-2 duration-300   md:hover:text-black "
        >
          Features
          <img src={isFeature ? arrowUp : arrowDown} alt="" />
        </p>
        {isFeature && (
          <ul className="p-3 md:p-6  right-1   md:absolute md:rounded-2xl bg-white md:shadow-2xl md:mt-3 ">
            <li className=" flex items-center gap-3 ">
              <img src={todo} alt="" /> TodoList
            </li>
            <li className=" flex items-center gap-3">
              <img src={calendar} alt="" /> Calendar
            </li>
            <li className=" flex items-center gap-3">
              <img src={reminders} alt="" /> Reminders
            </li>
            <li className=" flex items-center gap-3">
              <img src={planning} alt="" /> Planning
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
