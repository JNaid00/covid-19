import React from 'react'
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
const Covid19pics = () => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            {pic.map((item, index) => (
              <div
                className={`relative aspect-[9/10] h-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
                  index % 2 == 0 ? "rotate-2" : "-rotate-2"
                }`}
              >
                <img
                  className="absolute h-full w-full object-cover hover:scale-110 hover:duration-100 ease-in-out transition-transform"
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
          </div>
  )
}

export default Covid19pics