const axios = require('axios');


const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d698f0ecb9c234561c71fecedc857cac&units=metric`)
  return resp.data.main.temp;
}

module.exports = {
  getClima
}