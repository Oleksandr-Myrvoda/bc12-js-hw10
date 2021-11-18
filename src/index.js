import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import getRefs from './js/refs';
import countryMarkup from './js/countryMarkup';

const DEBOUNCE_DELAY = 300;
const { input, countriesList, countriesInfo } = getRefs();

const clear = () => {
  countriesList.innerHTML = '';
  countriesInfo.innerHTML = '';
};

const onInput = e => {
  clear();
  const imputValue = e.target.value.trim();
  if (!imputValue) return;

  fetchCountries(imputValue)
    .then(countries => countryMarkup(countries))
    .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
};

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

// == EXAMPLE PERU ==============
// fetch('https://restcountries.com/v3.1/name/peru')
//   .then(response => {
//     return response.json();
//   })
//   .then(country => console.log(country))
//   .catch(err => console.log(err));
