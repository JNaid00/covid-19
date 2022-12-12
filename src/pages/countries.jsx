import React, { useEffect, useState } from "react";

const Countries = () => {
  const [allCountries, setCOuntries] = useState([]);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCOuntries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-10">
          <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            All Countries
          </h1>

          <div className="flex flex-wrap ">
            {allCountries.map((item) => (
              <div
                key={item.countryInfo._id}
                className="sm:w-52 bg-white mx-auto border m-3 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-full"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-30"
                    src={item.countryInfo.flag}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.country}
                  </h5>
                  <p className=" font-normal text-gray-700 dark:text-gray-400">
                    Cases: {item.cases}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Deaths: {item.deaths}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Recovered: {item.recovered}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
