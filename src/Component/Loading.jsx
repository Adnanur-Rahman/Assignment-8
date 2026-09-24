import React from 'react';
import logoImage from "../images/logo.png"

const Loading = () => {
    return (
       <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold flex items-center text-[#2881d3]">
        L
        <span className="inline-block animate-spin">
          <img
            className="w-10 h-10"
            src={logoImage}
            alt="Loading"
          />
        </span>
        ADING
      </h1>
    </div>
    );
};

export default Loading;