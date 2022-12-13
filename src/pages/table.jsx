import React, { useEffect, useState } from "react";

const Table = () => {
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

  const sort = () => {
    let array = allCountries;

    for (var i = 0; i <= array.length - 1; i++) {
      for (var j = 0; j < array.length - i - 1; j++) {
        if (array[j].continent > array[j + 1].continent) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    setCOuntries(array);
    this.setState({});
  };
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-10">
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Table of each Country
          </h1>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Country Name
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">Flag</div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Continent
                      <a href="#" onClick={sort}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Cases
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Tests
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {allCountries
                  .filter((country) => {
                    if (country.countryInfo._id != null) {
                      return country;
                    }
                  })
                  .map((item) => (
                    <tr class="bg-white border text-gray-700  text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.country}
                      </th>
                      <td class="py-4 px-6">
                        <img className="h-5" src={item.countryInfo.flag}></img>
                      </td>
                      <td class="py-4 px-6">{item.continent}</td>
                      <td class="py-4 px-6">{item.cases.toLocaleString()}</td>
                      <td class="py-4 px-6">{item.tests.toLocaleString()}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
