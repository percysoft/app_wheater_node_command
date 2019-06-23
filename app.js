const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true,
  }
}).argv;

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);

    console.log(`El clima de ${coords.direccion} es de ${temp}`);
  } catch (e) {
    console.log('No se puede determinar el clima');
  }
}

getInfo(argv.direccion);