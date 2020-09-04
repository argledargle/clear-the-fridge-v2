import React from "react";
import Search from "../Search";

function Main() {
  return (
    <div>
      <div className="max-w-lg mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md">
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-blue-700 leading-tight">
            Clear the Fridge
          </h1>
          <p className="text-base text-gray-700 leading-normal">
            A project to help you get the most of whatever you have in your
            fridge or pantry
          </p>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Main;
