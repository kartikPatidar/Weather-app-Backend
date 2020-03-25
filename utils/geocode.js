const request = require('request')

const geocode = (address, callback) => {
    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1Ijoia2FydGlrMTkyNCIsImEiOiJjazg1eWx0dWcwOGZ6M25vOGYxdTdxbTEwIn0.xC3CQWQtCM1LIOkl14fTEA'
    request({url: geocodeurl, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to the location service.', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find Location.Try again another search.', undefined)
        } else {
            data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
    
}

module.exports = geocode