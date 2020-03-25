const request = require('request')

const url = 'https://api.darksky.net/forecast/c08c86694a5f356f66f5a70bc6e65cf4/37.8267,-122.4233?units=si'

request({ url: url, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to Weather Service.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } 
    
    else {
        console.log(response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' +  response.body.currently.precipProbability + '% chances of rain.')
    }
    
})

//Geocoding
const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1Ijoia2FydGlrMTkyNCIsImEiOiJjazg1eWx0dWcwOGZ6M25vOGYxdTdxbTEwIn0.xC3CQWQtCM1LIOkl14fTEA'

request({url: geocodeurl, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to the location service.')
    } else if (response.body.features.length === 0){
        console.log('Unable to find Location.Try again another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }

})