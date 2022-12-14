import React, { useEffect, useState } from "react";
import Covid19pics from "../components/Covid19pics";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineEditOff } from "react-icons/md";
import ReactTimeAgo from "react-time-ago";
const Home = () => {
  const [alldata, setAlldata] = useState({});
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlldata(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(alldata);
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white max-w-7xl dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full sm:p-10 p-2 pt-4 sm:pt-10">
          <div className="bg-home-image w-full  lg:h-[500px] md:h-[300px] h-[200px] mx-auto rounded-2xl bg-cover p-10">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              COVID-19 STATS
            </h1>
            <p className="tracking-widest text-gray-500 md:text-2xl dark:text-gray-400 max-w-[250px] hidden sm:block">
              This website servers as information an site for COVID-19
            </p>
          </div>
          <hr className="h-1 rounded-full md:max-w-3xl max-w-xs mx-auto bg-orange-600  mt-10"></hr>

          <h2 class="text-4xl font-extrabold dark:text-white text-center mt-4">
            Global Stats
          </h2>
          <div className="flex mt-5 flex-wrap">
            <div className="flex space-x-10 m-5 mx-auto text-center w-[350px] content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <MdOutlinePersonAddAlt className="my-auto text-5xl rounded-full text-orange-600" />
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Total Cases:
                </h5>
                <p className="text-orange-600 font-normal dark:text-gray-400">
                  {alldata.cases}
                </p>
              </div>
            </div>
            <div className="flex space-x-10 m-5 mx-auto text-center w-[350px] content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <MdOutlineEditOff className="my-auto text-5xl rounded-full text-orange-600" />
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Total Deaths:
                </h5>
                <p className="text-orange-600 font-normal dark:text-gray-400">
                  {alldata.deaths}
                </p>
              </div>
            </div>
            <div className="flex space-x-5 m-5 mx-auto text-center w-[350px] content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <FaHeartbeat className="my-auto text-5xl rounded-full text-orange-600" />
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Total Recoveries:
                </h5>
                <p className="text-orange-600 font-normal dark:text-gray-400">
                  {alldata.recovered}
                </p>
              </div>
            </div>
            
          </div>

          {/* Last updated */}
            
            {/* <h5>
              Last Updated: <ReactTimeAgo date={alldata.updated} />
            </h5> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
