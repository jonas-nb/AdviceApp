/** @format */

import React, { useState, useEffect } from "react";
import { api } from "../../api";

const Main = () => {
  let [advice, setAdvice] = useState(
    "Click the button below to receive new advice."
  );
  const [stateLoading, setStateLoading] = useState(true);
  // this code below make rhe request api

  let loadAdvice = async () => {
    setStateLoading(false);
    const newAdvice = await api.json();
    setAdvice(newAdvice.slip.advice);
    setTimeout(() => {
      setStateLoading(true);
    }, 300);
  };

  // function with fetch api
  /* let loadAdvice = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((json) => setAdvice(json.slip.advice));
    } */

  return (
    <div className="flex flex-col w-full justify-around items-center h-2/6 sm:h-4/6 md:h-2/6 lg:h-3/6">
      <div className="w-64 p-3 backdrop-blur-3xl bg-white/10 rounded-md shadow-md shadow-blue-500/3 md:w-6/12">
        {stateLoading === false ? (
          <div className="text-center text-white ">
            looking for new advice...
          </div>
        ) : (
          <p className="text-white text-xl text-center sm:text-md md:text-2xl ">
            {advice}
          </p>
        )}
      </div>

      <button
        onClick={loadAdvice}
        className="w-32 h-11  text-white bg-blue-400 hover:bg-blue-500 shadow-xl hover:shadow-blue-300/5 rounded-md"
      >
        Refresh
      </button>
    </div>
  );
};

export default Main;
