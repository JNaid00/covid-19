import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "flowbite-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useStateContext } from "./contexts/ContextProvider";
import { Home, Countries, WorldMap, Table, Globalhistory } from "./pages";
import "./App.css";
const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <Tooltip content="Settings" animation="duration-500">
              <button
                data-tooltip-target="settings-tooltip"
                type="button"
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-3xl"
                style={{ background: "blue" }}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2 w-full"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
           
          
          <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/worldmap" element={<WorldMap />} />
                <Route path="/table" element={<Table />} />
                <Route path="/globalhistory" element={<Globalhistory />} />
              </Routes>
            </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
