const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Taking input from Terminal
const location = process.argv[2]

if(!location){
    console.log("Please provide Location.")
} else {
    geocode(location,(error, { latitude, longitude, location} = data)=>{
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error2, forecastdata) => {

            if(error) {
                return console.log(error2)
            }
            console.log(location)
            console.log(forecastdata)

          })
    })
}
