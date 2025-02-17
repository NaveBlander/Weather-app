const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoibmF2ZWJsYW5kZXIiLCJhIjoiY2x5cXM5ZmN4MTQ0MDJrcjY2aGw2Nm90MyJ9.n4ErCSkdq8qR_UYKYmqdKA&limit=1'

    request({url, json: true}, (error, { body }) => {
        //Low level error
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode