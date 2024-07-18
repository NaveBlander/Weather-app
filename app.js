const request = require('postman-request')

// const url = `http://api.weatherstack.com/current?access_key=435a0d518d723ed5ce70eded09229c42&query=Tel Aviv`

// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out in Tel Aviv. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=Tel Aviv&access_token=pk.eyJ1IjoibmF2ZWJsYW5kZXIiLCJhIjoiY2x5cXM5ZmN4MTQ0MDJrcjY2aGw2Nm90MyJ9.n4ErCSkdq8qR_UYKYmqdKA&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].geometry.coordinates[1]
        const longitude = response.body.features[0].geometry.coordinates[0]
        console.log('Latitude: ' + latitude + ', longitude: ' + longitude)
    }
})