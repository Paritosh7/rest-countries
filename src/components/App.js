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
      <Header />
      <Functionalities />
      <Main countries={countries} />
      <GlobalStyles />
    </div>
  );
}

export default App;
