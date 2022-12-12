import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcDataRecovery } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { Tooltip } from "flowbite-react";
import { AiOutlineHome, AiOutlineFlag } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
const links = [
  {
    title: "Home",
    links: [
      {
        name: "home",
        to: "",
        icon: <AiOutlineHome />,
      },
    ],
  },
  {
    title: "World",
    links: [
      {
        name: "countries",
        to: "countries",
        icon: <AiOutlineFlag />,
      },
      {
        name: "World Map",
        to: "worldmap",
        icon: <IoMdGlobe />,
      },
    ],
  },
];
const Sidebar = () => {
  const { activeMenu, setActiveMenu,  setScreenSize, screenSize } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2 bg-slate-300";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className=" items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FcDataRecovery /> <span>COVID-19</span>
            </Link>

            <Tooltip content="Menu">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu(false);
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>

                {item.links.map((links) => (
                  <NavLink
                    to={`/${links.to}`}
                    key={`/${links.to}`}
                    onClick={() => {activeMenu !== undefined && screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true)}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {links.icon}
                    <span className="capitalize ">{links.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
