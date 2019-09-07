//
const axios = require('axios');

const getClima = async(lat, lon) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da6b0659f1e52120aafb2ac0f6d1e2b6&units=metric`);
    //throw new Error('No se puede gernerar el resultado del clima');

    return res.data.main.temp;

}



module.exports = {
    getClima
};