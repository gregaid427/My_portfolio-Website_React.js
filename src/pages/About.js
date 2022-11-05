import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full py-20 bg-[#193166] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>
        </div>
      
      <div className="max-w-[1000px] w-full flex md:flex-row sm:flex-col gap-8 px-4">
        <div className="sm:text-right flex-1 text-4xl font-bold  ">
          <p>Hi, i'm Greg, nice to meet you, please take a look around</p>
        </div>
        <div >
          <p className="text-2xl flex-1">
            I am passionate about building excellent software Applicatios and websites. I specialize in creating software for
            clients ranging from individuals and small businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
