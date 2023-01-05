import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import SearchBar from "./components/SearchBar";

import "./App.css";
import AreaDisplay from "./components/AreaDisplay";

function App() {
  const [areas, setAreas] = useState({});
  const [searchState, setSearchState] = useState(false);

  const load = async () => {
    try {
      const areaData = await getAreaData();

      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <SearchBar setAreas={setAreas} setSearchState={setSearchState} />
      <h2>
        {searchState
          ? `Results for ${areas.area}: ${areas.results.length}`
          : "Start searching for an area!"}
      </h2>
      {searchState ? <AreaDisplay results={areas.results} /> : null}
    </div>
  );
}

export default App;
