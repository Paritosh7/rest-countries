import React, { useState } from "react";
import Main from "./Main";

function filterCountries(countries, filterVal) {
  if (filterVal === "All") return countries;

  return countries.filter(
    (country) => country?.region.toString() === filterVal
  );
}

function searchCountries(countries, searchQuery) {
  return countries.filter((country) => {
    return (
      country?.name?.common?.toString().toLowerCase().indexOf(searchQuery) > -1
    );
  });
}

const MainController = ({ allCountries, searchQuery, filter = "All" }) => {
  const [countries, setCountries] = useState(() => allCountries);
  console.log(countries);

  React.useEffect(() => {
    if (filter && searchQuery) {
      const filteredCountries = filterCountries(allCountries, filter);
      const searchedCountries = searchCountries(filteredCountries, searchQuery);
      setCountries(searchedCountries);
    } else if (filter) {
      setCountries(filterCountries(allCountries, filter));
    } else if (searchQuery) {
      setCountries(searchCountries(allCountries, searchQuery));
    } else {
      setCountries(allCountries);
    }
  }, [searchQuery, filter, allCountries]);

  return <Main countries={countries} searchQuery={searchQuery} />;
};

export default MainController;
