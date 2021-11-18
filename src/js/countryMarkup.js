import Notiflix from 'notiflix';
import countriesListTmpl from '../templates/countriesList';
import countryTmpl from '../templates/country.hbs';
import getRefs from './refs';

const { countriesList, countriesInfo } = getRefs();

const countryMarkup = countries => {
  const length = countries.length;

  countries[0].languages = countries
    .map(country => Object.values(country.languages))
    .flat()
    .join(', ');

  if (length > 10) {
    const text = 'Too many matches found. Please enter a more specific name.';
    error(Notiflix.Notify.info(text));
    return;
  }
  if (length >= 2) {
    countriesList.insertAdjacentHTML('beforeend', countriesListTmpl(countries));
    return;
  }
  countriesInfo.insertAdjacentHTML('beforeend', countryTmpl(countries));
};

export default countryMarkup;
