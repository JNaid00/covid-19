import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import LineChart from "../components/LineChart";
let casesData = [
  {
    id: "global",
    color: "hsl(293, 70%, 50%)",
    data: [],
  },
];

let deathsData = [
  {
    id: "global",
    color: "hsl(293, 70%, 50%)",
    data: [],
  },
];

let recoveriesData = [
  {
    id: "global",
    color: "hsl(293, 70%, 50%)",
    data: [],
  },
];
const Globalhistory = () => {
  const [allCountries, setCOuntries] = useState({
    cases: {
      date: 0,
    },
    deaths: {
      date: 0,
    },
    recovered: {
      date: 0,
    },
  });

  const [content, setcontent] = useState(casesData);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=20")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "Original data");
        setCOuntries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  casesData = [
    {
      id: "global",
      color: "hsl(293, 70%, 50%)",
      data: [],
    },
  ];
  deathsData = [
    {
      id: "global",
      color: "hsl(293, 70%, 50%)",
      data: [],
    },
  ];
  // recoveriesData = [
  //   {
  //     id: "global",
  //     color: "hsl(293, 70%, 50%)",
  //     data: [],
  //   },
  // ];
  Object.keys(allCountries.cases).forEach(function (key, index) {
    if (allCountries.cases[key] != 0) {
      casesData[0].data.push({
        x: key,
        y: allCountries.cases[key],
      });
    }
  });

  Object.keys(allCountries.deaths).forEach(function (key, index) {
    if (allCountries.deaths[key] != 0) {
      deathsData[0].data.push({
        x: key,
        y: allCountries.deaths[key],
      });
    }
  });
  // Object.keys(allCountries.recovered).forEach(function (key, index) {
  //   if (allCountries.recovered[key] != 0) {
  //     recoveriesData[0].data.push({
  //       x: key,
  //       y: allCountries.recovered[key],
  //     });
  //   }
  // });

  console.log(recoveriesData, "Recovered data");
  // const getNewData = () => {
  //   fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=12")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCOuntries(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //   casesData = [
  //     {
  //       id: "global",
  //       color: "hsl(293, 70%, 50%)",
  //       data: [],
  //     },
  //   ];
  //   Object.keys(allCountries.cases).forEach(function (key, index) {
  //     if (allCountries.cases[key] != 0) {
  //       casesData[0].data.push({
  //         x: key,
  //         y: allCountries.cases[key],
  //       });
  //     }
  //   });
  // }
  console.log(casesData, "Hello");
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full md:p-10 min-w-[900px]">
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="Total Cases">
              <h1 className="text-center">Line graph of covid cases in the last 20 days</h1>
              <div className="sm:h-screen max-h-[600px]">
                <LineChart data={casesData} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Total Deaths">
            <h1 className="text-center">Line graph of covid deaths in the last 20 days</h1>
              <div className="sm:h-screen max-h-[600px]">
                <LineChart data={deathsData} />
              </div>
            </Tabs.Item>
            {/* <Tabs.Item title="Total Recoveries">
              <div className="sm:h-screen max-h-[600px]">
                <LineChart data={recoveriesData} />
              </div>
            </Tabs.Item> */}
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default Globalhistory;
