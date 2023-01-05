import { useState } from "react";
import { getAreaData } from "../api/index";

const SearchBar = ({ setAreas }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getAreaData(searchInput)
      .then((data) => {
        setAreas({ area: searchInput, results: data });
      })
      .catch((err) => {
        console.log("Area could not be found");
      });
  };

  return (
    <div>
      <legend>
        Enter an outcode here:
        <br></br>
        <input placeholder="e.g M1" onChange={handleInput}></input>
      </legend>
      <button onClick={handleSearch}>Search!</button>
    </div>
  );
};

export default SearchBar;
