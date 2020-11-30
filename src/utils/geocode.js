const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29uY29yZDcwNCIsImEiOiJja2kxem10dWcxaHN4MzBrYml6ZWR1MWZhIn0.u4mONLZnBJ34DCKQmiKSmQ&limit=1&fuzzyMatch=false'

    request({url: url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to contect to map service!', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        }
        else {
            const long = body.features[0].center[0]
            const lat = body.features[0].center[1]
            const location = body.features[0].place_name
            callback(undefined, {latitude: lat, longitude: long, location: location})
        }
    })

}



module.exports = geocode
