let defaultCity = '北京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
  // eslint-disable-next-line no-empty
} catch (error) {}

export default {
  city: defaultCity,
  isFocus: false
};