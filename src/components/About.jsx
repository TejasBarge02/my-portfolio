import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16 sm:mt-[100px] md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text:xl md:text-2xl leading-7 md:leading-10 mt-10 sm:mt-20">
        Welcome to my portfolio! I'm a passionate and resourceful full-stack developer currently pursuing Computer Engineering at Vidyalankar Institute of Technology. With a strong foundation in both front-end and back-end technologies, I love turning ideas into reality through elegant and user-friendly web applications. My thirst for learning drives me to stay up-to-date with the latest trends and best practices, always striving to improve my skills. Aspiring to make a meaningful impact in the tech industry, I am eager to contribute my expertise and collaborate with like-minded professionals. Let's build something exceptional together! 
        </p>
      </div>
    </div>
  );
};

export default About;