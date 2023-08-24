import React from "react";

const About = () => {
  return (
    <div className="h-[calc(100vh-126px)] flex justify-center items-center">
      <div className="bg-gray-200/50 p-8 rounded-3xl">

        <div className="w-24 h-24 mb-8 mx-auto">
          <img
            src="./rafi.JPG"
            alt=""
            className="w-full h-full rounded-full ring-2 ring-offset-4 ring-slate-700"
          />
        </div>
        <h3 className="font-semibold text-2xl mb-3">Md. Shazed Ashraf</h3>
        <p>Front-End Developer</p>
      </div>
    </div>
  );
};

export default About;
