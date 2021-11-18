const getRefs = () => {
  return {
    input: document.querySelector('#search-box'),
    countriesList: document.querySelector('.country-list'),
    countriesInfo: document.querySelector('.country-info'),
  };
};
export default getRefs;
