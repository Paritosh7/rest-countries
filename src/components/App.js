import GlobalStyles from "./GlobalStyles/GobalStyles";
import React from "react";
import Header from "./Header";
import Functionalities from "./Functionalities";
import Main from "./Main";

/**
 * TODO
 * 1. Make fetch generic
 * 2. Adding error boundary
 */

function App() {
  const [countries, setCountries] = React.useState(() => []);
  const [searchQuery, setSearchQuery] = React.useState(() => "");
  let countriesBySearch = null;

  function handleSearchQuery(value) {
    countriesBySearch = countries.filter((country) => {
      return (
        country?.name?.common?.toString().toLowerCase().indexOf(searchQuery) >
        -1
      );
    });

    setSearchQuery(value);

    console.log(countriesBySearch);
  }

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await response.json();
      setCountries(jsonData);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Functionalities appSearchQueryChangeListener={handleSearchQuery} />
      <Main
        countries={searchQuery.length > 0 ? countriesBySearch : countries}
      />
      <GlobalStyles />
    </div>
  );
}

export default App;
