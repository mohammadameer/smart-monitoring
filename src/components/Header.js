import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex justify-between items-center text-xl p-5">
      <Link to="/">Smart Monitoring</Link>
      <Link
        className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
        to="/demo"
      >
        Demo
      </Link>
    </div>
  );
};
