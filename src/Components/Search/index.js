import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState(undefined);
  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  console.log(input);
  return (
    <form className="mx-auto flex flex-row justify-between">
      <input
        className="rounded-lg border-blue-900 border"
        name="textInput"
        type="text"
        placeholder="Chicken, rice"
        id="search-term"
        required
        onChange={handleInputChange}
      />
      <select
        className="rounded-lg border-blue-900 border"
        name="dietInput"
        onChange={handleInputChange}
      >
        <option value="" defaultValue>
          Select
        </option>
        <option value="balanced">Balanced</option>
        <option value="high-fiber">High-Fiber</option>
        <option value="high-protein">High-Protein</option>
        <option value="low-carb">Low-Carb</option>
        <option value="low-fat">Low-Fat</option>
        <option value="low-sodium">Low-Sodium</option>
      </select>
      <input
        type="submit"
        value="Search"
        className="rounded-lg border-blue-900 border"
      />
    </form>
  );
};

class Search extends React.Component {
  render() {
    return (
      <div className="max-w-lg flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md mx-auto">
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-blue-700 leading-tight">
            What do you have?
          </h1>
          <p className="text-base text-gray-700 leading-normal">
            Type in the ingredients you're looking to clear out from your
            kitchen, select a diet and click search.
          </p>
          <Form />
        </div>
      </div>
    );
  }
}
export default Search;
