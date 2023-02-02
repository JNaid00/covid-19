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
  const [curveTypeCases, setcurveTypeCases] = useState("linear");
  const [curveTypeDeaths, setcurveTypeDeaths] = useState("linear");
  const [debugMeshCases, setdebugMeshCases] = useState(false);
  const [debugMeshDeaths, setdebugMeshDeaths] = useState(false);
  async function getData() {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=20"
    );
    const data = await response.json();
    setCOuntries(data);
  }
  useEffect(() => {
    getData();
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
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 rounded-xl w-full md:p-10">
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="Total Cases">
              <h1 className="text-center">
                Line graph of covid cases in the last 20 days
              </h1>
              <div className="flex-row md:flex items-center md:space-x-4 space-y-2 md:space-y-0">
                <div className="md:w-80">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Curve Type
                  </label>
                  <select
                    onChange={(e) => setcurveTypeCases(e.target.value)}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={"linear"}>linear</option>
                    <option value={"basis"}>Basis</option>
                    <option value={"catmullRom"}>CatmullRom</option>
                    <option value={"monotoneX"}>MonotoneX</option>
                    <option value={"monotoneY"}>MonotoneY</option>
                    <option value={"natural"}>Natural</option>
                    <option value={"step"}>Step</option>
                    <option value={"stepAfter"}>StepAfter</option>
                    <option value={"stepBefore"}>StepBefore</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Debug Mesh
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={debugMeshCases}
                      className="sr-only peer"
                      onChange={(e) =>
                        setdebugMeshCases(
                          debugMeshCases === false ? true : false
                        )
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {debugMeshCases === true ? "On" : "off"}
                    </span>
                  </label>
                </div>
              </div>

              <div className="h-screen lg:h-[30vw] max-h-[600px] min-w-[600px]">
                <LineChart
                  data={casesData}
                  curveType={curveTypeCases}
                  debugMesh={debugMeshCases}
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Total Deaths">
              <h1 className="text-center">
                Line graph of covid deaths in the last 20 days
              </h1>
              <div className="flex-row md:flex items-center md:space-x-4 space-y-2 md:space-y-0">
                <div className="md:w-80">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Curve Type
                  </label>
                  <select
                    onChange={(e) => setcurveTypeDeaths(e.target.value)}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={"linear"}>linear</option>
                    <option value={"basis"}>Basis</option>
                    <option value={"catmullRom"}>CatmullRom</option>
                    <option value={"monotoneX"}>MonotoneX</option>
                    <option value={"monotoneY"}>MonotoneY</option>
                    <option value={"natural"}>Natural</option>
                    <option value={"step"}>Step</option>
                    <option value={"stepAfter"}>StepAfter</option>
                    <option value={"stepBefore"}>StepBefore</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Debug Mesh
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={debugMeshDeaths}
                      className="sr-only peer"
                      onChange={(e) =>
                        setdebugMeshDeaths(
                          debugMeshDeaths === false ? true : false
                        )
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {debugMeshDeaths === true ? "On" : "off"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="h-screen lg:h-[30vw] max-h-[600px] min-w-[600px]">
                <LineChart data={deathsData} curveType={curveTypeDeaths} debugMesh={debugMeshDeaths}/>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default Globalhistory;
