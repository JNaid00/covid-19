import React from "react";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import { Tooltip } from "flowbite-react";
const Navbar = () => {
  const { activeMenu, setActiveMenu ,  setScreenSize, screenSize} = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <Tooltip content="Menu">
        <button
          type="button"
          onClick={() => setActiveMenu((pre) => !pre)}
          className="text-xl relative rounded-full p-3 hover:bg-light-gray"
        >
          <span
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
          <AiOutlineMenu/>
        </button>
      </Tooltip>
    </div>
  );
};

export default Navbar;
