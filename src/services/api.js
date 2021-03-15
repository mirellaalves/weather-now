import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=Nuuk&appid=cc07f1fe0b9145888216df79e5733261'
});

export default api;
