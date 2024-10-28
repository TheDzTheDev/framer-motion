// src/components/BentoLayout.js
import React from 'react';

const BentoLayout = () => {
  return (
  <>
    <div className="container mx-auto p-4 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-0 auto-rows-fr h-full">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[324px] h-[211px]">
          <h2 className="text-sm text-purple-400">My Stacks</h2>
          <h3 className="text-xl font-bold">Dev Artisan</h3>
          <div className="space-x-2 mt-4 grid grid-cols-2">
            <span className="bg-gray-700 p-2 rounded-md">ReactJS</span>
            <span className="bg-gray-700 p-2 rounded-md">Spring</span>
            <span className="bg-gray-700 p-2 mt-4 rounded-md">Figma</span>
            <span className="bg-gray-700 p-2 mt-4 rounded-md">NodeJS</span>
          </div>
        </div>

        <div className="grid grid-cols-3 w-[380px] h-[80px] ml-2">
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[124px] h-[112px]">
            <h2 className="text-xl font-bold">01</h2>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[124px] h-[112px]">
            <h2 className="text-xl font-bold">02</h2>
            <p className="text-gray-400">Experience</p>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[124px] h-[112px]">
            <h2 className="text-xl font-bold">03</h2>
            <p className="text-gray-400">Hobby</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex-grow w-[380px] mt-[5px] h-[310px]">
          <h2 className="text-xl font-bold">Let's Work Together</h2>
          <p className="mt-2">Let's make magic happen together boom!!</p>
          <div className="mt-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md mb-2">Email Me</button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md">Schedule a Call</button>
          </div>
        </div>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded-lg ml-[4.4rem] shadow-lg flex items-center space-x-4 w-[300px] h-[325px]">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12"
            />
          <div>
            <h3 className="text-lg font-bold">Darwin Jordan</h3>
            <p className="text-sm">I'm a Software Engineer</p>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[226px] h-[325px] ml-[3.5rem]">
          <h2 className="text-sm text-purple-400">Projects</h2>
          <h3 className="text-xl font-bold">Works Gallery</h3>
          <div className="mt-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md">
              View Works
            </button>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg h-[211px] w-[324px] row-span-3 mt-11 flex-grow">
          <h2 className="text-sm text-purple-400">Work Process</h2>
          <h3 className="text-xl font-bold">Workflow Highlights</h3>
          <ul className="mt-4 space-y-2">
            <li>Goals & Objectives</li>
            <li>Research</li>
            <li>Wireframe</li>
            <li>Prototyping</li>
          </ul>
        </div>

        {/* <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex-grow w-[380px] ml-2 mt-14 h-full">
          <h2 className="text-xl font-bold">Let's Work Together</h2>
          <p className="mt-2">Let's make magic happen together boom!!</p>
          <div className="mt-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md mb-2">Email Me</button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md">Schedule a Call</button>
          </div>
        </div>  */}
      </div>
    </div>
  </>
  );
};

export default BentoLayout;
