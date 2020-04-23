import React from "react";

export default () => {
  return (
    <div className="p-10 md:flex lg:justify-between lg:items-center mt-20 z-40">
      <div className="text-5xl mb-20 md:p-10 lg:text-6xl z-40">
        <h2 className="">Monitoring Exams Made Easy</h2>
      </div>
      <div>
        <img
          className="z-40"
          alt="logo"
          src="/images/manUsingSmartMonitoring.png"
        />
      </div>
      <div className="absolute w-2/3 outsideCorner ">
        <img alt="polygon" src="/images/polygon.png" />
      </div>
    </div>
  );
};
