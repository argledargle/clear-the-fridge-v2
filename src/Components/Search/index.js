import React from "react";

function Search() {
  return (
    <div className="max-w-lg flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md mx-auto">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          What do you have?
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          Type in the ingredients you're looking to clear out from your kitchen,
          select a diet and click search.
        </p>
        <form className="mx-auto">
          <input
            type="text"
            placeholder="Chicken, rice"
            id="search-term"
            required
          />
          <select class="diet">
            <option value="" selected>
              Select
            </option>
            <option value="balanced">Balanced</option>
            <option value="high-fiber">High-Fiber</option>
            <option value="high-protein">High-Protein</option>
            <option value="low-carb">Low-Carb</option>
            <option value="low-fat">Low-Fat</option>
            <option value="low-sodium">Low-Sodium</option>
          </select>
          <input type="submit" value="Search" class="button" />
        </form>
      </div>
    </div>
  );
}

export default Search;
