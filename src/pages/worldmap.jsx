import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { Tabs } from "flowbite-react";
const Worldmap = () => {
  const [allCountries, setCOuntries] = useState([]);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCOuntries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const countryArray = [];
  const totalDeaths = [];
  const totalRecoveries = [];
  for (let i = 0; i < allCountries.length; i++) {
    countryArray.push({
      id: allCountries[i].countryInfo.iso3,
      value: allCountries[i].cases,
    });
    totalDeaths.push({
      id: allCountries[i].countryInfo.iso3,
      value: allCountries[i].deaths,
    });
    totalRecoveries.push({
      id: allCountries[i].countryInfo.iso3,
      value: allCountries[i].recovered,
    });
  }

  console.log(countryArray);
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-5">
          
          
          
          
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="Total Cases">
              {" "}
              <div className="h-screen max-h-[600px]">
                <Map data={countryArray} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Total Deaths">
              <div className="h-screen max-h-[600px]">
                <Map data={totalDeaths} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Total Recoveries">
              <div className="h-screen max-h-[600px]">
                <Map data={totalRecoveries} />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default Worldmap;
