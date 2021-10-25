import React from "react";
import Functionalities from "./Functionalities";
import MainController from "./MainController";

function Home() {
  const [countries, setCountries] = React.useState(() => []);
  const [searchQuery, setSearchQuery] = React.useState(() => "");
  const [filter, setFilter] = React.useState(() => "");

  function handleSearchQuery(value) {
    setSearchQuery(value);
  }

  function handleFilterChange(value) {
    setFilter(value);
  }

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await response.json();
      console.log(jsonData);
      setCountries(jsonData);
    })();
  }, []);

  return (
    <div className="App">
      <Functionalities
        appSearchQueryChangeListener={handleSearchQuery}
        appFilterChangeListener={handleFilterChange}
      />
      <MainController
        allCountries={countries}
        searchQuery={searchQuery}
        filter={filter}
      />
    </div>
  );
}

export default Home;
