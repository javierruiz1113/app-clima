//
const axios = require('axios');

const getLugarLatLon = async(argvDir) => {

    const encodedUlr = encodeURI(argvDir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'ea2b5c5e0dmsh0c2b56943bcf18ep143aa2jsn1536870a0fa1' }
    });

    const res = await instance.get();
    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${argvDir}`)
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     })

    return {
        direccion,
        lat,
        lon
    }

}




module.exports = {
    getLugarLatLon
};