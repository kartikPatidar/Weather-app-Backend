const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Taking input from Terminal
const location = process.argv[2]

if(!location){
    console.log("Please provide Location.")
} else {
    geocode(location,(error, data)=>{
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error2, forecastdata) => {

            if(error) {
                return console.log(error2)
            }
            console.log(data.location)
            console.log(forecastdata)

          })
    })
}
