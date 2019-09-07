//
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'ubicacion para obtener el clima'
    }
}).argv

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLon(direccion)
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon)
        return `El clima de: ${direccion} es de ${temperatura} grados.`;
    } catch (e) {
        return `El clima de: ${direccion} no se pudo determinar.`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)