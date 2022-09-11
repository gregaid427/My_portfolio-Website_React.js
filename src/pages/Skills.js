import React from "react";
import logo from "../assets/logo.jpg";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Express from '../assets/ex.png';
import Docker from '../assets/doc.png';
import MySql from '../assets/sql.png';
import Xamp from '../assets/xamp.png';
import Redux from '../assets/red.png';
import PHP from '../assets/php.png';

export const Skills = () => {
  return (
    <div name="skills" className=" bg-[#0a2a70] text-gray-300 py-10 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
        <p className=" text-4xl font-bold inline-block border-b-4 border-pink-600 ">
          Stacks & Technologies
        </p>
        <p>//These are the technologies i've worked with</p>
        </div>
       

      <div className=" w-full grid grid-cols-2 sm:grid-cols-4  gap-4  text-center py-8">
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={HTML}></img>
          <p className="my-4">Html</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={CSS}></img>
          <p className="my-4">Css</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={JavaScript}></img>
          <p className="my-4">JavaScript</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={PHP}></img>
          <p className="my-4">PHP</p>
        </div>
        
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={ReactImg}></img>
          <p className="my-4">React</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={Node}></img>
          <p className="my-4">Node</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={Express}></img>
          <p className="my-4">Express</p>
        </div>
       
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={Mongo}></img>
          <p className="my-4">Mongo</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={Redux}></img>
          <p className="my-4">Redux</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={MySql}></img>
          <p className="my-4">MySQL</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={Docker}></img>
          <p className="my-4">Docker</p>
        </div>
        <div className=" shadow-md pt-5 shadow-[#040c16] hover:scale-100 duration-500 ">
          <img className="w-20 mx-auto " src={Xamp}></img>
          <p className="my-4">Xamp</p>
        </div>
      
      </div>
      </div>
    </div>
  );
};

export default Skills;
