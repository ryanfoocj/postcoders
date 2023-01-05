import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [areas, setAreas] = useState({});

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
      <SearchBar setAreas={setAreas} />
      <h2>{`Results for ${areas.area}: ${areas.results.length}`}</h2>
    </div>
  );
}

export default App;
