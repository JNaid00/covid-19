import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
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

  const [searchItem, setsearchItem] = useState("")
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-10">
          <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            All Countries
          </h1>
          <div className="block mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Countries:{" "}
              <span className="font-normal text-gray-700 dark:text-gray-400">
                {allCountries.length}
              </span>
            </h5>
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                onChange={e => {setsearchItem(e.target.value)}}
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Countries"
                ></input>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap ">
            {allCountries.filter((count) => {
              if (count.countryInfo._id == null){

              }else
              if (searchItem == ""){
                return count
              }else if(count.country.toLowerCase().includes(searchItem.toLowerCase())){
                return count;
              }
            }).map((item) => (
              <div
                key={item.countryInfo._id}
                className="sm:w-60 bg-white mx-auto border m-3 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-full"
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
                  
                  <h5>
                    Last Updated: <ReactTimeAgo date={item.updated} />
                  </h5>
                  <p className=" font-normal text-gray-700 dark:text-gray-400">
                    Cases: {item.cases.toLocaleString()}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Deaths: {item.deaths.toLocaleString()}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Recovered: {item.recovered.toLocaleString()}
                  </p>
                  <p className="mt-5 font-normal text-gray-700 dark:text-gray-400">
                    New Cases: {item.todayCases.toLocaleString()}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    New Deaths: {item.todayDeaths.toLocaleString()}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    New Recoveries: {item.todayRecovered.toLocaleString()}
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
