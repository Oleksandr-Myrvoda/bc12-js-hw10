export const fetchCountries = countryName => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  return fetch(url).then(countries => {
    if (countries.status === 404) throw new Error(error);
    return countries.json();
  });
};
