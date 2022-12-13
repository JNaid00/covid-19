import React from "react";

const pic = [
  {
    img: "covid1.jpeg",
  },
  {
    img: "covid2.jpeg",
  },
  {
    img: "covid3.jpeg",
  },
  {
    img: "covid4.jpg",
  },
  {
    img: "covid5.jpeg",
  },
];
const home = () => {
  return (
    <div className="mt-12 container mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap justify-center md:mx-5 mx-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-4">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            {pic.map((item, index) => (
              <div className={`relative aspect-[9/10] h-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${index % 2 == 0 ? "rotate-2" : "-rotate-2"}`}>
                <img className="absolute h-full w-full object-cover hover:scale-110 hover:duration-100 ease-in-out transition-transform" src={item.img} alt="" />
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">COVID-19 Statictics</h1>
            <p class="tracking-wider text-gray-500 md:text-2xl dark:text-gray-400 max-w-lg">This website serves as a content information site about COVID-19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
