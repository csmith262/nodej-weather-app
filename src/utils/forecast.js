const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52bbde04ee861c92dc2c192996c1db78&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '&units=f'
 
    request({url, json: true}, (error, {body}  = {}) => {
        if (error) {
            callback('Unable to contect to weather service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            const tempature = body.current.temperature
            const precip = body.current.precip
            const city = body.location.name
            const state = body.location.region
            const humidity = body.current.humidity
            const feelslike = body.current.feelslike
            const wind_speed = body.current.wind_speed

            callback(undefined, 'There is ' + body.current.weather_descriptions[0] + 
              '. The temperature is ' + tempature + ', with a wind speed of ' + 
              wind_speed + ' and it feels like ' + feelslike + '.  There is ' + precip + '% chance of rain.')
        }
    })

}

module.exports = forecast
