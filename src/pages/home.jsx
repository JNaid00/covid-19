import React from "react";
import Covid19pics from "../components/Covid19pics";

const home = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full sm:p-10 p-2 pt-4 sm:pt-10">
          <div className="bg-home-image w-full max-w-7xl lg:h-[500px] md:h-[300px] h-[200px] mx-auto rounded-2xl bg-cover p-10">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              COVID-19 STATS
            </h1>
            <p className="tracking-widest text-gray-500 md:text-2xl dark:text-gray-400 max-w-[250px] hidden sm:block">
              This website servers as information an site for COVID-19
            </p>
          </div>
          HEllo
        </div>
      </div>
    </div>
  );
};

export default home;
