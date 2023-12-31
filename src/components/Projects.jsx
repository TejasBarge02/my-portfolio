import React from "react";
import onlineBanking from "../assets/portfolio/online banking.png"
import xeno from "../assets/portfolio/xeno.png"
import mini from "../assets/portfolio/mini.png"

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: onlineBanking,
      demo: "",
      code: "https://github.com/TejasBarge02/VBank.git"
    },
    {
      id: 2,
      src: xeno,
      demo: "https://xeno-livid.vercel.app/",
      code: "https://github.com/riyan1806/new_project.git"
    },
    {
      id: 3,
      src: mini,
      demo: "",
      code: ""
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16 sm:mt-[100px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
